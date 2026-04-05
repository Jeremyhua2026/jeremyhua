export default function TreeRoots() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
      {/* Subtle depth gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(var(--foreground) / 0.015) 100%)",
        }}
      />

      {/* Abstract root network — bottom-right, partially off-screen */}
      <svg
        className="absolute opacity-[0.035] dark:opacity-[0.05]"
        style={{
          right: "-8%",
          bottom: "-12%",
          width: "50vw",
          maxWidth: "650px",
          height: "auto",
          filter: "blur(0.4px)",
        }}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primary tendrils — irregular, asymmetric */}
        <path d="M500 500 C470 460 430 410 380 370 C340 340 290 325 240 310" stroke="currentColor" strokeWidth="1.2" className="text-foreground" />
        <path d="M500 480 C460 440 420 390 390 340 C365 300 350 250 340 200" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <path d="M480 500 C450 470 410 450 360 430 C310 415 260 410 200 405" stroke="currentColor" strokeWidth="0.9" className="text-foreground" />

        {/* Secondary branches */}
        <path d="M380 370 C350 355 310 350 270 360 C240 368 210 380 175 395" stroke="currentColor" strokeWidth="0.6" className="text-foreground" />
        <path d="M390 340 C370 310 340 285 300 270 C270 260 235 265 200 275" stroke="currentColor" strokeWidth="0.6" className="text-foreground" />
        <path d="M360 430 C330 420 295 425 260 440" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
        <path d="M340 200 C325 170 300 150 270 140" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />

        {/* Fine capillaries */}
        <path d="M240 310 C220 305 195 310 170 320" stroke="currentColor" strokeWidth="0.3" className="text-foreground" />
        <path d="M300 270 C280 258 255 255 230 260" stroke="currentColor" strokeWidth="0.3" className="text-foreground" />
        <path d="M270 360 C250 365 225 375 200 385" stroke="currentColor" strokeWidth="0.25" className="text-foreground" />
        <path d="M270 140 C250 132 225 130 200 135" stroke="currentColor" strokeWidth="0.25" className="text-foreground" />
        <path d="M175 395 C155 402 130 408 110 410" stroke="currentColor" strokeWidth="0.2" className="text-foreground" />
        <path d="M200 275 C180 280 155 290 135 300" stroke="currentColor" strokeWidth="0.2" className="text-foreground" />
      </svg>
    </div>
  );
}
