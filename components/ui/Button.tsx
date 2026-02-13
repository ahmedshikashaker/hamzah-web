import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] disabled:opacity-50 disabled:pointer-events-none gap-2";

const variants = {
  primary: "btn-primary rounded-xl",
  secondary: "bg-[var(--secondary)] text-white hover:bg-[var(--secondary-light)] rounded-xl shadow-lg shadow-[var(--secondary)]/20",
  outline: "btn-outline rounded-xl",
  ghost: "btn-ghost rounded-xl",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  icon,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
