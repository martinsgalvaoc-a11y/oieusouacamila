import SectionHeader from "./SectionHeader";
import { RevealLine } from "./SplitReveal";

const jobs = [
  {
    badge: "HF",
    role: "Coordenadora de Marketing e Comunicação",
    company: "Home Fine Móveis",
    period: "2025 — 2026",
    description:
      "Responsável pela comunicação visual da marca no segmento de móveis sob medida. Atuei na direção de fotografia de ambientes, padronização visual, criação de materiais impressos e digitais e organização da presença visual da empresa.",
    tags: ["Branding", "Fotografia", "Móveis sob Medida"],
  },
  {
    badge: "SR",
    role: "Proprietária & Diretora",
    company: "Studio Rosso · Art e Design",
    period: "2020 — 2024",
    description:
      "Criei e geri meu próprio estúdio de design e produtos autorais. Cuidei de tudo: identidade visual, produção, atendimento, vendas e entrega. Foi onde desenvolvi visão de negócio e aprendi que execução responsável é o que sustenta qualquer projeto.",
    tags: ["Direção", "Estúdio Próprio", "Minimalismo"],
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="relative py-24 lg:py-40 bg-ink/40 border-y border-border">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Trajetória"
          title="Experiência."
          description="De estúdio próprio a atuação corporativa no setor moveleiro. Uma trajetória feita de trabalho entregue."
        />

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-brand via-border to-transparent" />

          <div className="space-y-16 lg:space-y-24">
            {jobs.map((job, i) => (
              <RevealLine key={i} delay={i * 0.1}>
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Marker + period */}
                  <div className="lg:col-span-3 flex lg:block items-center gap-4 relative pl-8 lg:pl-10">
                    <span className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-brand bg-background flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-brand" />
                    </span>
                    <div className="eyebrow text-brand">{job.period}</div>
                    <div className="hidden lg:flex mt-4 w-14 h-14 border border-border items-center justify-center">
                      <span className="display text-lg">{job.badge}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="lg:col-span-9">
                    <h3 className="display text-3xl md:text-4xl lg:text-5xl mb-2 leading-[0.95]">
                      {job.role}
                    </h3>
                    <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-5">
                      {job.company}
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-xl mb-6">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border px-2.5 py-1.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealLine>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;