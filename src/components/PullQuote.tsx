import { useFadeIn } from "@/hooks/useFadeIn";

interface PullQuoteProps {
  quote: string;
}

export default function PullQuote({ quote }: PullQuoteProps) {
  const { ref, visible } = useFadeIn();

  return (
    <div className="px-6 py-16">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="divider-accent mb-10" />
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-body text-foreground/80 leading-relaxed text-center">
          "{quote}"
        </blockquote>
        <div className="divider-accent mt-10" />
      </div>
    </div>
  );
}
