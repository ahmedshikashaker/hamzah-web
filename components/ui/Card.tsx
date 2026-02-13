import { ReactNode, ComponentProps } from "react";

interface CardProps extends ComponentProps<"div"> {
  children: ReactNode;
  variant?: "default" | "glass" | "elevated" | "bordered";
  hover?: boolean;
  className?: string;
}

const variants = {
  default: "bg-[var(--card-bg)] border border-[var(--card-border)]",
  glass: "bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)]",
  elevated: "bg-[var(--bg-secondary)] shadow-xl shadow-black/5 dark:shadow-black/20",
  bordered: "bg-transparent border-2 border-[var(--border-color)]",
};

export function Card({
  children,
  variant = "default",
  hover = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        ${variants[variant]}
        rounded-2xl
        ${hover ? "transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/5 hover:-translate-y-1" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`p-6 pb-0 ${className}`}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
