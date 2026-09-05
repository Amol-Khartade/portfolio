'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RotateCcw, Play, Pause, Compass, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const DesktopPC: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const autoRotateRef = useRef(true);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const initialRotation = useRef<{ x: number; y: number }>({ x: 0, y: -0.3 });

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Safe Dimensions
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 2. Scene
    const scene = new THREE.Scene();

    // 3. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 3.8);

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
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // 5. OrbitControls (Full Horizontal & Vertical Orbit with Safety Limits)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // Disable scroll hijack so page scrolls cleanly
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Do not go below desk level
    controls.minPolarAngle = 0.15; // Vertical tilt upward limit
    controls.rotateSpeed = 0.8;
    controlsRef.current = controls;

    // 6. Cybernetic Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x080c14, 1.5);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    // Neon accent lights inside/around PC
    const emeraldLight = new THREE.PointLight(0x10b981, 3, 8);
    emeraldLight.position.set(-0.8, 0.5, 0.8);
    scene.add(emeraldLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 3.5, 8);
    cyanLight.position.set(1.2, 0.8, -0.5);
    scene.add(cyanLight);

    // 7. Ground Hologram Ring
    const ringGeo = new THREE.RingGeometry(1.6, 1.63, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = -0.7;
    scene.add(ringMesh);

    // Secondary inner cyan ring
    const ringGeo2 = new THREE.RingGeometry(1.2, 1.22, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 2;
    ringMesh2.position.y = -0.7;
    scene.add(ringMesh2);

    // 8. Load Desktop PC Model
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

        // Auto-center & auto-scale model to fit container perfectly
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.4 / maxDim;

        model.scale.setScalar(scale);
        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale - 0.25;
        model.position.z = -center.z * scale;

        // Apply slight isometric rotation
        modelGroup.rotation.y = initialRotation.current.y;

        // Enhance materials
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              const mat = mesh.material as THREE.MeshStandardMaterial;
              mat.roughness = Math.min(mat.roughness, 0.7);
              mat.envMapIntensity = 1.5;
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

    // 9. Window Scroll Parallax Reaction (Vertical & Horizontal scroll response)
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let scrollVelocity = 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.0015;
      lastScrollY = currentScrollY;

      if (modelGroupRef.current) {
        // Subtle tilt and rotation on vertical scroll
        modelGroupRef.current.rotation.y += scrollVelocity * 0.8;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // 10. Window Resize Handler
    const onResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth || 600;
      const newHeight = container.clientHeight || 450;
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

      // Use native OrbitControls auto-rotation
      controls.autoRotate = autoRotateRef.current;
      controls.autoRotateSpeed = 1.0;

      // Rotate hologram rings
      ringMesh.rotation.z += delta * 0.15;
      ringMesh2.rotation.z -= delta * 0.2;

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
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl border border-slate-800/80 bg-slate-950/70 backdrop-blur-xl overflow-hidden shadow-2xl flex items-center justify-center group">
      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Click and drag to rotate vertically and horizontally"
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-20 font-mono text-xs">
          <Loader2 className="h-8 w-8 text-emerald-400 animate-spin" />
          <div className="text-slate-200 font-bold">
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

      {/* Top Telemetry Header */}
      <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <Badge variant="emerald" size="sm" pulse>
            INTERACTIVE 3D WORKSTATION
          </Badge>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800 backdrop-blur-md">
          <Compass className="h-3 w-3 text-cyan-400" />
          <span>360° ORBIT: HORIZONTAL &amp; VERTICAL</span>
        </div>
      </div>

      {/* Bottom Floating Controls */}
      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 backdrop-blur-md pointer-events-auto">
          <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
          <span className="hidden xs:inline">Drag to Orbit</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              autoRotate
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white'
            }`}
            title={autoRotate ? 'Pause Auto-Spin' : 'Resume Auto-Spin'}
          >
            {autoRotate ? (
              <>
                <Pause className="h-3 w-3" />
                <span className="hidden sm:inline">Spinning</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3" />
                <span className="hidden sm:inline">Auto-Spin</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleResetView}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700 transition-all"
            title="Reset to default angle"
          >
            <RotateCcw className="h-3 w-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Subtle Corner Vignette */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/5" />
    </div>
  );
};
