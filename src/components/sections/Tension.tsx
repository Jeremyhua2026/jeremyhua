import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Tension() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="px-6 py-20 bg-surface-warm relative overflow-hidden">
      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full origin-top-right pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, hsl(var(--highlight) / 0.15) 50%, transparent)' }}
      />

      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 relative ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Large quotation mark */}
        <span className="absolute -top-6 -left-4 text-6xl font-body text-highlight/20 leading-none select-none">"</span>

        <p className="text-lg sm:text-xl text-foreground font-heading font-medium mb-4">
          {content.tension.line1}
        </p>
        <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed whitespace-pre-line">
          {content.tension.line2}
        </p>
      </div>
    </section>
  );
}
