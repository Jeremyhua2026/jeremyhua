import { useState, useEffect, useCallback } from "react";

const VW = 960;
const VH = 620;

interface MindNode {
  id: string;
  label: string;
  subtitle: string;
  detail: string;
  cx: number;
  cy: number;
  r: number;
  href: string;
  tag: string;
  tipDx: number;
  tipDy: number;
}

interface Edge {
  fromId: string;
  toId: string;
  cross?: boolean;
  dur: number;
}

interface ConnectorNode {
  id: string;
  word: string;
  cx: number;
  cy: number;
}

const ROOT = { id: "root", cx: 480, cy: 310, r: 56 };

const SATELLITES: MindNode[] = [
  {
    id: "work",
    label: "Work",
    subtitle: "Zip · Tim Hortons · WestJet",
    detail: "Procurement at Zip, loyalty at Tim Hortons and WestJet. Different surfaces — purchase requests, coffees, seats — same underlying problem: coordination, data, and what slows things down.",
    cx: 740, cy: 96, r: 42,
    href: "#proof-work", tag: "Systems",
    tipDx: -225, tipDy: -8,
  },
  {
    id: "endurance",
    label: "Running",
    subtitle: "3,000+ km · ultramarathons",
    detail: "Long races are blunt: you can't negotiate with distance. The useful skill isn't toughness — it's noticing signals early.",
    cx: 860, cy: 318, r: 40,
    href: "#proof-ultra", tag: "Endurance",
    tipDx: -235, tipDy: -70,
  },
  {
    id: "travel",
    label: "Travel",
    subtitle: "53 countries · 30 in 3 months",
    detail: "I'm drawn to places where the infrastructure is different enough that you stop autopiloting. That's where you notice how much of 'common sense' is just local habit.",
    cx: 700, cy: 528, r: 40,
    href: "#proof-travel", tag: "Perspective",
    tipDx: -225, tipDy: -155,
  },
  {
    id: "play",
    label: "Experiments",
    subtitle: "Microgreens · 7M views · sports",
    detail: "Microgreens farm: seed to harvest in 2 weeks. Posted 200 times, hit 7M views — learned the algorithm like a system. Sports across 8 disciplines.",
    cx: 260, cy: 528, r: 40,
    href: "#proof-hobbies", tag: "Experiments",
    tipDx: 14, tipDy: -155,
  },
  {
    id: "leadership",
    label: "Band",
    subtitle: "100+ musicians · pipe band",
    detail: "Leading a Scottish pipe band is theatre and logistics at once. Alignment isn't a slide. It's what happens when dozens of people interpret the same beat.",
    cx: 96, cy: 318, r: 40,
    href: "#proof-band", tag: "Leadership",
    tipDx: 52, tipDy: -70,
  },
  {
    id: "thinking",
    label: "Thinking",
    subtitle: "systems · behavior",
    detail: "Observe behavior. Map the system. Find friction. Name tradeoffs. Find leverage. More habit than framework.",
    cx: 220, cy: 96, r: 40,
    href: "#thinking", tag: "Notes",
    tipDx: 52, tipDy: -8,
  },
];

const ALL_NODES = [ROOT, ...SATELLITES];

const EDGES: Edge[] = [
  { fromId: "root", toId: "work",       dur: 3.2 },
  { fromId: "root", toId: "endurance",  dur: 3.8 },
  { fromId: "root", toId: "travel",     dur: 4.1 },
  { fromId: "root", toId: "play",       dur: 3.5 },
  { fromId: "root", toId: "leadership", dur: 4.4 },
  { fromId: "root", toId: "thinking",   dur: 2.9 },
  { fromId: "work",       toId: "thinking",  cross: true, dur: 5.0 },
  { fromId: "endurance",  toId: "thinking",  cross: true, dur: 6.2 },
  { fromId: "leadership", toId: "thinking",  cross: true, dur: 5.8 },
  { fromId: "travel",     toId: "play",      cross: true, dur: 7.0 },
  { fromId: "work",       toId: "endurance", cross: true, dur: 6.5 },
];

// Midpoints of their respective edges
const CONNECTOR_NODES: ConnectorNode[] = [
  { id: "cn-incentives", word: "incentives", cx: 480, cy: 96  }, // work ↔ thinking
  { id: "cn-signals",    word: "signals",    cx: 610, cy: 203 }, // root → work
  { id: "cn-tempo",      word: "tempo",      cx: 288, cy: 314 }, // root → band
  { id: "cn-defaults",   word: "defaults",   cx: 480, cy: 528 }, // travel ↔ experiments
  { id: "cn-pace",       word: "pace",       cx: 800, cy: 207 }, // work ↔ endurance
];

function nodeById(id: string) {
  return ALL_NODES.find((n) => n.id === id)!;
}

function pillHalfW(word: string) {
  return Math.ceil(word.length * 4.6) + 10;
}

function labelFontSize(label: string) {
  if (label.length <= 5) return 13;
  if (label.length <= 7) return 11;
  if (label.length <= 9) return 10;
  return 9;
}

export default function MindMap() {
  const [stage, setStage] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [rootHovered, setRootHovered] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 1100),
      setTimeout(() => setStage(3), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = id;
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 pt-24">

      {/* ── Intro text — staged reveal ── */}
      <div className="text-center mb-4 max-w-xl">
        <p className={`text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-heading mb-5 transition-all duration-700 ${stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          Jeremy Hua
        </p>
        <h1 className={`text-2xl sm:text-3xl font-light font-body text-foreground/90 leading-relaxed transition-all duration-700 delay-100 ${stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          I tend to follow curiosity longer than I should.
        </h1>
        <p className={`text-lg sm:text-xl font-light font-body text-muted-foreground/80 italic mt-2 leading-relaxed transition-all duration-700 delay-100 ${stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          I'm not sure I'd have it any other way.
        </p>
      </div>

      {/* ── SVG mind map ── */}
      <div className={`w-full max-w-5xl flex-1 transition-all duration-1000 delay-300 ${stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          className="w-full h-auto"
          aria-label="Mind map of Jeremy Hua's experiences"
        >
          <defs>
            {/* Glow filter */}
            <filter id="mm-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Arrowhead marker — inward-pointing chevron */}
            <marker id="arr-in" markerWidth="7" markerHeight="7"
              refX="3" refY="3.5" orient="auto">
              <polyline points="0,1 3.5,3.5 0,6"
                fill="none"
                style={{ stroke: "hsl(var(--edge))" }}
                strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"
                opacity="0.85" />
            </marker>
          </defs>

          {/* ── Edges ── */}
          {EDGES.map((edge, i) => {
            const from = nodeById(edge.fromId);
            const to   = nodeById(edge.toId);
            const isLit = hovered === edge.fromId || hovered === edge.toId;
            const mid = { x: (from.cx + to.cx) / 2, y: (from.cy + to.cy) / 2 };

            return (
              <g key={i}>
                {edge.cross ? (
                  <line
                    x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy}
                    style={{ stroke: "hsl(var(--edge))", transition: "opacity 0.3s" }}
                    strokeWidth={0.7}
                    opacity={hovered ? (isLit ? 0.45 : 0.05) : 0.18}
                  />
                ) : (
                  /* Primary edge with midpoint inward arrowhead */
                  <path
                    d={`M ${to.cx} ${to.cy} L ${mid.x} ${mid.y} L ${from.cx} ${from.cy}`}
                    style={{ stroke: "hsl(var(--edge))", transition: "opacity 0.3s" }}
                    strokeWidth={1.1}
                    fill="none"
                    opacity={hovered ? (isLit ? 0.65 : 0.08) : 0.35}
                    markerMid="url(#arr-in)"
                  />
                )}

                {/* Animated dash on primary edges — flows inward */}
                {!edge.cross && (
                  <line
                    x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy}
                    style={{ stroke: "hsl(var(--edge-active))", transition: "opacity 0.3s, stroke-width 0.2s" }}
                    strokeWidth={isLit ? 1.8 : 1.1}
                    strokeDasharray="5 22"
                    opacity={hovered ? (isLit ? 0.95 : 0.05) : 0.42}
                  >
                    <animate attributeName="stroke-dashoffset"
                      from="0" to="54"
                      dur={`${edge.dur}s`} repeatCount="indefinite" />
                  </line>
                )}
              </g>
            );
          })}

          {/* ── Connector word nodes ── */}
          {CONNECTOR_NODES.map((cn) => {
            const hw = pillHalfW(cn.word);
            return (
              <g key={cn.id} style={{ pointerEvents: "none" }}>
                {/* Fully opaque background — always blocks the edge line behind it */}
                <rect x={cn.cx - hw} y={cn.cy - 9} width={hw * 2} height={17} rx={8.5}
                  fill="hsl(var(--background))" opacity="1" />
                {/* Only the text fades, not the background */}
                <text x={cn.cx} y={cn.cy + 4.5} textAnchor="middle"
                  fontSize="8.5" fontFamily="Newsreader, serif" fontStyle="italic"
                  fill="hsl(var(--muted-foreground))"
                  opacity={hovered ? 0.2 : 0.8}
                  style={{ transition: "opacity 0.35s" }}
                  className="select-none">
                  {cn.word}
                </text>
              </g>
            );
          })}

          {/* ── Satellite nodes ── */}
          {SATELLITES.map((node, idx) => {
            const isHov    = hovered === node.id;
            const isDimmed = hovered !== null && !isHov;
            const pulseDur = 3.2 + idx * 0.55;
            const tipX = node.cx + node.tipDx;
            const tipY = node.cy + node.tipDy;
            const TW = 215;
            const TH = 145;

            return (
              <g key={node.id}>
                {/* Breathing pulse ring */}
                {!isHov && (
                  <g opacity={isDimmed ? 0.2 : 1} style={{ transition: "opacity 0.4s" }}>
                    <circle cx={node.cx} cy={node.cy} r={node.r + 4}
                      fill="none" stroke="hsl(var(--highlight))" strokeWidth="1">
                      <animate attributeName="r"
                        values={`${node.r + 3};${node.r + 16};${node.r + 3}`}
                        dur={`${pulseDur}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity"
                        values="0.22;0.04;0.22"
                        dur={`${pulseDur}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                )}

                {/* Hover glow */}
                {isHov && (
                  <circle cx={node.cx} cy={node.cy} r={node.r + 20}
                    fill="none" stroke="hsl(var(--highlight))"
                    strokeWidth="1.4" opacity="0.30" filter="url(#mm-glow)" />
                )}

                {/* Main circle */}
                <circle
                  cx={node.cx} cy={node.cy} r={node.r}
                  fill="hsl(var(--surface-warm))"
                  stroke={isHov ? "hsl(var(--highlight))" : "hsl(var(--highlight) / 0.35)"}
                  strokeWidth={isHov ? 2.2 : 1.4}
                  opacity={isDimmed ? 0.28 : 1}
                  className="cursor-pointer"
                  style={{ transition: "opacity 0.25s, stroke-width 0.2s" }}
                  onMouseEnter={() => setHovered(node.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => scrollTo(node.href)}
                />

                {/* Label */}
                <text x={node.cx} y={node.cy - 5} textAnchor="middle"
                  fontSize={labelFontSize(node.label)}
                  fontFamily="DM Sans, sans-serif" fontWeight="600"
                  fill="hsl(var(--foreground))"
                  opacity={isDimmed ? 0.22 : isHov ? 1 : 0.88}
                  className="pointer-events-none select-none"
                  style={{ transition: "opacity 0.25s" }}>
                  {node.label}
                </text>
                <text x={node.cx} y={node.cy + 10} textAnchor="middle"
                  fontSize="8" fontFamily="DM Sans, sans-serif" fontWeight="400"
                  fill="hsl(var(--muted-foreground))"
                  opacity={isDimmed ? 0.15 : isHov ? 1 : 0.70}
                  className="pointer-events-none select-none"
                  style={{ transition: "opacity 0.25s" }}>
                  {node.subtitle.split("·")[0].trim()}
                </text>

                {/* Tooltip card */}
                {isHov && (
                  <foreignObject x={tipX} y={tipY} width={TW} height={TH}
                    style={{ overflow: "visible" }}>
                    <div style={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "11px",
                      padding: "12px 14px",
                      boxShadow: "0 8px 32px hsl(var(--foreground) / 0.10)",
                      fontFamily: "DM Sans, sans-serif",
                      pointerEvents: "none",
                      width: TW,
                    }}>
                      <span style={{
                        fontSize: "8.5px", letterSpacing: "0.18em",
                        textTransform: "uppercase", color: "hsl(var(--highlight))",
                        display: "block", marginBottom: "5px",
                      }}>{node.tag}</span>
                      <p style={{ fontSize: "14px", fontWeight: 600, margin: 0, color: "hsl(var(--foreground))", lineHeight: 1.25 }}>
                        {node.label}
                      </p>
                      <p style={{ fontSize: "10px", margin: "3px 0 0", color: "hsl(var(--highlight))", opacity: 0.75 }}>
                        {node.subtitle}
                      </p>
                      <p style={{ fontSize: "10px", margin: "8px 0 0", color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
                        {node.detail}
                      </p>
                    </div>
                  </foreignObject>
                )}
              </g>
            );
          })}

          {/* ── Root node — always on top ── */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setRootHovered(true)}
            onMouseLeave={() => setRootHovered(false)}
            onClick={() => scrollTo("#proof")}
          >
            {/* Outer ripple */}
            <circle cx={ROOT.cx} cy={ROOT.cy} r={ROOT.r + 10}
              fill="none" stroke="hsl(var(--highlight))" strokeWidth="1">
              <animate attributeName="r"
                values={`${ROOT.r + 8};${ROOT.r + 26};${ROOT.r + 8}`}
                dur="4.5s" repeatCount="indefinite" />
              <animate attributeName="opacity"
                values="0.26;0.04;0.26" dur="4.5s" repeatCount="indefinite" />
            </circle>
            {/* Inner ripple */}
            <circle cx={ROOT.cx} cy={ROOT.cy} r={ROOT.r + 4}
              fill="none" stroke="hsl(var(--highlight))" strokeWidth="1.3">
              <animate attributeName="r"
                values={`${ROOT.r + 2};${ROOT.r + 14};${ROOT.r + 2}`}
                dur="4.5s" begin="0.9s" repeatCount="indefinite" />
              <animate attributeName="opacity"
                values="0.36;0.07;0.36" dur="4.5s" begin="0.9s" repeatCount="indefinite" />
            </circle>

            {/* Hover glow */}
            {rootHovered && (
              <circle cx={ROOT.cx} cy={ROOT.cy} r={ROOT.r + 22}
                fill="none" stroke="hsl(var(--highlight))"
                strokeWidth="1.6" opacity="0.26" filter="url(#mm-glow)" />
            )}

            {/* Fill */}
            <circle cx={ROOT.cx} cy={ROOT.cy} r={ROOT.r}
              fill="hsl(var(--surface-warm))"
              stroke="hsl(var(--highlight))"
              strokeWidth={rootHovered ? 2.8 : 2.2}
              style={{ transition: "stroke-width 0.2s" }} />

            {/* Name */}
            <text x={ROOT.cx} y={ROOT.cy - 10} textAnchor="middle"
              fontSize="16" fontFamily="DM Sans, sans-serif" fontWeight="700"
              fill="hsl(var(--foreground))" className="select-none">
              Jeremy
            </text>
            <text x={ROOT.cx} y={ROOT.cy + 9} textAnchor="middle"
              fontSize="16" fontFamily="DM Sans, sans-serif" fontWeight="700"
              fill="hsl(var(--foreground))" className="select-none">
              Hua
            </text>

            {/* scroll hint */}
            <text x={ROOT.cx} y={ROOT.cy + 28} textAnchor="middle"
              fontSize="8" fontFamily="DM Sans, sans-serif" fontWeight="400"
              letterSpacing="0.14em"
              fill="hsl(var(--highlight))"
              opacity={rootHovered ? 0.9 : 0.5}
              className="select-none"
              style={{ transition: "opacity 0.2s" }}>
              proof
            </text>
          </g>
        </svg>
      </div>

      {/* ── Hint + scroll cue ── */}
      <style>{`
        @keyframes mm-drift {
          0%, 100% { transform: translateY(0); opacity: 0.38; }
          50% { transform: translateY(6px); opacity: 0.18; }
        }
      `}</style>
      <div className={`flex flex-col items-center gap-2 pt-1 pb-10 pointer-events-none transition-all duration-700 delay-500 ${stage >= 3 ? "opacity-100" : "opacity-0"}`}>
        <p className="text-[9px] tracking-[0.22em] uppercase text-muted-foreground/60 font-heading">
          hover a node · scroll to go deeper
        </p>
        <div className="w-px h-7"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--edge)))" }} />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
          style={{ animation: "mm-drift 4s ease-in-out infinite" }}>
          <path d="M2.5 5.5L8 11L13.5 5.5"
            style={{ stroke: "hsl(var(--edge))" }} strokeWidth="1.3"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
