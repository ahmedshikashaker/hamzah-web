"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
  threshold?: number;
  once?: boolean;
  distance?: number;
  duration?: number;
  rootMargin?: string;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  once = true,
  distance = 28,
  duration = 760,
  rootMargin = "0px 0px -10% 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (reduceMotion) return;

    let hasEntered = false;
    let frameId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasEntered = true;
          frameId = requestAnimationFrame(() => setIsVisible(true));
          if (once) {
            observer.unobserve(element);
          }
          return;
        }

        if (!hasEntered || !once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [once, reduceMotion, rootMargin, threshold]);

  const hiddenTransforms: Record<string, string> = {
    "fade-up": `translate3d(0, ${distance}px, 0) scale(0.985)`,
    "fade-left": `translate3d(-${distance}px, 0, 0)`,
    "fade-right": `translate3d(${distance}px, 0, 0)`,
    "scale": "scale(0.96)",
    "fade": "none",
  };

  const transformWhenHidden = hiddenTransforms[animation];
  const shouldBlur = animation !== "fade";
  const shown = reduceMotion || isVisible !== false;
  const shouldTransition = !reduceMotion && isVisible !== null;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translate3d(0, 0, 0) scale(1)" : transformWhenHidden,
        filter: shown || !shouldBlur ? "blur(0px)" : "blur(2px)",
        transitionProperty: "opacity, transform, filter",
        transitionDuration: shouldTransition ? `${duration}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: shown && shouldTransition ? `${delay}ms` : "0ms",
        willChange: shouldTransition ? "opacity, transform" : "auto",
      }}
    >
      {children}
    </div>
  );
}
