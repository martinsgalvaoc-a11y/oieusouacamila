import Nav from "@/components/portfolio/Nav";
import SectionNav from "@/components/portfolio/SectionNav";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Portfolio from "@/components/portfolio/Portfolio";
import Process from "@/components/portfolio/Process";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <SectionNav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
