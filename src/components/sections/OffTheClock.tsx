import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function OffTheClock() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="px-6 py-16">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-6">
          {content.offTheClock.heading}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {content.offTheClock.body}
        </p>
      </div>
    </section>
  );
}
