import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-16">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto w-full transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-6">
          {content.hero.eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6 font-body italic">
          {content.hero.headline}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
          {content.hero.subhead}
        </p>

        <div className="border-t pt-6 mb-10">
          <p className="text-sm font-heading font-medium mb-1">{content.hero.signature}</p>
          <p className="text-sm text-muted-foreground italic">{content.hero.signatureNote}</p>
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

        <div className="mt-16 flex justify-center">
          <ArrowDown size={16} className="text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}
