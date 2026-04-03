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
        {/* Photo strip — polaroid-style, slightly rotated, connected */}
        <div className="flex items-center gap-4 mb-12">
          {frames.map((frame, i) => (
            <div
              key={i}
              className="group"
              style={{
                transform: `rotate(${i === 0 ? '-2' : i === 1 ? '1' : '-1'}deg)`,
              }}
            >
              <div className="bg-card p-1.5 pb-6 rounded shadow-md border border-border/40 w-[90px] sm:w-[100px]">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={frame.src}
                    alt={frame.caption}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="text-[7px] sm:text-[8px] text-muted-foreground font-heading mt-2 text-center tracking-wide">
                  {frame.caption}
                </p>
              </div>
            </div>
          ))}

          {/* Connecting thread from photos to text */}
          <div className="hidden sm:flex items-center gap-1.5 ml-2">
            <div className="w-8 h-px bg-border" />
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          </div>
        </div>

        {/* Name — casual */}
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
