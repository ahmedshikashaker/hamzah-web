interface SectionDividerProps {
  variant?: "wave1" | "wave2" | "curve" | "angles";
  flip?: boolean;
  className?: string;
}

export function SectionDivider({ variant = "wave1", flip = false, className = "" }: SectionDividerProps) {
  const paths: Record<string, string> = {
    wave1: "M0,64 C320,100 420,0 640,64 C860,128 960,32 1200,64 L1200,0 L0,0 Z",
    wave2: "M0,96 C150,32 350,128 500,64 C650,0 850,96 1000,32 C1150,0 1200,64 1200,64 L1200,0 L0,0 Z",
    curve: "M0,64 C400,128 800,0 1200,64 L1200,0 L0,0 Z",
    angles: "M0,0 L0,40 L300,80 L600,40 L900,80 L1200,40 L1200,0 Z",
  };

  const bgColor = "var(--bg-secondary)";
  const flipTransform = flip ? "scaleY(-1)" : "";

  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} style={{ transform: flipTransform }}>
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24 lg:h-32"
        style={{ display: "block" }}
      >
        <path
          d={paths[variant]}
          fill={bgColor}
          style={{ transition: "fill 0.3s ease" }}
        />
      </svg>
    </div>
  );
}
