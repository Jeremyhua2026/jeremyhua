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
import PullQuote from "@/components/PullQuote";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PullQuote quote="Most friction doesn't actually exist in the customer experience. It exists behind the scenes—inside the systems that determine how companies make decisions." />
        <AlsoMe />
        <Notes />
        <PullQuote quote="Alignment isn't a slide; it's what happens when dozens of people interpret the same beat." />
        <Experience />
        <Proof />
        <PullQuote quote="Most 'performance problems' are feedback problems—just easier to ignore in an office than at mile 40." />
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
