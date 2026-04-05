import { content } from "@/data/content";
import { useEffect, useState } from "react";

export default function Hero() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 1200),
      setTimeout(() => setStage(3), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <style>{`@keyframes slowDrift { 0%, 100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(5px); opacity: 0.3; } }`}</style>
      {/* Subtle animated grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      {/* Root structure — hero only */}
      <svg
        className="absolute pointer-events-none opacity-[0.045] dark:opacity-[0.06]"
        style={{
          right: "-5%",
          bottom: "-15%",
          width: "55vw",
          maxWidth: "700px",
          height: "auto",
          filter: "blur(0.3px)",
        }}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Main taproot */}
        <path d="M580 600 C575 570 565 530 550 490 C535 450 520 410 500 375 C480 340 455 310 430 285 C405 260 375 240 345 225" stroke="currentColor" strokeWidth="2.2" className="text-foreground" strokeLinecap="round" />
        
        {/* Major lateral roots */}
        <path d="M550 490 C530 475 505 465 475 460 C445 455 410 458 375 465 C340 472 305 485 270 500 C240 512 210 528 180 540" stroke="currentColor" strokeWidth="1.6" className="text-foreground" strokeLinecap="round" />
        <path d="M500 375 C475 355 445 342 410 335 C380 330 345 332 310 340 C280 347 250 360 220 378" stroke="currentColor" strokeWidth="1.4" className="text-foreground" strokeLinecap="round" />
        <path d="M430 285 C400 268 365 258 330 255 C295 253 260 260 225 275" stroke="currentColor" strokeWidth="1.1" className="text-foreground" strokeLinecap="round" />
        
        {/* Downward roots */}
        <path d="M565 530 C560 555 552 580 540 600" stroke="currentColor" strokeWidth="1.3" className="text-foreground" strokeLinecap="round" />
        <path d="M475 460 C465 485 458 515 455 545 C452 575 455 595 458 600" stroke="currentColor" strokeWidth="1" className="text-foreground" strokeLinecap="round" />
        
        {/* Secondary branches */}
        <path d="M375 465 C355 478 330 495 305 515 C280 535 258 555 240 580" stroke="currentColor" strokeWidth="0.8" className="text-foreground" strokeLinecap="round" />
        <path d="M410 335 C388 325 362 320 335 322 C310 325 285 335 260 350" stroke="currentColor" strokeWidth="0.7" className="text-foreground" strokeLinecap="round" />
        <path d="M345 225 C318 215 288 212 258 218 C230 225 205 240 182 260" stroke="currentColor" strokeWidth="0.7" className="text-foreground" strokeLinecap="round" />
        
        {/* Fine root hairs */}
        <path d="M270 500 C248 510 225 525 205 542" stroke="currentColor" strokeWidth="0.4" className="text-foreground" strokeLinecap="round" />
        <path d="M310 340 C290 348 268 360 248 375" stroke="currentColor" strokeWidth="0.4" className="text-foreground" strokeLinecap="round" />
        <path d="M330 255 C308 250 285 252 262 260" stroke="currentColor" strokeWidth="0.35" className="text-foreground" strokeLinecap="round" />
        <path d="M180 540 C158 552 135 562 115 568" stroke="currentColor" strokeWidth="0.3" className="text-foreground" strokeLinecap="round" />
        <path d="M220 378 C198 390 175 405 155 422" stroke="currentColor" strokeWidth="0.3" className="text-foreground" strokeLinecap="round" />
        <path d="M225 275 C205 282 185 295 168 310" stroke="currentColor" strokeWidth="0.3" className="text-foreground" strokeLinecap="round" />
        <path d="M240 580 C228 590 215 598 205 600" stroke="currentColor" strokeWidth="0.25" className="text-foreground" strokeLinecap="round" />
        <path d="M182 260 C165 272 150 288 138 305" stroke="currentColor" strokeWidth="0.25" className="text-foreground" strokeLinecap="round" />
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

      {/* Bottom-right italic phrase */}
      <p
        className={`absolute bottom-20 right-8 sm:right-12 md:right-16 text-xs sm:text-sm italic text-muted-foreground/50 font-body transition-all duration-1000 ease-out ${
          stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        I've learned to trust it.
      </p>

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
