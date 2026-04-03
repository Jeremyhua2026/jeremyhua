import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Notes() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="notes" className="px-6 py-16">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-3">
          {content.notes.heading}
        </h2>
        <p className="text-sm text-muted-foreground mb-10">
          {content.notes.subhead}
        </p>

        <div className="space-y-8">
          {content.notes.items.map((item, i) => (
            <div key={i} className="border-t pt-6">
              <h3 className="text-base font-heading font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
