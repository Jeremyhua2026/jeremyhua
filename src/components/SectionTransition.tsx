import { useFadeIn } from "@/hooks/useFadeIn";

interface SectionTransitionProps {
  text: string;
}

export default function SectionTransition({ text }: SectionTransitionProps) {
  const { ref, visible } = useFadeIn();

  return (
    <div className="px-6 py-8">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 flex items-center gap-4 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="w-6 h-px bg-highlight/40 flex-shrink-0" />
        <p className="text-base italic text-muted-foreground font-body">
          {text}
        </p>
      </div>
    </div>
  );
}
