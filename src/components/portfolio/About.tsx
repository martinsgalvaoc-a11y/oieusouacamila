import SectionHeader from "./SectionHeader";

const skills = [
  "Branding",
  "Direção de Arte",
  "Fotografia DSLR",
  "Comunicação Visual",
  "Reposicionamento",
  "Marketing Estratégico",
  "Atendimento Consultivo",
  "Design Minimalista",
];

const About = () => {
  return (
    <section id="perfil" className="container py-24 lg:py-40">
      <SectionHeader index="01" eyebrow="Perfil estratégico" title="Estética rigorosa, execução hands-on." />

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6 lg:col-start-5">
          <p className="text-lg lg:text-xl leading-relaxed text-foreground/90">
            Profissional multidisciplinar com sólida trajetória na intersecção entre
            <span className="text-brand"> design estratégico</span>, comunicação visual e
            fotografia profissional. Especialista em criar narrativas visuais focadas
            na conversão e no posicionamento de mercado.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Atuação direcionada à valorização de marcas e produtos através de uma estética
            rigorosa e execução hands-on, do conceito inicial à entrega final.
          </p>

          <div className="pt-8 border-t border-border">
            <div className="eyebrow text-muted-foreground mb-5">Áreas de atuação</div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs uppercase tracking-[0.2em] border border-border px-3 py-2 hover:border-brand hover:text-brand transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
