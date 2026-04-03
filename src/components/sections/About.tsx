import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function About() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="about" className="px-6 py-20">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-10">
          {content.about.heading}
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-5">
            {content.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed whitespace-pre-line ${
                  i === 0 ? "text-xl font-medium font-heading" : 
                  i === 1 || i === 2 ? "text-base text-foreground font-medium" :
                  "text-base text-muted-foreground"
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="md:w-64 shrink-0">
            <div className="aspect-[3/4] rounded-lg bg-muted flex items-center justify-center sticky top-24">
              <span className="text-xs text-muted-foreground font-heading">Portrait</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
