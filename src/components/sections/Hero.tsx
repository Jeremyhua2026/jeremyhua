import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Hero() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 pt-24 pb-16 relative overflow-hidden">
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
        {/* Name */}
        <p className="text-sm text-muted-foreground font-heading mb-4">
          {content.meta.name} · {content.meta.location}
        </p>

        {/* Headline — short */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug mb-8 font-body">
          {content.hero.headline}
        </h1>

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
