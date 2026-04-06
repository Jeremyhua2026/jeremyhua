import { useEffect, useRef } from "react";

interface GrassLine {
  baseY: number;
  amplitude: number;
  frequency: number;
  phase: number;
  speed: number;
  opacity: number;
  thickness: number;
  lightOpacityMultiplier: number;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lines: GrassLine[] = [];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const createLines = () => {
      const count = Math.floor(canvas.height / 12);
      lines = Array.from({ length: count }, (_, i) => ({
        baseY: (i / count) * canvas.height + (Math.random() - 0.5) * 6,
        amplitude: 2 + Math.random() * 5,
        frequency: 0.002 + Math.random() * 0.003,
        phase: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.004,
        opacity: 0.012 + Math.random() * 0.02,
        lightOpacityMultiplier: 3 + Math.random() * 2,
        thickness: 0.4 + Math.random() * 0.6,
      }));
    };

    resize();
    createLines();

    const ro = new ResizeObserver(() => { resize(); createLines(); });
    ro.observe(canvas.parentElement || document.documentElement);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      const r = isDark ? 180 : 100;
      const g = isDark ? 165 : 85;
      const b = isDark ? 140 : 65;

      lines.forEach((line) => {
        line.phase += line.speed;

        ctx.beginPath();
        const finalOpacity = isDark ? line.opacity : line.opacity * line.lightOpacityMultiplier;
        ctx.strokeStyle = `rgba(${r},${g},${b},${finalOpacity})`;
        ctx.lineWidth = line.thickness;

        const steps = 80;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const px = t * canvas.width;
          const wave1 = Math.sin(px * line.frequency + line.phase) * line.amplitude;
          const wave2 = Math.sin(px * line.frequency * 1.7 + line.phase * 0.6) * line.amplitude * 0.4;
          const py = line.baseY + wave1 + wave2;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(animationId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
