import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import portrait from "@/assets/portrait.jpeg";
import { RevealLine } from "./SplitReveal";

const categories = ["Todos", "Branding", "Fotografia", "Direção"] as const;
type Category = (typeof categories)[number];

interface Project {
  n: string;
  title: string;
  client: string;
  category: Exclude<Category, "Todos">;
  challenge: string;
  solution: string;
  year: string;
  accent?: boolean;
  beforeAfterImages?: {
    before: string;
    after: string;
  };
}

const projects: Project[] = [
  {
    n: "01",
    title: "Reposicionamento Premium",
    client: "Home Fine Móveis",
    category: "Branding",
    year: "2025",
    challenge:
      "Marca regional com produto de alto padrão, mas comunicação visual abaixo do nível esperado para o segmento premium.",
    solution:
      "Estruturação de sistema visual consistente, definição de identidade visual e direção de fotografia alinhada ao posicionamento da marca.",
    accent: true,
  },
  {
    n: "02",
    title: "Série Interiores",
    client: "Home Fine · Linha Atelier",
    category: "Fotografia",
    year: "2025",
    challenge:
      "Apresentar produtos e ambientes de forma mais atrativa em um cenário digital saturado de imagens semelhantes.",
    solution:
      "Produção fotográfica com direção estética alinhada à identidade da marca, valorizando detalhes e acabamento dos produtos.",
  },
  {
    n: "03",
    title: "Studio Rosso",
    client: "Marca Própria",
    category: "Direção",
    year: "2020 — 2024",
    challenge:
      "Criar uma marca autoral de arte e design e construir presença própria no mercado.",
    solution:
      "Desenvolvimento de identidade visual consistente, produção de peças autorais e venda direta ao consumidor.",
    accent: true,
  },
  {
    n: "04",
    title: "Sistema de Comunicação",
    client: "Home Fine · Pontos de venda",
    category: "Branding",
    year: "2026",
    challenge:
      "Garantir consistência visual entre showroom físico, redes sociais e materiais impressos.",
    solution:
      "Criação de guia visual, templates e biblioteca de imagens padronizadas.",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState<Category>("Todos");

  const filtered = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="portfolio" className="container py-24 lg:py-40">
      <SectionHeader
        index="04"
        eyebrow="Trabalhos selecionados"
        title="Portfólio."
        description="Cada projeto começa em uma pergunta. Aqui ficam as respostas mais bem entregues."
      />

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-10 lg:mb-16">
        <span className="eyebrow text-muted-foreground mr-3">Filtrar:</span>
        {categories.map((c) => {
          const active = filter === c;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`eyebrow px-4 py-2 border transition-all ${
                active
                  ? "bg-brand border-brand text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Cases — full bleed alternating */}
      <div className="space-y-20 lg:space-y-32">
        {filtered.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <RevealLine key={p.n} delay={0.05}>
              <article className="group grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
                >
                  <a href="#contato" className="block relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-ink">
                    <img
                      src={portrait}
                      alt={`${p.title} — ${p.client}`}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.04]"
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        p.accent
                          ? "bg-brand mix-blend-multiply opacity-65 group-hover:opacity-15"
                          : "bg-ink/65 group-hover:bg-ink/10"
                      }`}
                    />
                    <div className="absolute top-5 left-5 display text-2xl text-foreground/85">
                      {p.n}
                    </div>
                    <div className="absolute top-5 right-5 eyebrow text-foreground/70">
                      {p.year}
                    </div>
                    <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-background/30 backdrop-blur-md border border-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </a>
                </div>

                {/* Case copy */}
                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="eyebrow text-brand mb-4">
                    {p.category} · {p.client}
                  </div>
                  <h3 className="display text-3xl md:text-4xl lg:text-5xl leading-[0.95] mb-6 group-hover:text-brand transition-colors">
                    {p.title}
                  </h3>
                  <dl className="space-y-5">
                    <div>
                      <dt className="eyebrow text-muted-foreground mb-1.5">Desafio</dt>
                      <dd className="text-sm lg:text-base text-foreground/85 leading-relaxed">
                        {p.challenge}
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-muted-foreground mb-1.5">Solução</dt>
                      <dd className="text-sm lg:text-base text-foreground/85 leading-relaxed">
                        {p.solution}
                      </dd>
                    </div>
                  </dl>

                  {/* Before/After Images */}
                  {p.beforeAfterImages && (
                    <div className="mt-8 grid grid-cols-2 gap-3 lg:gap-5">
                      <figure className="text-center">
                        <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-background/50 p-3">
                          <img
                            src={p.beforeAfterImages.before}
                            alt="Branding antes"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <figcaption className="eyebrow text-muted-foreground text-xs mt-2">
                          Antes
                        </figcaption>
                      </figure>
                      <figure className="text-center">
                        <div className="relative aspect-square overflow-hidden rounded-lg border border-brand/30 bg-background/50 p-3">
                          <img
                            src={p.beforeAfterImages.after}
                            alt="Branding depois"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <figcaption className="eyebrow text-brand text-xs mt-2">
                          Depois
                        </figcaption>
                      </figure>
                    </div>
                  )}
                </div>
              </article>
            </RevealLine>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-20">
          Nenhum projeto nessa categoria ainda.
        </p>
      )}
    </section>
  );
};

export default Portfolio;
