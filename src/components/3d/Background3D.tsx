'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Background3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability safely
    try {
      const testCanvas = document.createElement('canvas');
      const gl =
        testCanvas.getContext('webgl') ||
        testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    // 1. Safe initial dimensions
    const width = container.clientWidth || (typeof window !== 'undefined' ? window.innerWidth : 800);
    const height = container.clientHeight || (typeof window !== 'undefined' ? window.innerHeight : 600);

    // 2. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080c14, 0.0018);

    // 3. Camera
    const camera = new THREE.PerspectiveCamera(60, Math.max(0.1, width / Math.max(1, height)), 1, 1000);
    camera.position.z = 400;
    camera.position.y = 50;

    // 4. Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setIsSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    // 5. Particle Field (Constellation / Neural Matrix Nodes)
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const colorPalette = [
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x6366f1), // Indigo
      new THREE.Color(0x38bdf8), // Sky Blue
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 800;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 500;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 600;

      const chosenColor =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;

      velocities.push({
        x: (Math.random() - 0.5) * 0.25,
        y: (Math.random() - 0.5) * 0.25,
        z: (Math.random() - 0.5) * 0.2,
      });
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture (soft radial glow)
    const createCircleTexture = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
          gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
          gradient.addColorStop(0.7, 'rgba(16, 185, 129, 0.2)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(32, 32, 32, 0, Math.PI * 2);
          ctx.fill();
          return new THREE.CanvasTexture(canvas);
        }
      } catch {
        // fallback to null map
      }
      return null;
    };

    const particleTexture = createCircleTexture();
    const particleMaterial = new THREE.PointsMaterial({
      size: 6,
      vertexColors: true,
      map: particleTexture || undefined,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 6. Connecting Constellation Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const maxLineSegments = 450;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // 7. Perspective Cyberspace Grid Plane
    const gridHelper = new THREE.GridHelper(1200, 40, 0x10b981, 0x1e293b);
    gridHelper.position.y = -180;
    if (Array.isArray(gridHelper.material)) {
      gridHelper.material.forEach((mat) => {
        mat.transparent = true;
        mat.opacity = 0.15;
      });
    } else if (gridHelper.material) {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.15;
    }
    scene.add(gridHelper);

    // 8. Mouse & Interactive Coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = (typeof window !== 'undefined' ? window.innerWidth : 800) / 2;
    const windowHalfY = (typeof window !== 'undefined' ? window.innerHeight : 600) / 2;

    const onPointerMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.15;
      mouseY = (event.clientY - windowHalfY) * 0.15;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });

    // 9. Resize Handler
    const onResize = () => {
      if (!container || !renderer) return;
      const currentWidth = container.clientWidth || window.innerWidth || 800;
      const currentHeight = container.clientHeight || window.innerHeight || 600;
      camera.aspect = Math.max(0.1, currentWidth / Math.max(1, currentHeight));
      camera.updateProjectionMatrix();
      renderer.setSize(currentWidth, currentHeight);
    };

    window.addEventListener('resize', onResize);

    // 10. Animation Loop with Visibility Optimization
    let animationFrameId: number;
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      if (!posAttr) return;
      const posArray = posAttr.array as Float32Array;

      // Mouse smoothing with dampening
      targetX += (mouseX - targetX) * 0.035;
      targetY += (mouseY - targetY) * 0.035;

      camera.position.x = targetX * 0.8;
      camera.position.y = 50 - targetY * 0.5;
      camera.lookAt(0, 0, 0);

      // Subtle particle drift
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArray[i3] += velocities[i].x;
        posArray[i3 + 1] += velocities[i].y;
        posArray[i3 + 2] += velocities[i].z;

        // Bounce within boundary box
        if (Math.abs(posArray[i3]) > 400) velocities[i].x *= -1;
        if (Math.abs(posArray[i3 + 1]) > 250) velocities[i].y *= -1;
        if (Math.abs(posArray[i3 + 2]) > 300) velocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      // Update line connections
      let lineIndex = 0;
      const connectionDistSq = 75 * 75;

      for (let i = 0; i < particleCount && lineIndex < maxLineSegments; i++) {
        for (let j = i + 1; j < particleCount && lineIndex < maxLineSegments; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < connectionDistSq) {
            const l6 = lineIndex * 6;
            linePositions[l6] = posArray[i * 3];
            linePositions[l6 + 1] = posArray[i * 3 + 1];
            linePositions[l6 + 2] = posArray[i * 3 + 2];
            linePositions[l6 + 3] = posArray[j * 3];
            linePositions[l6 + 4] = posArray[j * 3 + 1];
            linePositions[l6 + 5] = posArray[j * 3 + 2];
            lineIndex++;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex * 2);
      lineGeometry.attributes.position.needsUpdate = true;

      // Slow rotation for grid
      gridHelper.rotation.y += delta * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture?.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      gridHelper.geometry.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full h-full"
      aria-hidden="true"
    >
      {/* Fallback ambient glow in case WebGL is unavailable or initializing */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_60%,rgba(6,182,212,0.1),rgba(255,255,255,0))]" />
      {!isSupported && (
        <div className="absolute inset-0 grid-bg-overlay opacity-30" />
      )}
    </div>
  );
};
