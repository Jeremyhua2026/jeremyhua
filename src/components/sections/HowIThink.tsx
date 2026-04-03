import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function HowIThink() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="thinking" className="px-6 py-20">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-3">
          {content.howIThink.heading}
        </h2>
        <p className="text-sm text-muted-foreground mb-10 italic">
          {content.howIThink.subhead}
        </p>

        <ol className="space-y-6">
          {content.howIThink.steps.map((step, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="text-2xl font-heading font-light text-primary/60 leading-none mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
