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
      <style>{`@keyframes slowDrift { 0%, 100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(5px); opacity: 0.3; } }`}</style>
      {/* Subtle animated grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      {/* Botanical accent */}
      <svg className="absolute bottom-32 right-12 opacity-[0.04] pointer-events-none" width="120" height="200" viewBox="0 0 120 200" fill="none">
        <path d="M60 200 C60 200 60 100 60 0" stroke="currentColor" strokeWidth="0.8" className="text-foreground" />
        <path d="M60 160 C40 140 20 130 10 110" stroke="currentColor" strokeWidth="0.6" className="text-foreground" />
        <path d="M60 130 C80 110 95 95 105 75" stroke="currentColor" strokeWidth="0.6" className="text-foreground" />
        <path d="M60 95 C42 78 28 68 15 52" stroke="currentColor" strokeWidth="0.6" className="text-foreground" />
        <path d="M60 65 C75 50 88 38 100 22" stroke="currentColor" strokeWidth="0.6" className="text-foreground" />
        <path d="M60 40 C48 28 35 20 25 8" stroke="currentColor" strokeWidth="0.6" className="text-foreground" />
      </svg>

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
        className={`absolute bottom-16 flex flex-col items-center gap-3 transition-all duration-1000 ease-out ${
          stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground/40" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-muted-foreground/60"
          style={{ animation: 'slowDrift 5s ease-in-out infinite' }}
        >
          <path d="M4 7L10 13L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
