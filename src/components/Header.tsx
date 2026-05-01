import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { content } from "@/data/content";
import { Sun, Moon, Menu, X, Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Proof", href: "#proof" },
  { label: "Notes", href: "#thinking" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-heading ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-sm font-medium tracking-tight text-foreground">
          {content.meta.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <a href="https://www.instagram.com/jeremyh.zip/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.linkedin.com/in/jeremyhua/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={16} />
            </a>
            <button onClick={toggle} aria-label="Toggle theme" className="text-muted-foreground hover:text-foreground transition-colors">
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <a href="https://www.instagram.com/jeremyh.zip/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram size={16} />
          </a>
          <a href="https://www.linkedin.com/in/jeremyhua/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={16} />
          </a>
          <button onClick={toggle} aria-label="Toggle theme" className="text-muted-foreground hover:text-foreground transition-colors">
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" className="text-muted-foreground hover:text-foreground transition-colors">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-b px-6 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
