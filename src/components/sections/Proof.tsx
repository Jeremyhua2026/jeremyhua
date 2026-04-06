import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";
import { ExternalLink } from "lucide-react";

import band1 from "@/assets/band-1.jpg";
import band2 from "@/assets/band-2.jpg";
import band3 from "@/assets/band-3.jpg";
import ultra1 from "@/assets/ultra-1.jpg";
import ultra2 from "@/assets/ultra-2.jpg";
import hobbies1 from "@/assets/hobbies-1.jpg";
import microgreens from "@/assets/microgreens.jpg";
import travel1 from "@/assets/travel-1.jpg";
import travel5 from "@/assets/travel-5.jpg";
import travel6 from "@/assets/travel-6.jpg";
import logoWestjet from "@/assets/logo-westjet.png";
import logoTimhortons from "@/assets/logo-timhortons.png";

const storyImages: Record<string, string[]> = {
  "proof-band": [band1, band2, band3],
  "proof-ultra": [ultra1, ultra2],
  "proof-hobbies": [hobbies1, microgreens],
  "proof-travel": [travel1, travel6],
};

const companyLogos: Record<string, string> = {
  "Tim Hortons": logoTimhortons,
  "WestJet": logoWestjet,
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

      <div className="flex items-baseline justify-between mb-1">
        <span className="text-[10px] tracking-[0.2em] uppercase text-highlight font-heading">
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

      <div className={`flex gap-2 mb-4 ${isReversed ? "flex-row-reverse" : ""}`}>
        {images.map((src, i) => (
          <div key={i} className="flex-1">
            <img
              src={src}
              alt={`${story.tag} photo ${i + 1}`}
              className="rounded-md object-cover w-full aspect-[3/2]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

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

          {/* Work block with logos */}
          <div id="proof-work" className="mb-12">
            <span className="text-[10px] tracking-[0.2em] uppercase text-highlight font-heading">
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

            {/* Experience cards with logos */}
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {content.experience.items.map((item) => (
                <div key={item.company} className="rounded-lg p-5 border border-border/50 bg-card/50">
                  <div className="flex items-center gap-3 mb-3">
                    {companyLogos[item.company] && (
                      <img
                        src={companyLogos[item.company]}
                        alt={`${item.company} logo`}
                        className="h-8 w-auto object-contain dark:brightness-200 dark:contrast-50"
                        loading="lazy"
                      />
                    )}
                    <span className="text-[9px] tracking-wider uppercase text-highlight font-heading bg-highlight/10 px-1.5 py-0.5 rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                    {item.role}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-heading text-highlight hover:text-highlight/80 transition-colors"
                      >
                        {link.label} <ExternalLink size={9} />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

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
