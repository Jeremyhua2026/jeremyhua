import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

import origin1 from "@/assets/travel-3.jpg";
import origin2 from "@/assets/travel-4.jpg";
import origin3 from "@/assets/travel-2.jpg";

const frames = [
  { src: origin1, caption: "Pay attention to what pulls you" },
  { src: origin2, caption: "Look past what's obvious" },
  { src: origin3, caption: "Let it land" },
];

export default function Hero() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Subtle background letter */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-[28rem] font-heading font-bold leading-none text-foreground/[0.02] select-none pointer-events-none">
        J
      </div>

      <div
        ref={ref}
        className={`max-w-2xl mx-auto w-full transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Polaroid clothesline — hung-up style */}
        <div className="relative mb-14">
          {/* Clothesline */}
          <div className="absolute top-3 left-0 right-0 h-px bg-border/60" style={{ width: '85%' }} />
          
          <div className="flex items-start gap-6 sm:gap-8">
            {frames.map((frame, i) => (
              <div
                key={i}
                className="group relative"
                style={{
                  transform: `rotate(${i === 0 ? '-2.5' : i === 1 ? '1.5' : '-1'}deg)`,
                  marginTop: `${i === 1 ? '4' : i === 2 ? '2' : '0'}px`,
                }}
              >
                {/* Clip/pin */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-5 z-10">
                  <div className="w-1.5 h-4 bg-muted-foreground/30 rounded-sm mx-auto" />
                </div>

                {/* Polaroid frame */}
                <div className="bg-[hsl(var(--surface-warm))] p-2 pb-10 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] w-[110px] sm:w-[130px] mt-3">
                  <div className="overflow-hidden">
                    <img
                      src={frame.src}
                      alt={frame.caption}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground font-body italic mt-3 text-center leading-snug px-1">
                    {frame.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Name */}
        <p className="text-sm text-muted-foreground font-heading mb-4">
          {content.meta.name} · {content.meta.location}
        </p>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug mb-5 font-body">
          {content.hero.headline}
          <br />
          <span className="text-muted-foreground">{content.hero.headlineLine2}</span>
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg whitespace-pre-line">
          {content.hero.subhead}
        </p>

        {/* Current status */}
        <div className="mb-8 flex items-start gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-highlight animate-pulse mt-1.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-foreground/80 font-heading">
              {content.hero.currentStatus}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {content.hero.currentDetail}
            </p>
          </div>
        </div>

        <a
          href={`mailto:${content.meta.email}`}
          className="inline-flex items-center gap-2 text-sm font-heading font-medium bg-foreground text-background px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          {content.hero.cta}
        </a>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-1">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-highlight/30" />
          <div className="w-1 h-1 rounded-full bg-highlight/40" />
        </div>
      </div>
    </section>
  );
}
