import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Tension() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="px-6 py-20">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-lg sm:text-xl text-foreground font-heading font-medium mb-4">
          {content.tension.line1}
        </p>
        <p className="text-lg sm:text-xl text-muted-foreground font-body italic leading-relaxed whitespace-pre-line">
          {content.tension.line2}
        </p>
      </div>
    </section>
  );
}
