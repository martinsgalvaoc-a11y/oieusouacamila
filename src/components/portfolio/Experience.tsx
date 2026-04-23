import SectionHeader from "./SectionHeader";

const jobs = [
  {
    role: "Analista de Marketing e Comunicação",
    company: "Home Fine Móveis",
    period: "2025 — 2026",
    description:
      "Desenvolvimento de propostas de branding e reposicionamento estratégico para o mercado de móveis de alto padrão. Gestão de comunicação visual de ponta a ponta, fotografia profissional de ambientes e atendimento consultivo focado no fechamento comercial.",
    tags: ["Branding", "Fotografia", "Alto Padrão"],
  },
  {
    role: "Proprietária & Designer",
    company: "Studio Rosso Art e Design",
    period: "Experiência Autônoma",
    description:
      "Fundação e gestão completa de estúdio autoral. Domínio de todo o ciclo de negócio, desde a concepção artística minimalista até marketing, vendas e atendimento direto ao cliente.",
    tags: ["Direção", "Estúdio Próprio", "Minimalismo"],
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="relative py-24 lg:py-40 bg-ink/30 border-y border-border">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Trajetória"
          title="Experiência."
          description="Trajetória construída entre estúdio próprio e atuação corporativa em segmentos de alto padrão."
        />

        <div className="space-y-0">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="group grid lg:grid-cols-12 gap-6 py-10 border-t border-border hover:bg-brand/5 transition-colors -mx-6 px-6"
            >
              <div className="lg:col-span-3">
                <div className="eyebrow text-brand">{job.period}</div>
              </div>
              <div className="lg:col-span-6">
                <h3 className="display text-3xl md:text-4xl mb-2 group-hover:text-brand transition-colors">
                  {job.role}
                </h3>
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-5">
                  {job.company}
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  {job.description}
                </p>
              </div>
              <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end h-fit">
                {job.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
