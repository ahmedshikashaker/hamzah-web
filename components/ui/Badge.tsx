import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline" | "secondary";
  size?: "sm" | "md";
  className?: string;
}

const variants = {
  default: "bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--border-color)]",
  accent: "badge-accent",
  outline: "border-2 border-[var(--secondary)] text-[var(--secondary)]",
  secondary: "bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20",
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-xs",
};

export function Badge({ children, variant = "default", size = "sm", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
