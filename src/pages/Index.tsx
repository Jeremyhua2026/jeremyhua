import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Origin from "@/components/sections/Origin";
import AlsoMe from "@/components/sections/AlsoMe";
import Experience from "@/components/sections/Experience";
import Proof from "@/components/sections/Proof";
import Notes from "@/components/sections/Notes";
import HowIThink from "@/components/sections/HowIThink";
import OffTheClock from "@/components/sections/OffTheClock";
import Contact from "@/components/sections/Contact";
import SectionTransition from "@/components/SectionTransition";
import DecorativeLine from "@/components/DecorativeLine";
import { content } from "@/data/content";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hook */}
        <Hero />

        {/* 2. Reveal */}
        <About />

        {/* Origin story — childhood curiosity */}
        <Origin />

        {/* Also me chips */}
        <AlsoMe />

        <DecorativeLine variant="arrow" />

        {/* 3. Proof / Credibility */}
        <SectionTransition text={content.transitions.beforeProof} />
        <Experience />
        <Proof />

        {/* 4. Pattern expansion */}
        <DecorativeLine variant="dots" />
        <Notes />

        {/* 5. Human layer */}
        <SectionTransition text={content.transitions.beforePersonal} />
        <OffTheClock />

        {/* 6. Method */}
        <DecorativeLine variant="wave" />
        <SectionTransition text={content.transitions.beforeMethod} />
        <HowIThink />

        {/* 7. Resolution */}
        <Contact />
      </main>
      <footer className="px-6 py-8 text-center">
        <p className="text-xs text-muted-foreground font-heading">
          © {new Date().getFullYear()} Jeremy Hua
        </p>
      </footer>
    </>
  );
};

export default Index;
