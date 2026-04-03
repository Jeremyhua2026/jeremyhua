import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

function NoteCard({ item, index }: { item: typeof content.notes.items[number]; index: number }) {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={`group relative border rounded-lg p-6 transition-all duration-700 hover:border-highlight/30 hover:shadow-sm ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Number watermark */}
      <span className="absolute top-3 right-4 text-4xl font-heading font-bold text-foreground/[0.04] select-none leading-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="text-base font-heading font-medium mb-3 pr-8">
        {item.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {item.body}
      </p>
    </div>
  );
}

export default function Notes() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="notes" className="px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-3">
            {content.notes.heading}
          </h2>
          <p className="text-sm text-muted-foreground mb-10">
            {content.notes.subhead}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {content.notes.items.map((item, i) => (
            <NoteCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
