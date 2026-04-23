import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import portrait from "@/assets/portrait.jpeg";

const projects = [
  {
    n: "01",
    title: "Estratégia & Branding",
    category: "Identidade · Reposicionamento",
    description:
      "Reestruturação de marca e posicionamento visual desenvolvido durante a atuação na Home Fine. Foco em alinhar a comunicação estética com as exigências do mercado de alto padrão.",
    span: "lg:col-span-7",
    height: "aspect-[4/3]",
    accent: true,
  },
  {
    n: "02",
    title: "Fotografia Profissional",
    category: "Interiores · Marcenaria",
    description:
      "Captação técnica de interiores e detalhes de marcenaria. Equipamentos DSLR com foco na valorização do produto através do controle rigoroso de luz e enquadramento arquitetônico.",
    span: "lg:col-span-5",
    height: "aspect-[4/3]",
    accent: false,
  },
  {
    n: "03",
    title: "Studio Rosso",
    category: "Direção autoral",
    description:
      "Estúdio próprio dedicado à arte e design minimalista. Curadoria, produção e venda direta de peças autorais.",
    span: "lg:col-span-5",
    height: "aspect-[4/3]",
    accent: false,
  },
  {
    n: "04",
    title: "Comunicação Visual",
    category: "Sistemas · Atendimento",
    description:
      "Sistemas de comunicação consistentes para pontos de venda e canais digitais, alinhados ao tom de voz da marca.",
    span: "lg:col-span-7",
    height: "aspect-[4/3]",
    accent: true,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="container py-24 lg:py-40">
      <SectionHeader
        index="03"
        eyebrow="Trabalhos selecionados"
        title="Portfólio."
        description="Uma seleção de projetos que traduzem a abordagem: rigor estético, foco no negócio."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {projects.map((p) => (
          <article key={p.n} className={`group relative ${p.span}`}>
            <div className={`relative ${p.height} overflow-hidden bg-ink`}>
              <img
                src={portrait}
                alt={p.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  p.accent
                    ? "bg-brand mix-blend-multiply opacity-70 group-hover:opacity-30"
                    : "bg-ink/60 group-hover:bg-ink/20"
                }`}
              />
              <div className="absolute top-5 left-5 display text-2xl text-foreground/80">
                {p.n}
              </div>
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div className="pt-5 flex items-start justify-between gap-4">
              <div>
                <div className="eyebrow text-muted-foreground mb-2">{p.category}</div>
                <h3 className="display text-2xl md:text-3xl group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                  {p.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
