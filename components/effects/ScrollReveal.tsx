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
  delay: _delay = 0,
  threshold = 0.01,
  once = true,
  distance = 8,
  duration = 240,
  rootMargin = "0px 0px -2% 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

    let frameId = 0;
    if (reduceMotion) return;

    const initiallyInView = element.getBoundingClientRect().top <= window.innerHeight * 0.92;
    if (initiallyInView && once) {
      frameId = requestAnimationFrame(() => setIsVisible(true));
      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          frameId = requestAnimationFrame(() => setIsVisible(true));
          if (once) {
            observer.unobserve(element);
          }
          return;
        }

        if (!once) {
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
    "fade-up": `translate3d(0, ${distance}px, 0)`,
    "fade-left": `translate3d(-${distance}px, 0, 0)`,
    "fade-right": `translate3d(${distance}px, 0, 0)`,
    "scale": "scale(0.985)",
    "fade": "none",
  };

  const transformWhenHidden = hiddenTransforms[animation];
  const shown = reduceMotion || isVisible;
  const shouldTransition = !reduceMotion;
  void _delay;
  const effectiveDelay = 0;
  const effectiveDuration = Math.min(duration, 260);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translate3d(0, 0, 0)" : transformWhenHidden,
        transitionProperty: "opacity, transform",
        transitionDuration: shouldTransition ? `${effectiveDuration}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: shown && shouldTransition ? `${effectiveDelay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
