import { useEffect, useRef } from "react";

interface WindLine {
  y: number;
  x: number;
  length: number;
  speed: number;
  amplitude: number;
  frequency: number;
  opacity: number;
  phase: number;
  thickness: number;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lines: WindLine[] = [];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const createLines = () => {
      const count = Math.floor(canvas.height / 18);
      lines = Array.from({ length: count }, () => ({
        y: Math.random() * canvas.height,
        x: -Math.random() * canvas.width * 0.5,
        length: 150 + Math.random() * 350,
        speed: 0.15 + Math.random() * 0.35,
        amplitude: 8 + Math.random() * 25,
        frequency: 0.003 + Math.random() * 0.006,
        opacity: 0.06 + Math.random() * 0.09,
        phase: Math.random() * Math.PI * 2,
        thickness: 0.5 + Math.random() * 1,
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
        line.x += line.speed;
        line.phase += 0.003;

        if (line.x > canvas.width + 50) {
          line.x = -line.length - Math.random() * 200;
          line.y = Math.random() * canvas.height;
        }

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${r},${g},${b},${line.opacity})`;
        ctx.lineWidth = line.thickness;
        ctx.lineCap = "round";

        const steps = 60;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const px = line.x + t * line.length;
          const py = line.y + Math.sin(px * line.frequency + line.phase) * line.amplitude;
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
