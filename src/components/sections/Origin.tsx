import { useFadeIn } from "@/hooks/useFadeIn";

import origin1 from "@/assets/travel-3.jpg"; // boy chasing birds on beach
import origin2 from "@/assets/travel-4.jpg"; // two boys on rocks, pointing up
import origin3 from "@/assets/travel-2.jpg"; // boy arms wide facing ocean

const frames = [
  { src: origin1, caption: "Chase everything" },
  { src: origin2, caption: "Look further" },
  { src: origin3, caption: "Arms wide open" },
];

export default function Origin() {
  const { ref, visible } = useFadeIn();

  return (
    <div className="px-6 py-14">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Thin decorative line */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-heading">
            A long time ago
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Photo strip */}
        <div className="flex items-end gap-3 sm:gap-5">
          {frames.map((frame, i) => (
            <div key={i} className="flex-1 group">
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={frame.src}
                  alt={frame.caption}
                  className="w-full aspect-[3/4] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-[10px] text-muted-foreground font-heading mt-2 text-center tracking-wide">
                {frame.caption}
              </p>

              {/* Connecting dot + line between photos */}
              {i < frames.length - 1 && (
                <div className="hidden sm:block absolute" />
              )}
            </div>
          ))}
        </div>

        {/* Connecting dots below */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <div className="w-8 h-px bg-muted-foreground/20" />
          <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <div className="w-8 h-px bg-muted-foreground/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
        </div>
      </div>
    </div>
  );
}
