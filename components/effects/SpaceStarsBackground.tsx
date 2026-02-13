"use client";

import { useEffect, useRef } from "react";

interface SpaceStarsBackgroundProps {
  className?: string;
}

export function SpaceStarsBackground({ className = "" }: SpaceStarsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const setup = async () => {
      const container = containerRef.current;
      if (!container) return;

      const THREE = await import("three");
      if (cancelled) return;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const prefersReducedMotion = mediaQuery.matches;
      const isMobile = window.innerWidth < 768;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 500);
      camera.position.z = 42;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      const starCount = isMobile ? 500 : 950;
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);
      const mixPrimary = new Float32Array(starCount);
      const mixSecondary = new Float32Array(starCount);

      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        const radius = 12 + Math.random() * 120;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);

        mixPrimary[i] = Math.random() * 0.48;
        mixSecondary[i] = Math.random() * 0.38;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: isMobile ? 0.18 : 0.22,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.82,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);

      const resize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (width === 0 || height === 0) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      resize();

      const onResize = () => resize();
      window.addEventListener("resize", onResize);

      let baseOpacity = prefersReducedMotion ? 0.8 : 0.74;
      let opacityPulse = prefersReducedMotion ? 0 : 0.08;

      const paintPalette = (darkMode: boolean) => {
        const start = darkMode ? new THREE.Color("#b892da") : new THREE.Color("#5f3685");
        const mid = darkMode ? new THREE.Color("#ffe1a8") : new THREE.Color("#ab6c2a");
        const end = darkMode ? new THREE.Color("#d5b9eb") : new THREE.Color("#824db2");

        baseOpacity = prefersReducedMotion ? (darkMode ? 0.8 : 0.62) : darkMode ? 0.74 : 0.56;
        opacityPulse = prefersReducedMotion ? 0 : darkMode ? 0.08 : 0.045;
        material.size = isMobile ? (darkMode ? 0.18 : 0.17) : darkMode ? 0.22 : 0.21;
        material.blending = darkMode ? THREE.AdditiveBlending : THREE.NormalBlending;
        material.opacity = baseOpacity;

        for (let i = 0; i < starCount; i++) {
          const i3 = i * 3;
          const tone = start.clone().lerp(mid, mixPrimary[i]).lerp(end, mixSecondary[i]);
          colors[i3] = tone.r;
          colors[i3 + 1] = tone.g;
          colors[i3 + 2] = tone.b;
        }

        const colorAttr = geometry.getAttribute("color");
        colorAttr.needsUpdate = true;
        material.needsUpdate = true;
      };

      const isDarkMode = () => document.documentElement.classList.contains("dark");
      paintPalette(isDarkMode());

      const themeObserver = new MutationObserver(() => {
        paintPalette(isDarkMode());
      });
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      const clock = new THREE.Clock();
      let frameId = 0;
      let sectionInView = true;
      const pointerInfluence = prefersReducedMotion || isMobile ? 0 : 0.085;
      let targetTiltX = 0;
      let targetTiltY = 0;
      let currentTiltX = 0;
      let currentTiltY = 0;

      const onPointerMove = (event: PointerEvent) => {
        if (pointerInfluence === 0) return;
        const nx = event.clientX / window.innerWidth - 0.5;
        const ny = event.clientY / window.innerHeight - 0.5;
        targetTiltY = nx * pointerInfluence;
        targetTiltX = ny * pointerInfluence * 0.75;
      };

      const resetPointerTilt = () => {
        targetTiltX = 0;
        targetTiltY = 0;
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", resetPointerTilt);

      const render = () => {
        if (!sectionInView || document.hidden) {
          frameId = 0;
          return;
        }

        const elapsed = clock.getElapsedTime();
        currentTiltX += (targetTiltX - currentTiltX) * 0.06;
        currentTiltY += (targetTiltY - currentTiltY) * 0.06;

        stars.rotation.y = elapsed * 0.015 + currentTiltY;
        stars.rotation.x = Math.sin(elapsed * 0.08) * 0.035 + currentTiltX;
        material.opacity = prefersReducedMotion ? baseOpacity : baseOpacity + Math.sin(elapsed * 0.9) * opacityPulse;

        renderer.render(scene, camera);
        frameId = window.requestAnimationFrame(render);
      };

      const requestRender = () => {
        if (frameId === 0 && !prefersReducedMotion && sectionInView && !document.hidden) {
          frameId = window.requestAnimationFrame(render);
        }
      };

      const sectionObserver = new IntersectionObserver(
        ([entry]) => {
          sectionInView = entry.isIntersecting;
          if (sectionInView) {
            requestRender();
          } else if (frameId) {
            window.cancelAnimationFrame(frameId);
            frameId = 0;
          }
        },
        { threshold: 0.08 }
      );
      sectionObserver.observe(container);

      const onVisibilityChange = () => {
        if (document.hidden && frameId) {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
          return;
        }
        requestRender();
      };
      document.addEventListener("visibilitychange", onVisibilityChange);

      if (prefersReducedMotion) {
        renderer.render(scene, camera);
      } else {
        requestRender();
      }

      cleanup = () => {
        window.cancelAnimationFrame(frameId);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerleave", resetPointerTilt);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        themeObserver.disconnect();
        sectionObserver.disconnect();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    void setup();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <div ref={containerRef} className={`pointer-events-none ${className}`} aria-hidden="true" />;
}
