import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

function ProjectCard({
  item,
}: {
  item: (typeof content.projects.items)[number];
}) {
  const { ref, visible } = useFadeIn();
  const href = "href" in item ? (item as { href?: string }).href : undefined;
  const isExternal = href?.startsWith("http");

  const cardClasses = `group relative rounded-xl border border-border/60 bg-card/40 p-7 transition-all duration-700 hover:border-highlight/40 hover:shadow-sm ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  } ${href ? "cursor-pointer" : ""}`;

  const inner = (
    <>
      <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.18em] uppercase font-heading text-highlight/70 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-highlight/60 animate-pulse" />
        {item.status}
      </span>

      <h3 className="text-xl font-heading font-semibold text-foreground mb-3 leading-snug flex items-center gap-1.5">
        {item.title}
        {href && (
          <span aria-hidden className="text-highlight/60 text-base transition-transform group-hover:translate-x-0.5">
            {isExternal ? "↗" : "→"}
          </span>
        )}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-heading tracking-wide text-muted-foreground/70 border border-border/50 px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${cardClasses} block no-underline`}
      >
        {inner}
      </a>
    );
  }

  return (
    <div ref={ref} className={cardClasses}>
      {inner}
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-4">
            {content.projects.heading}
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-12">
            {content.projects.subhead}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {content.projects.items.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
