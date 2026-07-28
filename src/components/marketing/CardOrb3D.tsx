"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  color: number;
  type?: "sphere" | "torus" | "octahedron";
}

export function CardOrb3D({ color, type = "sphere" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(color, 3, 10);
    pointLight.position.set(2, 2, 3);
    scene.add(pointLight);

    let geometry: THREE.BufferGeometry;
    if (type === "torus") {
      geometry = new THREE.TorusGeometry(0.9, 0.35, 16, 50);
    } else if (type === "octahedron") {
      geometry = new THREE.OctahedronGeometry(1.1, 0);
    } else {
      geometry = new THREE.IcosahedronGeometry(1.0, 4);
    }

    const material = new THREE.MeshPhysicalMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 0.3,
      roughness: 0.15,
      metalness: 0.2,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.9,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Outer wireframe ring
    const ringGeo = new THREE.TorusGeometry(1.4, 0.02, 16, 60);
    const ringMat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    scene.add(ring);

    let animId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      mesh.rotation.x = t * 0.5;
      mesh.rotation.y = t * 0.7;
      ring.rotation.z = -t * 0.4;
      ring.rotation.x = Math.sin(t * 0.3) * 0.3;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [color, type]);

  return <div ref={containerRef} className="w-20 h-20 relative pointer-events-none" />;
}
