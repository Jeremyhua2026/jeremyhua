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

export default function Thinking() {
  const { ref: headerRef, visible: headerVisible } = useFadeIn();
  const { ref: methodRef, visible: methodVisible } = useFadeIn();

  return (
    <section id="thinking" className="px-6 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Part 1: Observations */}
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-3">
            {content.notes.heading} · {content.howIThink.heading}
          </h2>
          <p className="text-sm text-muted-foreground mb-10">
            {content.notes.subhead}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-16">
          {content.notes.items.map((item, i) => (
            <NoteCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Transition line */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-highlight/30 to-transparent" />
          <p className="text-xs font-heading text-muted-foreground italic shrink-0">
            Those observations became a process
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-highlight/30 to-transparent" />
        </div>

        {/* Part 2: Method */}
        <div
          ref={methodRef}
          className={`rounded-xl bg-surface-warm p-8 sm:p-10 transition-all duration-700 ${
            methodVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm text-muted-foreground mb-8 font-heading">
            {content.howIThink.subhead}
          </p>

          <div className="relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-highlight/40 via-highlight/20 to-transparent" />

            <ol className="space-y-6">
              {content.howIThink.steps.map((step, i) => (
                <li key={i} className="flex gap-5 items-start relative">
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
      </div>
    </section>
  );
}
