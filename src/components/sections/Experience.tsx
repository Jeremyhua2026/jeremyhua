import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";

export default function Experience() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="experience" className="px-6 py-20">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-3">
          {content.experience.heading}
        </h2>
        <p className="text-sm text-muted-foreground mb-10">
          {content.experience.subhead}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {content.experience.items.map((item) => (
            <div
              key={item.company}
              className="border rounded-lg p-6 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-base font-heading font-medium">{item.company}</h3>
                <span className="text-[10px] tracking-wider uppercase text-muted-foreground font-heading bg-muted px-2 py-0.5 rounded-full">
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>
              <a
                href={item.proofLink}
                className="inline-flex items-center gap-1 text-xs font-heading text-foreground hover:text-primary transition-colors"
              >
                Work story in Proof <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
