import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Synthesis() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="synthesis" className="px-6 py-20 bg-surface-warm relative overflow-hidden">
      {/* Subtle corner marks — same as Contact */}
      <div className="absolute top-6 left-6 pointer-events-none" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M0 20 L0 0 L20 0" stroke="hsl(var(--highlight))" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 pointer-events-none" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M20 0 L20 20 L0 20" stroke="hsl(var(--highlight))" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-10">
          {content.synthesis.heading}
        </h2>

        <div className="space-y-5 mb-10">
          {content.synthesis.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`leading-relaxed whitespace-pre-line ${
                i === 0
                  ? "text-lg font-body text-foreground/85"
                  : i === 1
                  ? "text-base font-body font-medium text-foreground"
                  : "text-base font-body text-muted-foreground"
              }`}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Closer — the thesis in one line */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-highlight/40 to-transparent" />
          <p className="text-sm font-heading font-medium text-highlight/80 tracking-wide italic">
            {content.synthesis.closer}
          </p>
        </div>
      </div>
    </section>
  );
}
