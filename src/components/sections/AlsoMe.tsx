import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function AlsoMe() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="also-me" className="px-6 py-16">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-6">
          {content.alsoMe.heading}
        </h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {content.alsoMe.chips.map((chip) => (
            <a
              key={chip.anchor}
              href={`#${chip.anchor}`}
              className="inline-block text-sm font-heading px-4 py-1.5 rounded-full border hover:bg-foreground hover:text-background transition-colors"
            >
              {chip.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          {content.alsoMe.note}
        </p>
      </div>
    </section>
  );
}
