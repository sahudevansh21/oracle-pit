"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLightGreen = new THREE.PointLight(0x3ddc84, 4, 20);
    pointLightGreen.position.set(-3, 2, 4);
    scene.add(pointLightGreen);

    const pointLightRed = new THREE.PointLight(0xff5c72, 4, 20);
    pointLightRed.position.set(3, -2, 4);
    scene.add(pointLightRed);

    const pointLightViolet = new THREE.PointLight(0x8b7bf0, 3, 25);
    pointLightViolet.position.set(0, 0, 5);
    scene.add(pointLightViolet);

    // 1. Particle Grid Background Field
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
      particleScales[i] = Math.random() * 0.08 + 0.02;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0x8a97a6,
      size: 0.08,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 2. Orbs Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Create YES Orb (Green glass sphere + ring)
    const orbGeo = new THREE.IcosahedronGeometry(1.6, 6);

    const yesMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x3ddc84,
      emissive: 0x1a5c37,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      thickness: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      ior: 1.4,
      transparent: true,
      opacity: 0.9,
    });

    const yesOrb = new THREE.Mesh(orbGeo, yesMaterial);
    yesOrb.position.set(-2.6, 0.4, 0);
    mainGroup.add(yesOrb);

    // YES Orb Wireframe/Ring Overlay
    const ringGeo = new THREE.TorusGeometry(2.1, 0.04, 16, 100);
    const yesRingMat = new THREE.MeshStandardMaterial({
      color: 0x3ddc84,
      emissive: 0x3ddc84,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });
    const yesRing = new THREE.Mesh(ringGeo, yesRingMat);
    yesRing.rotation.x = Math.PI / 3;
    yesOrb.add(yesRing);

    // Create NO Orb (Red glass sphere + ring)
    const noMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff5c72,
      emissive: 0x661e27,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      thickness: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      ior: 1.4,
      transparent: true,
      opacity: 0.9,
    });

    const noOrb = new THREE.Mesh(orbGeo, noMaterial);
    noOrb.position.set(2.6, -0.4, -0.5);
    mainGroup.add(noOrb);

    // NO Orb Ring Overlay
    const noRingMat = new THREE.MeshStandardMaterial({
      color: 0xff5c72,
      emissive: 0xff5c72,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });
    const noRing = new THREE.Mesh(ringGeo, noRingMat);
    noRing.rotation.y = Math.PI / 4;
    noOrb.add(noRing);

    // Connecting Energy Beam / Lattice line between orbs
    const lineMat = new THREE.LineDashedMaterial({
      color: 0x8b7bf0,
      dashSize: 0.2,
      gapSize: 0.1,
      opacity: 0.5,
      transparent: true,
    });
    const points = [yesOrb.position, noOrb.position];
    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const connectingLine = new THREE.Line(lineGeo, lineMat);
    mainGroup.add(connectingLine);

    // Mouse Parallax Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      if (reduceMotion) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = -y * 0.6;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Animation Loop
    let animId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!reduceMotion) {
        // Idle Rotations
        yesOrb.rotation.y = elapsedTime * 0.4;
        yesOrb.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;

        noOrb.rotation.y = -elapsedTime * 0.4;
        noOrb.rotation.z = Math.cos(elapsedTime * 0.5) * 0.2;

        particles.rotation.y = elapsedTime * 0.03;

        // Smooth Mouse Parallax
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;

        mainGroup.rotation.y = currentX;
        mainGroup.rotation.x = currentY;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
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
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      orbGeo.dispose();
      yesMaterial.dispose();
      noMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
