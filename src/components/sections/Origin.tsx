import { useFadeIn } from "@/hooks/useFadeIn";

import origin1 from "@/assets/travel-3.jpg";
import origin2 from "@/assets/travel-4.jpg";
import origin3 from "@/assets/travel-2.jpg";

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

        {/* Story text — centered */}
        <div className="mb-8 max-w-lg mx-auto text-center">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            I've been this way for as long as I can remember—drawn to whatever felt interesting, 
            even when it didn't make obvious sense. Chasing birds on a beach, pointing at planes, 
            standing on rocks just to see what's on the other side.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            The through-line isn't ambition—it's curiosity. A quiet refusal to stay comfortable. 
            If something feels too settled, I start looking for the next question, the next place, 
            the next thing I don't understand yet.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed font-heading">
            If not for curiosity, what's the point of any of it?
          </p>
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
