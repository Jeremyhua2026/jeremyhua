export default function TreeRoots() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
      <svg
        className="absolute opacity-[0.04] dark:opacity-[0.06]"
        style={{
          right: "-5%",
          top: "8%",
          width: "55vw",
          maxWidth: "700px",
          height: "auto",
        }}
        viewBox="0 0 600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main trunk */}
        <path
          d="M300 900 C300 750 298 600 300 450 C302 350 295 280 300 200 C303 140 300 80 300 20"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-foreground"
        >
          <animate attributeName="d"
            values="M300 900 C300 750 298 600 300 450 C302 350 295 280 300 200 C303 140 300 80 300 20;M300 900 C300 750 302 600 300 450 C298 350 305 280 300 200 C297 140 300 80 300 20;M300 900 C300 750 298 600 300 450 C302 350 295 280 300 200 C303 140 300 80 300 20"
            dur="20s" repeatCount="indefinite" />
        </path>

        {/* Roots (below) */}
        <path d="M300 900 C280 880 240 860 180 850 C130 845 90 855 40 870" stroke="currentColor" strokeWidth="1.8" className="text-foreground" />
        <path d="M300 900 C310 875 340 850 400 840 C450 835 500 845 560 860" stroke="currentColor" strokeWidth="1.8" className="text-foreground" />
        <path d="M300 900 C290 870 260 840 220 820 C180 800 140 790 100 800" stroke="currentColor" strokeWidth="1.2" className="text-foreground" />
        <path d="M300 900 C320 870 360 835 420 815 C460 800 510 800 550 810" stroke="currentColor" strokeWidth="1.2" className="text-foreground" />
        <path d="M300 900 C295 860 275 830 250 800 C225 775 195 760 160 755" stroke="currentColor" strokeWidth="0.8" className="text-foreground" />
        <path d="M300 900 C305 860 330 825 370 795 C400 775 435 765 470 760" stroke="currentColor" strokeWidth="0.8" className="text-foreground" />

        {/* Root tendrils */}
        <path d="M180 850 C160 845 130 850 100 865" stroke="currentColor" strokeWidth="0.6" className="text-foreground" />
        <path d="M400 840 C430 835 460 840 490 855" stroke="currentColor" strokeWidth="0.6" className="text-foreground" />
        <path d="M220 820 C200 810 170 805 140 812" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
        <path d="M420 815 C445 808 475 805 500 812" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />

        {/* Branches (above) */}
        <path d="M300 350 C270 320 230 300 180 285 C140 275 100 280 60 290" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
        <path d="M300 300 C340 275 380 260 430 250 C470 245 510 250 550 265" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
        <path d="M300 250 C275 230 245 215 210 205 C180 198 150 200 120 210" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <path d="M300 200 C330 180 365 165 400 155 C430 148 465 150 500 160" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        <path d="M300 150 C280 130 255 118 225 110 C200 105 175 108 150 118" stroke="currentColor" strokeWidth="0.7" className="text-foreground" />
        <path d="M300 100 C325 82 355 70 390 62 C415 58 445 60 475 70" stroke="currentColor" strokeWidth="0.7" className="text-foreground" />

        {/* Branch tips / twigs */}
        <path d="M180 285 C160 278 135 280 110 288" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
        <path d="M430 250 C455 245 480 248 505 258" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
        <path d="M210 205 C190 198 165 200 140 208" stroke="currentColor" strokeWidth="0.4" className="text-foreground" />
        <path d="M400 155 C420 150 445 152 470 160" stroke="currentColor" strokeWidth="0.4" className="text-foreground" />
        <path d="M225 110 C205 104 180 107 158 115" stroke="currentColor" strokeWidth="0.3" className="text-foreground" />
        <path d="M390 62 C410 58 435 60 460 68" stroke="currentColor" strokeWidth="0.3" className="text-foreground" />
      </svg>
    </div>
  );
}
