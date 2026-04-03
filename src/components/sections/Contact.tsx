import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Contact() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="contact" className="px-6 py-16">
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
          href={`mailto:${content.meta.email}`}
          className="inline-flex items-center gap-2 text-sm font-heading font-medium bg-foreground text-background px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          {content.contact.cta}
        </a>
      </div>
    </section>
  );
}
