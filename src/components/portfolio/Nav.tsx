import { useEffect, useState } from "react";

const links = [
  { href: "#perfil", label: "Perfil" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-brand animate-glow" />
          <span className="display text-sm tracking-[0.3em]">CR<span className="text-brand">.</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden sm:inline-flex eyebrow border border-border px-4 py-2 hover:bg-brand hover:border-brand hover:text-primary-foreground transition-all"
        >
          Vamos conversar
        </a>
      </div>
    </header>
  );
};

export default Nav;
