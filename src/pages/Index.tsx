import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AlsoMe from "@/components/sections/AlsoMe";
import Proof from "@/components/sections/Proof";
import Notes from "@/components/sections/Notes";
import HowIThink from "@/components/sections/HowIThink";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <AlsoMe />
        <Proof />
        <Notes />
        <HowIThink />
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
