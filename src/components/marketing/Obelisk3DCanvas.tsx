"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Obelisk3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const lightAmber = new THREE.PointLight(0xf5a623, 4, 15);
    lightAmber.position.set(3, 3, 4);
    scene.add(lightAmber);

    const lightViolet = new THREE.PointLight(0x8b7bf0, 4, 15);
    lightViolet.position.set(-3, -3, 4);
    scene.add(lightViolet);

    // Group for Obelisk
    const obeliskGroup = new THREE.Group();
    scene.add(obeliskGroup);

    // Pillar Geometry (Cylinder / Prism Obelisk)
    const pillarGeo = new THREE.CylinderGeometry(0.5, 0.9, 3.2, 4);
    const pillarMat = new THREE.MeshPhysicalMaterial({
      color: 0x8b7bf0,
      emissive: 0x221844,
      roughness: 0.1,
      metalness: 0.8,
      clearcoat: 1.0,
      transmission: 0.5,
      transparent: true,
      opacity: 0.9,
    });
    const pillar = new THREE.Mesh(pillarGeo, pillarMat);
    obeliskGroup.add(pillar);

    // Pyramid Tip
    const tipGeo = new THREE.ConeGeometry(0.5, 0.8, 4);
    const tipMat = new THREE.MeshStandardMaterial({
      color: 0xf5a623,
      emissive: 0xf5a623,
      emissiveIntensity: 0.6,
      roughness: 0.2,
    });
    const tip = new THREE.Mesh(tipGeo, tipMat);
    tip.position.y = 2.0;
    obeliskGroup.add(tip);

    // Orbiting Rings
    const ringGeo = new THREE.TorusGeometry(1.6, 0.03, 16, 80);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xf5a623,
      emissive: 0xf5a623,
      emissiveIntensity: 0.8,
      wireframe: true,
    });

    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    obeliskGroup.add(ring1);

    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x3ddc84,
      emissive: 0x3ddc84,
      emissiveIntensity: 0.8,
      wireframe: true,
    });
    const ring2 = new THREE.Mesh(ringGeo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    obeliskGroup.add(ring2);

    // Floating particles around obelisk
    const pGeo = new THREE.BufferGeometry();
    const pCount = 80;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 5;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 5;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x8b7bf0,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Pointer Parallax
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointer = (e: PointerEvent) => {
      if (reduceMotion) return;
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      targetY = -((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });

    let animId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!reduceMotion) {
        obeliskGroup.rotation.y = elapsedTime * 0.4;
        ring1.rotation.z = elapsedTime * 0.6;
        ring2.rotation.z = -elapsedTime * 0.5;
        particles.rotation.y = elapsedTime * 0.1;

        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        obeliskGroup.rotation.x = currentY;
        obeliskGroup.rotation.z = currentX;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      pillarGeo.dispose();
      pillarMat.dispose();
      tipGeo.dispose();
      tipMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ring2Mat.dispose();
      pGeo.dispose();
      pMat.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[380px] relative pointer-events-none" />;
}
