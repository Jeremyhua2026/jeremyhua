import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function About() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="about" className="px-6 py-16">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-start gap-6">
          {/* Vertical accent bar */}
          <div className="hidden sm:block w-px min-h-full self-stretch bg-gradient-to-b from-highlight/50 via-highlight/20 to-transparent flex-shrink-0 mt-1" />

          <div className="flex-1">
            <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-10">
              {content.about.heading}
            </h2>

            <div className="space-y-5">
              {content.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed whitespace-pre-line ${
                    i === 0 ? "text-xl font-medium font-heading" :
                    "text-base text-muted-foreground"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
