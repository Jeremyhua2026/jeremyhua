import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Contact() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="contact" className="px-6 py-28 bg-surface-warm relative overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M0 28 L0 0 L28 0" stroke="hsl(var(--highlight))" strokeWidth="1" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 pointer-events-none">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M28 0 L28 28 L0 28" stroke="hsl(var(--highlight))" strokeWidth="1" opacity="0.25" />
        </svg>
      </div>

      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-6">
          {content.contact.heading}
        </h2>
        <p className="text-xl text-foreground/80 leading-relaxed mb-10 max-w-lg whitespace-pre-line">
          {content.contact.body}
        </p>
        <a
          href={`mailto:${content.meta.email}`}
          className="inline-flex items-center gap-2 text-base font-heading font-medium bg-foreground text-background px-6 py-3 rounded-full hover:bg-highlight hover:text-highlight-foreground transition-colors"
        >
          {content.contact.cta}
        </a>
      </div>
    </section>
  );
}
