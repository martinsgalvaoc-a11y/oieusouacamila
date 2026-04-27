import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import logo1 from "@/assets/logo1.jpg";
import logo2 from "@/assets/logo2.png";
import dsc2329 from "@/assets/DSC_2329.jpg";
import foto1 from "@/assets/foto1.png";

import artboard4 from "@/assets/Artboard 4.png";
import artboard8 from "@/assets/Artboard 8.png";
import siteImg from "@/assets/site.jpeg";
import hfImg from "@/assets/Artboard 9.png";
import blackVideo from "@/assets/black.mp4";
import { RevealLine } from "./SplitReveal";

const categories = ["Todos", "Branding", "Fotografia", "Direção"] as const;
type Category = (typeof categories)[number];

interface ExtraImage {
  src: string;
  alt?: string;
}

interface Project {
  n: string;
  title: string;
  client: string;
  category: Exclude<Category, "Todos">;
  challenge: string;
  solution: string;
  year: string;
  accent?: boolean;
  image?: string;
  video?: string;
  videoAspect?: "16/9" | "9/16" | "4/3";
  videoFit?: "cover" | "contain";
  extraGrid?: ExtraImage[];
  extraStackedVideo?: string;
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
    year: "2026",
    challenge:
      "A marca tinha um produto sólido mas a comunicação visual não refletia isso. Identidade desatualizada, sem consistência entre os pontos de contato.",
    solution:
      "Rebranding completo com nova identidade visual, padronização e direção de fotografia alinhada ao posicionamento da marca.",
    accent: true,
    beforeAfterImages: {
      before: logo1,
      after: logo2,
    },
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
    image: dsc2329 || foto1,
  },
  {
    n: "03",
    title: "Studio Rosso",
    client: "Marca Própria",
    category: "Direção",
    year: "2020 — 2024",
    challenge:
      "Criar uma marca autoral de quadros decorativos e construir presença própria no mercado digital.",
    solution:
      "Desenvolvimento de identidade visual, produção dos produtos, construção de presença digital e venda direta ao consumidor.",
    accent: true,
    image: siteImg,
    extraStackedVideo: blackVideo,
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
    image: artboard4,
    extraGrid: [
      { src: artboard8, alt: "Sistema de Comunicação — peça 1" },
      { src: hfImg, alt: "Sistema de Comunicação — peça 2" },
    ],
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

      {/* Cases — text first, then media, full width stacked */}
      <div className="space-y-24 lg:space-y-40">
        {filtered.map((p) => {
          return (
            <RevealLine key={p.n} delay={0.05}>
              <article className="group">
                {/* === 1. HEADER: number + meta + title + copy === */}
                <header className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-8 lg:mb-12">
                  <div className="lg:col-span-5">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="display text-5xl md:text-6xl text-brand leading-none">
                        {p.n}
                      </span>
                      <span className="eyebrow text-muted-foreground">
                        {p.year}
                      </span>
                    </div>
                    <div className="eyebrow text-brand mb-4">
                      {p.category} · {p.client}
                    </div>
                    <h3 className="display text-3xl md:text-4xl lg:text-5xl leading-[0.95] group-hover:text-brand transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-7">
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
                  </div>
                </header>

                {/* === 2. MEDIA / CASE === */}
                <div className="w-full">
                  {p.beforeAfterImages ? (
                    <div className="relative bg-ink p-4 lg:p-8">
                      <div className="grid grid-cols-2 gap-3 lg:gap-6 max-w-4xl mx-auto">
                        <figure className="text-center">
                          <div className="relative aspect-square overflow-hidden border border-border bg-background/50 p-3">
                            <img
                              src={p.beforeAfterImages.before}
                              alt={`${p.title} — antes`}
                              loading="lazy"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <figcaption className="eyebrow text-muted-foreground text-xs mt-2">
                            Antes
                          </figcaption>
                        </figure>
                        <figure className="text-center">
                          <div className="relative aspect-square overflow-hidden border border-brand/30 bg-background/50 p-3">
                            <img
                              src={p.beforeAfterImages.after}
                              alt={`${p.title} — depois`}
                              loading="lazy"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <figcaption className="eyebrow text-brand text-xs mt-2">
                            Depois
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 lg:space-y-6">
                      <a href="#contato" className="block relative overflow-hidden bg-ink">
                        {p.video ? (
                          <video
                            src={p.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                          />
                        ) : (
                          <img
                            src={p.image}
                            alt={`${p.title} — ${p.client}`}
                            loading="lazy"
                            className="w-full h-auto max-h-[80vh] object-contain mx-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
                          />
                        )}
                        <div
                          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                            p.accent
                              ? "bg-brand mix-blend-multiply opacity-30 group-hover:opacity-0"
                              : "bg-ink/20 group-hover:bg-transparent"
                          }`}
                        />
                        <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-background/30 backdrop-blur-md border border-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </a>

                      {/* Stacked vertical video (Project 03) */}
                      {p.extraStackedVideo && (
                        <div className="relative bg-ink mx-auto w-full" style={{ maxWidth: "360px" }}>
                          <video
                            src={p.extraStackedVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto max-h-[80vh] object-contain block"
                          />
                        </div>
                      )}

                      {/* Extra grid of two smaller images */}
                      {p.extraGrid && p.extraGrid.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6 items-start">
                          {p.extraGrid.map((g, idx) => (
                            <div key={idx} className="relative bg-ink overflow-hidden">
                              <img
                                src={g.src}
                                alt={g.alt || `${p.title} — imagem ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-auto max-h-[50vh] object-contain mx-auto block"
                              />
                            </div>
                          ))}
                        </div>
                      )}
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
