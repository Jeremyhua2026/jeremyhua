import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Hero() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Subtle decorative corner accents */}
      <div className="absolute top-20 left-8 w-12 h-12 border-l border-t border-border/40 rounded-tl-sm pointer-events-none" />
      <div className="absolute bottom-12 right-8 w-12 h-12 border-r border-b border-border/40 rounded-br-sm pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-2xl mx-auto w-full transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-8">
          {content.meta.name}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6 font-body">
          {content.hero.headline}
          <br />
          <span className="text-muted-foreground">{content.hero.headlineLine2}</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl whitespace-pre-line">
          {content.hero.subhead}
        </p>

        {/* Current status line */}
        <div className="mb-10">
          <p className="text-sm text-foreground font-heading flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" />
            {content.hero.currentStatus}
          </p>
          <p className="text-sm text-muted-foreground mt-1 ml-3.5">
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

        {/* Scroll indicator — subtle line + dot */}
        <div className="mt-16 flex flex-col items-center gap-1">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-muted-foreground/30" />
          <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
        </div>
      </div>
    </section>
  );
}
