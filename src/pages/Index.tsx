import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Tension from "@/components/sections/Tension";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Proof from "@/components/sections/Proof";
import Notes from "@/components/sections/Notes";
import AlsoMe from "@/components/sections/AlsoMe";
import HowIThink from "@/components/sections/HowIThink";
import OffTheClock from "@/components/sections/OffTheClock";
import Contact from "@/components/sections/Contact";
import PullQuote from "@/components/PullQuote";
import SectionTransition from "@/components/SectionTransition";
import { content } from "@/data/content";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hook */}
        <Hero />

        {/* 2. Tension */}
        <Tension />

        {/* 3. Reveal */}
        <About />

        {/* 4. Live example → already in Hero's current status */}

        {/* 5. Proof / Credibility */}
        <SectionTransition text={content.transitions.beforeProof} />
        <Experience />
        <Proof />

        {/* 6. Pattern expansion */}
        <PullQuote quote="Effort isn't the constraint. The system is." />
        <Notes />

        {/* 7. Human layer */}
        <SectionTransition text={content.transitions.beforePersonal} />
        <AlsoMe />
        <PullQuote quote="Misalignment doesn't look like conflict. It looks like progress—slightly in the wrong direction." />
        <OffTheClock />

        {/* 8. Method */}
        <SectionTransition text={content.transitions.beforeMethod} />
        <HowIThink />

        {/* 9. Resolution */}
        <PullQuote quote="Endurance isn't about pushing harder. It's about listening sooner." />
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
