import { useFadeIn } from "@/hooks/useFadeIn";

interface SectionTransitionProps {
  text: string;
}

export default function SectionTransition({ text }: SectionTransitionProps) {
  const { ref, visible } = useFadeIn();

  return (
    <div className="px-6 py-10">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-sm text-muted-foreground font-heading italic">
          {text}
        </p>
      </div>
    </div>
  );
}
