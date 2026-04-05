import Header from "@/components/Header";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

import Proof from "@/components/sections/Proof";
import Thinking from "@/components/sections/Thinking";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <FloatingParticles />
      <Header />
      <main>
        <Hero />
        <About />
        <Proof />
        <Thinking />
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
