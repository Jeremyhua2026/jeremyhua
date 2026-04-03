import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";

import band1 from "@/assets/band-1.jpg";
import band2 from "@/assets/band-2.jpg";
import band3 from "@/assets/band-3.jpg";
import ultra1 from "@/assets/ultra-1.jpg";
import ultra2 from "@/assets/ultra-2.jpg";
import hobbies1 from "@/assets/hobbies-1.jpg";
import travel1 from "@/assets/travel-1.jpg";
import travel5 from "@/assets/travel-5.jpg";
import travel6 from "@/assets/travel-6.jpg";

const storyImages: Record<string, string[]> = {
  "proof-band": [band1, band2, band3],
  "proof-ultra": [ultra1],
  "proof-hobbies": [hobbies1, travel1],
  "proof-travel": [travel5, travel6],
};

function StoryBlock({
  story,
  index,
}: {
  story: (typeof content.proof.stories)[number];
  index: number;
}) {
  const { ref, visible } = useFadeIn();
  const isReversed = index % 2 === 1;
  const images = storyImages[story.id] || [];
  const stat = "stat" in story ? (story as any).stat : null;
  const statLabel = "statLabel" in story ? (story as any).statLabel : null;

  return (
    <div
      id={story.id}
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="divider-accent mb-6" />

      {/* Header row: tag + stat */}
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-[10px] tracking-[0.2em] uppercase text-secondary font-heading">
          {story.tag}
        </span>
        {stat && (
          <div className="text-right">
            <span className="text-xl font-heading font-semibold text-foreground leading-none">
              {stat}
            </span>
            <span className="text-[10px] text-muted-foreground font-heading ml-1.5 tracking-wide">
              {statLabel}
            </span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-heading font-medium mt-1 mb-2">{story.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{story.intro}</p>

      {/* Images — horizontal row, compact */}
      <div className={`flex gap-2 mb-4 ${isReversed ? "flex-row-reverse" : ""}`}>
        {images.map((src, i) => (
          <div key={i} className={`${images.length === 1 ? "w-1/2" : images.length === 3 ? "flex-1" : "flex-1"}`}>
            <img
              src={src}
              alt={`${story.tag} photo ${i + 1}`}
              className="rounded-md object-cover w-full aspect-[3/2]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Body text */}
      <div>
        {story.body.split("\n\n").map((p, i) => (
          <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">
            {p}
          </p>
        ))}
        {"closer" in story && story.closer && (
          <p className="text-sm font-heading font-medium text-foreground mt-3">
            {story.closer}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Proof() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="proof" className="px-6 py-16">
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
          <p className="text-sm text-muted-foreground mb-10">
            {content.proof.subhead}
          </p>

          {/* Work block */}
          <div id="proof-work" className="mb-12">
            <span className="text-[10px] tracking-[0.2em] uppercase text-secondary font-heading">
              Work
            </span>
            <h3 className="text-lg font-heading font-medium mt-2 mb-4">
              {content.proof.work.title}
            </h3>
            {content.proof.work.body.split("\n\n").map((p, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">
                {p}
              </p>
            ))}

            {/* Jump links */}
            <div className="flex flex-wrap items-center gap-2 mt-6">
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
          {content.proof.stories.map((story, i) => (
            <StoryBlock key={story.id} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
