interface DecorativeLineProps {
  variant?: "dots" | "arrow" | "wave";
  className?: string;
}

export default function DecorativeLine({ variant = "dots", className = "" }: DecorativeLineProps) {
  if (variant === "dots") {
    return (
      <div className={`flex justify-center items-center gap-3 py-4 ${className}`}>
        <div className="w-6 h-px bg-border" />
        <div className="w-1 h-1 rounded-full bg-highlight/40" />
        <div className="w-6 h-px bg-border" />
      </div>
    );
  }

  if (variant === "arrow") {
    return (
      <div className={`flex justify-center py-5 ${className}`}>
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
          <line x1="12" y1="0" x2="12" y2="32" stroke="hsl(var(--highlight))" strokeWidth="1" opacity="0.3" />
          <polyline points="6,28 12,36 18,28" stroke="hsl(var(--highlight))" strokeWidth="1" fill="none" opacity="0.3" />
        </svg>
      </div>
    );
  }

  // wave
  return (
    <div className={`flex justify-center py-4 ${className}`}>
      <svg width="80" height="12" viewBox="0 0 80 12" fill="none">
        <path d="M0 6 Q10 0 20 6 Q30 12 40 6 Q50 0 60 6 Q70 12 80 6" stroke="hsl(var(--highlight))" strokeWidth="1" fill="none" opacity="0.2" />
      </svg>
    </div>
  );
}
