import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  drift: number;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 40000);
      particles = Array.from({ length: Math.min(count, 60) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.4,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -(Math.random() * 0.12 + 0.03),
        opacity: Math.random() * 0.25 + 0.05,
        drift: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    createParticles();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      createParticles();
    });
    resizeObserver.observe(document.documentElement);

    let time = 0;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.003;

      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? "180, 165, 140" : "100, 85, 65";

      particles.forEach((p) => {
        p.x += p.speedX + Math.sin(time + p.drift) * 0.08;
        p.y += p.speedY;

        // Wrap around
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
