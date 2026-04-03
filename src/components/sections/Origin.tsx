import { useFadeIn } from "@/hooks/useFadeIn";

import origin1 from "@/assets/travel-3.jpg";
import origin2 from "@/assets/travel-4.jpg";
import origin3 from "@/assets/travel-2.jpg";
import sisyphus from "@/assets/options/sisyphus-editorial.png";

const frames = [
  { src: origin1, caption: "Chase everything" },
  { src: origin2, caption: "Look further" },
  { src: origin3, caption: "Arms wide open" },
];

export default function Origin() {
  const { ref, visible } = useFadeIn();

  return (
    <div className="px-6 py-12">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Header line */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-heading">
            A long time ago
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Sisyphus illustration + story text side by side */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <div className="w-32 sm:w-40 flex-shrink-0 opacity-70">
            <img
              src={sisyphus}
              alt="Sisyphus pushing a boulder — the eternal climb"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="max-w-lg text-center sm:text-left">
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Drawn to whatever felt interesting, even when it didn't make obvious sense.
              Chasing birds on a beach, standing on rocks just to see what's on the other side.
            </p>
            <p className="text-sm text-foreground/70 leading-relaxed font-heading">
              The through-line isn't ambition—it's curiosity.
            </p>
          </div>
        </div>

        {/* Photo strip — centered, small */}
        <div className="flex items-end gap-3 max-w-sm mx-auto">
          {frames.map((frame, i) => (
            <div key={i} className="flex-1 group">
              <div className="overflow-hidden rounded">
                <img
                  src={frame.src}
                  alt={frame.caption}
                  className="w-full aspect-[3/4] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-[9px] text-muted-foreground font-heading mt-1.5 text-center tracking-wide">
                {frame.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting trail */}
        <div className="flex justify-center items-center gap-2 mt-5">
          <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <div className="w-6 h-px bg-muted-foreground/20" />
          <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <div className="w-6 h-px bg-muted-foreground/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
        </div>
      </div>
    </div>
  );
}
