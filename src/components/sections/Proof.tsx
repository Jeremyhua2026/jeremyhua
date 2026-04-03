import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

function StoryBlock({
  story,
}: {
  story: (typeof content.proof.stories)[number];
}) {
  const { ref, visible } = useFadeIn();

  return (
    <div
      id={story.id}
      ref={ref}
      className={`border-t pt-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-heading">
        {story.tag}
      </span>
      <h3 className="text-lg font-heading font-medium mt-2 mb-3">{story.title}</h3>
      <p className="text-sm text-muted-foreground italic mb-4">{story.intro}</p>
      {story.body.split("\n\n").map((p, i) => (
        <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">
          {p}
        </p>
      ))}

      {/* Image placeholders */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        {Array.from({ length: story.imageCount }).map((_, i) => (
          <div
            key={i}
            className="aspect-[3/2] rounded-lg bg-muted flex items-center justify-center"
          >
            <span className="text-xs text-muted-foreground font-heading">Photo {i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Proof() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="proof" className="px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-3">
            {content.proof.heading}
          </h2>
          <p className="text-sm text-muted-foreground mb-10 italic">
            {content.proof.subhead}
          </p>

          {/* Work block */}
          <div id="proof-work" className="mb-12">
            <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-heading">
              Work
            </span>
            <h3 className="text-lg font-heading font-medium mt-2 mb-4">
              {content.proof.work.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {content.proof.work.body}
            </p>

            {/* Jump links */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-xs text-muted-foreground font-heading">Jump</span>
              {content.proof.stories.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-xs font-heading text-foreground hover:text-primary transition-colors"
                >
                  ·{s.tag}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stories */}
        <div className="space-y-12">
          {content.proof.stories.map((story) => (
            <StoryBlock key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
