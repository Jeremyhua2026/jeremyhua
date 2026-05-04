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
import logoWestjet from "@/assets/logo-westjet.png";
import logoTimhortons from "@/assets/logo-timhortons.png";

const storyImages: Record<string, string[]> = {
  "proof-band": [band1, band2, band3],
  "proof-ultra": [ultra1, ultra2],
  "proof-hobbies": [hobbies1, microgreens],
  "proof-travel": [travel5, travel1],
};

const companyLogos: Record<string, string> = {
  "Tim Hortons": logoTimhortons,
  "WestJet": logoWestjet,
};

const storyConnectors: Record<string, string> = {
  "proof-band":    "tempo",
  "proof-ultra":   "signals",
  "proof-travel":  "defaults",
  "proof-hobbies": "feedback",
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
  const connectorWord = storyConnectors[story.id];

  return (
    <div
      id={story.id}
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="divider-accent mb-8" />

      <div className="flex items-baseline justify-between mb-2">
        <div className="flex items-baseline gap-3">
          <span className="text-[10px] tracking-[0.2em] uppercase text-highlight font-heading">
            {story.tag}
          </span>
          {connectorWord && (
            <span className="text-[9px] font-body italic text-muted-foreground/50">
              · {connectorWord}
            </span>
          )}
        </div>
        {stat && (
          <div className="text-right">
            <span className="text-3xl font-heading font-semibold text-foreground leading-none">
              {stat}
            </span>
            <span className="text-xs text-muted-foreground font-heading ml-2 tracking-wide">
              {statLabel}
            </span>
          </div>
        )}
      </div>

      <h3 className="text-2xl font-heading font-medium mt-2 mb-3">{story.title}</h3>
      <p className="text-base text-muted-foreground mb-6 leading-relaxed">{story.intro}</p>

      <div className={`flex gap-3 mb-6 ${isReversed ? "flex-row-reverse" : ""}`}>
        {images.map((src, i) => (
          <div key={i} className="flex-1">
            <img
              src={src}
              alt={`${story.tag} photo ${i + 1}`}
              className="rounded-lg object-cover w-full aspect-[3/2]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div>
        {story.body.split("\n\n").map((p, i) => (
          <p key={i} className="text-base text-muted-foreground leading-relaxed mb-4">
            {p}
          </p>
        ))}
        {"closer" in story && story.closer && (
          <p className="text-base font-heading font-medium text-foreground mt-5 pl-5 border-l-2 border-highlight/30">
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
    <section id="proof" className="px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-4">
            {content.proof.heading}
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-12 max-w-xl">
            {content.proof.subhead}
          </p>

          {/* Work block */}
          <div id="proof-work" className="mb-16">
            <span className="text-[10px] tracking-[0.2em] uppercase text-highlight font-heading">
              Work · <span className="italic font-body normal-case tracking-normal text-muted-foreground/50">incentives</span>
            </span>

            {/* Experience cards */}
            <div className="grid sm:grid-cols-3 gap-3 mt-5 mb-10">
              {content.experience.items.map((item) => (
                <div key={item.company} className="rounded-xl p-5 border border-border/50 bg-card/50">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {companyLogos[item.company] ? (
                      <img
                        src={companyLogos[item.company]}
                        alt={`${item.company} logo`}
                        className="h-7 w-auto object-contain dark:brightness-200 dark:contrast-50"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-base font-heading font-semibold text-foreground tracking-tight">
                        {item.company}
                      </span>
                    )}
                    <span className="text-[9px] tracking-wider uppercase text-highlight font-heading bg-highlight/10 px-1.5 py-0.5 rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.role}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-heading text-highlight hover:text-highlight/80 transition-colors"
                      >
                        {link.label} <ExternalLink size={10} />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Narrative */}
            <h3 className="text-2xl font-heading font-medium mb-4">
              {content.proof.work.title}
            </h3>
            {content.proof.work.body.split("\n\n").map((p, i) => (
              <p key={i} className="text-base text-muted-foreground leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {/* 50K pull-quote */}
            <blockquote className="my-8 pl-5 border-l-2 border-highlight/40">
              <p className="text-base font-body italic text-foreground/75 leading-relaxed">
                "Once caught an issue affecting 50,000 daily redemptions that had gone unnoticed."
              </p>
              <cite className="text-xs font-heading tracking-wide text-muted-foreground/50 not-italic mt-2 block">
                Tim Hortons Rewards — 3.5M+ active users
              </cite>
            </blockquote>

            {/* Jump links */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <span className="text-xs text-muted-foreground font-heading">Jump to</span>
              {content.proof.stories.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-xs font-heading text-muted-foreground hover:text-highlight transition-colors"
                >
                  · {s.tag}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Transition into the Proof half — visually a chapter break, not a sub-label */}
        <div className="max-w-2xl mx-auto mt-12 mb-14">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-highlight/40 to-transparent mb-8" />
          <h3 className="text-3xl sm:text-4xl font-heading font-medium text-foreground leading-tight mb-4">
            {content.proof.proofIntro.label}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            {content.proof.proofIntro.body}
          </p>
        </div>

        {/* Stories */}
        <div className="space-y-16">
          {content.proof.stories.map((story, i) => (
            <StoryBlock key={story.id} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
