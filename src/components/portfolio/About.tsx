import SectionHeader from "./SectionHeader";
import { RevealLine } from "./SplitReveal";

const tools = [
  "Adobe Photoshop",
  "Illustrator",
  "InDesign",
  "Lightroom",
  "Figma",
  "Canva Pro",
  "DSLR Canon",
  "Notion",
];

const obsessions = [
  { label: "Lendo", value: "Ways of Seeing — John Berger" },
  { label: "Olhando", value: "Trabalhos de Peter Saville & Bureau Borsche" },
  { label: "Ouvindo", value: "FKA twigs · Caetano · Arca" },
  { label: "Pensando", value: "Como marcas brasileiras podem ter alma global" },
];

const About = () => {
  return (
    <section id="perfil" className="container py-24 lg:py-40 relative">
      <SectionHeader
        index="02"
        eyebrow="Perfil"
        title="Estética rigorosa, execução hands-on."
      />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Letter */}
        <RevealLine className="lg:col-span-7 lg:col-start-5 space-y-6">
          <p className="text-xl lg:text-2xl leading-[1.5] text-foreground/95 font-light">
            Sou a <span className="text-brand font-medium">Camila</span>. Trabalho
            há mais de cinco anos costurando branding, fotografia e direção de
            arte para marcas que querem ser <em className="text-brand not-italic">lembradas</em> —
            não só vistas.
          </p>
          <p className="text-base lg:text-lg leading-[1.7] text-muted-foreground">
            Comecei como dona de estúdio próprio (Studio Rosso), aprendendo
            no concreto: desenhar, fotografar, vender, atender, faturar. Hoje
            levo essa visão de dono para times de alto padrão, onde
            comunicação visual deixa de ser decoração e vira{" "}
            <span className="text-foreground">argumento de venda</span>.
          </p>
          <p className="text-base lg:text-lg leading-[1.7] text-muted-foreground">
            Acredito que o bom design começa em uma pergunta — não em um
            moodboard. E que execução vale mais do que conceito quando o cliente
            precisa vender no fim do mês.
          </p>

          {/* Tools */}
          <div className="pt-10 mt-4 border-t border-border">
            <div className="eyebrow text-muted-foreground mb-5">Caixa de ferramentas</div>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="text-xs uppercase tracking-[0.2em] border border-border px-3 py-2 hover:border-brand hover:text-brand transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Obsessions */}
          <div className="pt-10 mt-4 border-t border-border">
            <div className="eyebrow text-muted-foreground mb-6">Obsessões deste mês</div>
            <dl className="space-y-4">
              {obsessions.map((o) => (
                <div key={o.label} className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-4 items-baseline group">
                  <dt className="eyebrow text-brand">{o.label}</dt>
                  <dd className="text-sm sm:text-base text-foreground/85 group-hover:text-foreground transition-colors">
                    {o.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </RevealLine>
      </div>
    </section>
  );
};

export default About;
