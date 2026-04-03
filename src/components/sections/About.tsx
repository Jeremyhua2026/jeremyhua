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

        <div className="space-y-5">
          {content.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`leading-relaxed ${
                i === 0 ? "text-xl font-medium font-heading" : "text-base text-muted-foreground"
              }`}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Photo strip placeholder */}
        <div className="mt-12 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="aspect-[4/5] rounded-lg bg-muted flex items-center justify-center"
            >
              <span className="text-xs text-muted-foreground font-heading">Photo {n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
