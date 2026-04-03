import { content } from "@/data/content";
import { useFadeIn } from "@/hooks/useFadeIn";
import sisyphusVideo from "@/assets/sisyphus-victory.mp4.asset.json";

export default function About() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="about" className="px-6 py-16">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-start gap-6">
          {/* Vertical accent bar */}
          <div className="hidden sm:block w-px min-h-full self-stretch bg-gradient-to-b from-highlight/50 via-highlight/20 to-transparent flex-shrink-0 mt-1" />

          <div className="flex-1">
            <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading mb-10">
              {content.about.heading}
            </h2>

            <div className="space-y-5 mb-10">
              {content.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed whitespace-pre-line ${
                    i === 0 ? "text-xl font-medium font-heading" : 
                    "text-base text-muted-foreground"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Outside of work — merged Origin */}
            <div className="flex flex-col sm:flex-row items-center gap-5 pt-6 border-t border-border/50">
              <div className="text-center sm:text-left order-2 sm:order-1">
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-heading mb-2">
                  Outside of work
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Standing on rocks just to see what's on the other side.
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed font-heading">
                  The through-line isn't ambition—it's curiosity.
                </p>
              </div>

              <div className="w-28 sm:w-32 flex-shrink-0 order-1 sm:order-2">
                <div className="rounded-lg overflow-hidden bg-background shadow-sm border border-border/30">
                  <video
                    src={sisyphusVideo.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto mix-blend-multiply dark:mix-blend-screen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
