import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";


export default function Hero() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Large decorative letter — background texture */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-[28rem] font-heading font-bold leading-none text-foreground/[0.02] select-none pointer-events-none">
        J
      </div>

      {/* Geometric accent — top-left corner bracket */}
      <div className="absolute top-20 left-8 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M0 40 L0 0 L40 0" stroke="hsl(var(--highlight))" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>
      {/* Bottom-right bracket */}
      <div className="absolute bottom-12 right-8 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M40 0 L40 40 L0 40" stroke="hsl(var(--highlight))" strokeWidth="1.5" opacity="0.4" />
        </svg>
      </div>


      <div
        ref={ref}
        className={`max-w-2xl mx-auto w-full transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Name with accent dash */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-highlight" />
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading">
            {content.meta.name}
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6 font-body">
          {content.hero.headline}
          <br />
          <span className="text-muted-foreground">{content.hero.headlineLine2}</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl whitespace-pre-line">
          {content.hero.subhead}
        </p>

        {/* Current status — with highlight pip */}
        <div className="mb-10 pl-4 border-l-2 border-highlight/40">
          <p className="text-sm text-foreground font-heading flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-highlight animate-pulse" />
            {content.hero.currentStatus}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {content.hero.currentDetail}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${content.meta.email}`}
            className="inline-flex items-center gap-2 text-sm font-heading font-medium bg-foreground text-background px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            {content.hero.cta}
          </a>
          <span className="text-xs text-muted-foreground font-heading">{content.meta.location}</span>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-1">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-highlight/30" />
          <div className="w-1 h-1 rounded-full bg-highlight/40" />
        </div>
      </div>
    </section>
  );
}
