import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

function NoteCard({ item, index }: { item: typeof content.notes.items[number]; index: number }) {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={`group relative border rounded-xl p-6 transition-all duration-700 hover:border-highlight/30 cursor-default ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <span className="absolute top-4 right-5 text-5xl font-heading font-bold text-foreground/[0.04] select-none leading-none transition-opacity duration-300 group-hover:opacity-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-base font-heading font-medium leading-snug pr-10 group-hover:text-highlight transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-48 group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 ease-in-out">
        {item.body}
      </p>
    </div>
  );
}

export default function Thinking() {
  const { ref: headerRef, visible: headerVisible } = useFadeIn();

  return (
    <section id="thinking" className="px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-10">
            {content.notes.heading}
          </h2>
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
