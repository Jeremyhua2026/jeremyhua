import Header from "@/components/Header";
import MindMap from "@/components/MindMap";
import Proof from "@/components/sections/Proof";
import Thinking from "@/components/sections/Thinking";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ThreadLine from "@/components/ThreadLine";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <MindMap />
        <ThreadLine />
        <Proof />
        <ThreadLine />
        <Thinking />
        <ThreadLine />
        <Projects />
        <ThreadLine />
        <Contact />
      </main>
      <footer className="px-6 py-10 border-t border-border/30">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-heading tracking-wide">
            © {new Date().getFullYear()} Jeremy Hua
          </p>
          <p className="text-[11px] text-muted-foreground/50 font-body italic">
            Systems, behavior, and how things actually move.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
