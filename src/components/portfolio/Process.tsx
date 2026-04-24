import SectionHeader from "./SectionHeader";
import { RevealLine } from "./SplitReveal";

const steps = [
  {
    n: "01",
    title: "Briefing",
    summary: "Entendimento antes da execução.",
    description:
      "Entendimento do negócio, público e necessidades reais. Levantamento de informações essenciais para orientar o projeto e definir objetivos claros.",
  },
  {
    n: "02",
    title: "Conceito",
    summary: "Direção visual e estratégica.",
    description:
      "Definição da direção visual e estratégica. Escolha de elementos visuais alinhados ao posicionamento da marca e ao público.",
  },
  {
    n: "03",
    title: "Execução",
    summary: "Mão na massa, do começo ao fim.",
    description:
      "Desenvolvimento das peças e materiais necessários. Atuação direta em design, fotografia e produção visual, garantindo consistência em todas as etapas.",
  },
  {
    n: "04",
    title: "Entrega",
    summary: "Material organizado para uso contínuo.",
    description:
      "Organização final dos materiais e orientação para uso. Entrega estruturada para facilitar aplicação e continuidade da comunicação visual.",
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
          index="05"
          eyebrow="Método"
          title="Processo."
          description="Quatro etapas que repito com obsessão. Garante que o resultado seja consistente — e o caminho, transparente."
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