import SectionHeader from "./SectionHeader";
import { RevealLine } from "./SplitReveal";

const steps = [
  {
    n: "01",
    title: "Briefing",
    summary: "Entendimento antes da execução.",
    description:
      "Mergulho no negócio, no público e nas necessidades reais antes de qualquer decisão visual.",
  },
  {
    n: "02",
    title: "Conceito",
    summary: "Direção, não decoração.",
    description:
      "Defino a direção visual e estratégica com escolhas que fazem sentido para a marca e para quem ela quer alcançar.",
  },
  {
    n: "03",
    title: "Execução",
    summary: "Mão na massa, do começo ao fim.",
    description:
      "Desenvolvo as peças necessárias atuando diretamente em design, fotografia e produção visual.",
  },
  {
    n: "04",
    title: "Entrega",
    summary: "Material organizado para uso contínuo.",
    description:
      "Entrego tudo estruturado e orientado para que a comunicação tenha continuidade mesmo sem mim.",
  },
];

const Process = () => {
  return (
    <section
      id="processo"
      className="relative py-24 lg:py-40 bg-charcoal/30 border-y border-border overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--brand)/0.12)_0%,transparent_50%)]" />

      <div className="container relative">
        <SectionHeader
          index="06"
          eyebrow="Método"
          title="Processo."
          description="Quatro etapas que sigo em todo projeto. Para que o resultado seja consistente e o caminho claro para os dois lados."
        />

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {steps.map((s, i) => (
            <RevealLine key={s.n} delay={i * 0.08}>
              <div className="group bg-background hover:bg-brand/5 transition-colors p-8 lg:p-12 h-full relative overflow-hidden">
                <div className="flex items-start justify-between mb-8">
                  <span className="display text-5xl lg:text-6xl text-brand">
                    {s.n}
                  </span>
                  <span className="eyebrow text-muted-foreground">
                    Etapa {i + 1}/4
                  </span>
                </div>
                <h3 className="display text-3xl lg:text-4xl mb-3 group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="text-base text-foreground/80 italic mb-6 font-light">
                  {s.summary}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            </RevealLine>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;