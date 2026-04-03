import { useFadeIn } from "@/hooks/useFadeIn";
import sisyphusVideo from "@/assets/sisyphus-victory.mp4.asset.json";

export default function Origin() {
  const { ref, visible } = useFadeIn();

  return (
    <div className="px-6 py-10">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Sisyphus video + story text */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="max-w-md text-center sm:text-left order-2 sm:order-1">
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-heading mb-3">
              A long time ago
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Drawn to whatever felt interesting, even when it didn't make obvious sense.
              Standing on rocks just to see what's on the other side.
            </p>
            <p className="text-sm text-foreground/70 leading-relaxed font-heading">
              The through-line isn't ambition—it's curiosity.
            </p>
          </div>

          <div className="w-32 sm:w-36 flex-shrink-0 order-1 sm:order-2">
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
  );
}
