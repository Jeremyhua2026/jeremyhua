export default function ThreadLine() {
  return (
    <div className="section-thread" aria-hidden="true">
      <svg viewBox="0 0 2 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="48"
          style={{ stroke: "hsl(var(--edge))" }}
          strokeWidth="0.8"
          strokeDasharray="3 5"
          opacity="0.5"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="16"
            to="0"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  );
}
