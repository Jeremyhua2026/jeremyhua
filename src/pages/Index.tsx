import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AlsoMe from "@/components/sections/AlsoMe";
import Notes from "@/components/sections/Notes";
import Experience from "@/components/sections/Experience";
import Proof from "@/components/sections/Proof";
import HowIThink from "@/components/sections/HowIThink";
import OffTheClock from "@/components/sections/OffTheClock";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <AlsoMe />
        <Notes />
        <Experience />
        <Proof />
        <HowIThink />
        <OffTheClock />
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
