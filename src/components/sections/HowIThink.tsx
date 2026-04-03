import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function HowIThink() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="thinking" className="px-6 py-16 bg-surface-warm">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-3">
          {content.howIThink.heading}
        </h2>
        <p className="text-sm text-muted-foreground mb-10">
          {content.howIThink.subhead}
        </p>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Vertical connector */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-highlight/40 via-highlight/20 to-transparent" />

          <ol className="space-y-6">
            {content.howIThink.steps.map((step, i) => (
              <li key={i} className="flex gap-5 items-start relative">
                {/* Numbered circle */}
                <div className="w-[31px] h-[31px] rounded-full border border-highlight/40 flex items-center justify-center flex-shrink-0 bg-background z-10">
                  <span className="text-xs font-heading font-medium text-highlight">
                    {i + 1}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1.5">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
