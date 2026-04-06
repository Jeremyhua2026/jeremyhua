import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Contact() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="contact" className="px-6 py-20 bg-surface-warm relative overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M0 24 L0 0 L24 0" stroke="hsl(var(--highlight))" strokeWidth="1" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M24 0 L24 24 L0 24" stroke="hsl(var(--highlight))" strokeWidth="1" opacity="0.25" />
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
        <p className="text-base text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
          {content.contact.body}
        </p>
        <a
          href="https://www.linkedin.com/in/jeremyhua/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-heading font-medium bg-foreground text-background px-5 py-2.5 rounded-full hover:bg-highlight hover:text-highlight-foreground transition-colors"
        >
          {content.contact.cta}
        </a>
      </div>
    </section>
  );
}
