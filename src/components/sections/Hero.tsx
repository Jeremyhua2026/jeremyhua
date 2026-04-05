import { content } from "@/data/content";
import { useEffect, useState } from "react";

export default function Hero() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),   // Name fades in
      setTimeout(() => setStage(2), 1200),  // Line fades in
      setTimeout(() => setStage(3), 2200),  // Arrow fades in
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle animated grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="flex flex-col items-center text-center gap-8">
        {/* Name */}
        <p
          className={`text-xs tracking-[0.3em] uppercase text-muted-foreground font-heading transition-all duration-1000 ease-out ${
            stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {content.meta.name}
        </p>

        {/* Line */}
        <h1
          className={`text-xl sm:text-2xl md:text-3xl font-light leading-relaxed font-body text-foreground/80 max-w-lg transition-all duration-1000 ease-out delay-100 ${
            stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          I tend to follow curiosity longer than I should.
        </h1>
      </div>

      {/* Scroll arrow at bottom */}
      <div
        className={`absolute bottom-12 flex flex-col items-center gap-2 transition-all duration-1000 ease-out ${
          stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-muted-foreground/30" />
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="text-muted-foreground/40 animate-[fadePulse_4s_ease-in-out_infinite]"
          style={{ animationName: 'fadePulse' }}
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
