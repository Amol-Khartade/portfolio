'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RotateCcw, Play, Pause, Compass, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface DesktopPCProps {
  asBackground?: boolean;
}

export const DesktopPC: React.FC<DesktopPCProps> = ({ asBackground = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const autoRotateRef = useRef(true);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const initialRotation = useRef<{ x: number; y: number }>({ x: 0, y: -0.22 });

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;
    const isMediumScreen = typeof window !== 'undefined' && window.innerWidth >= 768;

    // 1. Safe Dimensions
    const width = container.clientWidth || (typeof window !== 'undefined' ? window.innerWidth : 1200);
    const height = container.clientHeight || (typeof window !== 'undefined' ? window.innerHeight : 800);

    // 2. Scene
    const scene = new THREE.Scene();

    // 3. Camera - closer perspective for large, heroic model presence
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.25, 3.1);

    // 4. WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setIsLoading(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;

    container.appendChild(renderer.domElement);

    // 5. OrbitControls (Full Horizontal & Vertical Orbit with Damping)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // Never trap page scrolling
    controls.maxPolarAngle = Math.PI / 2 - 0.03; // Ground tilt boundary
    controls.minPolarAngle = 0.12; // High-angle top-down tilt boundary
    controls.rotateSpeed = 0.8;
    controlsRef.current = controls;

    // 6. Immersive Neon Cyber Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x080c14, 1.8);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3.0);
    dirLight.position.set(6, 10, 6);
    scene.add(dirLight);

    // High-intensity cyber neon point lights
    const emeraldLight = new THREE.PointLight(0x10b981, 4.5, 12);
    emeraldLight.position.set(-1.2, 0.8, 1.2);
    scene.add(emeraldLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 5.0, 12);
    cyanLight.position.set(1.6, 1.1, -0.6);
    scene.add(cyanLight);

    const bottomGlow = new THREE.PointLight(0x10b981, 2.5, 8);
    bottomGlow.position.set(0, -0.8, 0);
    scene.add(bottomGlow);

    // 7. Expanded Hologram Rings
    const ringGeo = new THREE.RingGeometry(2.6, 2.64, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = isLargeScreen ? -0.95 : -1.15;
    scene.add(ringMesh);

    const ringGeo2 = new THREE.RingGeometry(1.95, 1.98, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 2;
    ringMesh2.position.y = isLargeScreen ? -0.95 : -1.15;
    scene.add(ringMesh2);

    // 8. Load & Scale Desktop PC Model (Significantly Larger)
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const modelPath = `${basePath}/models/desktop_pc/scene.gltf`;

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        // Substantially increased scale factor (+55% larger!)
        const scaleFactor = isLargeScreen ? 3.85 : isMediumScreen ? 3.3 : 2.85;
        const scale = scaleFactor / maxDim;

        model.scale.setScalar(scale);

        // Position: offset toward right on desktop to frame copy, centered on mobile
        const offsetX = isLargeScreen ? 1.05 : 0;
        const offsetY = isLargeScreen ? -0.42 : -0.68;

        model.position.x = -center.x * scale + offsetX;
        model.position.y = -center.y * scale + offsetY;
        model.position.z = -center.z * scale;

        ringMesh.position.x = offsetX;
        ringMesh2.position.x = offsetX;

        controls.target.set(offsetX * 0.45, offsetY * 0.3, 0);

        modelGroup.rotation.y = initialRotation.current.y;

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              const mat = mesh.material as THREE.MeshStandardMaterial;
              mat.roughness = Math.min(mat.roughness, 0.65);
              mat.envMapIntensity = 1.8;
            }
          }
        });

        modelGroup.add(model);
        setIsLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const progress = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadingProgress(progress);
        } else {
          setLoadingProgress((prev) => Math.min(prev + 10, 90));
        }
      },
      (error) => {
        console.error('Error loading 3D Desktop PC model:', error);
        setIsLoading(false);
      }
    );

    // 9. Vertical & Horizontal Scroll Reactive Parallax
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = (currentScrollY - lastScrollY) * 0.002;
      lastScrollY = currentScrollY;

      if (modelGroupRef.current) {
        modelGroupRef.current.rotation.y += scrollDelta * 1.3;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // 10. Window Resize Handler
    const onResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', onResize);

    // 11. Animation Loop
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

      // Smooth auto-rotation
      controls.autoRotate = autoRotateRef.current;
      controls.autoRotateSpeed = 0.8;

      ringMesh.rotation.z += delta * 0.12;
      ringMesh2.rotation.z -= delta * 0.18;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // 12. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      controls.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleResetView = () => {
    if (controlsRef.current && modelGroupRef.current) {
      controlsRef.current.reset();
      modelGroupRef.current.rotation.set(0, initialRotation.current.y, 0);
    }
  };

  return (
    <div
      className={
        asBackground
          ? 'absolute inset-0 w-full h-full overflow-hidden'
          : 'relative w-full h-[450px] sm:h-[540px] lg:h-[620px] rounded-2xl border border-slate-800/80 bg-slate-950/70 backdrop-blur-xl overflow-hidden'
      }
    >
      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Click and drag anywhere to rotate 360° horizontally & vertically"
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-20 font-mono text-xs">
          <Loader2 className="h-8 w-8 text-emerald-400 animate-spin" />
          <div className="text-slate-200 font-bold tracking-wider">
            LOADING 3D WORKSTATION...
          </div>
          <div className="w-48 bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-800">
            <div
              className="bg-emerald-400 h-full transition-all duration-300 shadow-[0_0_10px_#10b981]"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="text-[10px] text-slate-500">{loadingProgress}%</div>
        </div>
      )}

      {/* Floating 3D Interaction Badge and Controls (Bottom-Right of Hero) */}
      <div className="absolute bottom-6 right-6 z-20 flex flex-wrap items-center gap-2 pointer-events-auto">
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-slate-300 bg-slate-950/80 border border-slate-800/90 px-3 py-1.5 rounded-xl backdrop-blur-md shadow-lg">
          <Compass className="h-3.5 w-3.5 text-cyan-400" />
          <span>360° DRAG ORBIT (H &amp; V)</span>
        </div>

        <button
          type="button"
          onClick={() => setAutoRotate(!autoRotate)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border backdrop-blur-md transition-all shadow-lg ${
            autoRotate
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
              : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-white'
          }`}
          title={autoRotate ? 'Pause Auto-Spin' : 'Resume Auto-Spin'}
        >
          {autoRotate ? (
            <>
              <Pause className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">Auto-Spin</span>
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">Auto-Spin</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleResetView}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-950/80 text-slate-400 border border-slate-800/90 hover:text-white hover:border-slate-700 backdrop-blur-md transition-all shadow-lg"
          title="Reset to default angle"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span className="hidden xs:inline">Reset</span>
        </button>
      </div>
    </div>
  );
};
