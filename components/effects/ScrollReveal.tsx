"use client";

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
}: ScrollRevealProps) {
  return <div className={className}>{children}</div>;
}
