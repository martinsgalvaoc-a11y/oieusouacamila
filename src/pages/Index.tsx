import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
