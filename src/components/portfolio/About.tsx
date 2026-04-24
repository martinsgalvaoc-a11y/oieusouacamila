import SectionHeader from "./SectionHeader";
import { RevealLine } from "./SplitReveal";

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Lightroom",
  "Fotografia",
  "Notion",
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
            Sou a <span className="text-brand font-medium">Camila</span>, profissional de comunicação visual com experiência em design gráfico, fotografia e marketing.
          </p>
          <p className="text-base lg:text-lg leading-[1.7] text-muted-foreground">
            Trabalho há mais de cinco anos desenvolvendo identidade visual, produzindo conteúdo e organizando a comunicação de marcas para que se apresentem de forma clara, profissional e alinhada ao seu posicionamento.
          </p>
          <p className="text-base lg:text-lg leading-[1.7] text-muted-foreground">
            Comecei empreendendo, fundando o Studio Rosso, onde adquiri visão prática de negócio, atendimento e entrega. Aprendi no dia a dia a desenhar, fotografar, vender, atender e finalizar projetos com responsabilidade. Depois atuei como Analista de Marketing e Comunicação, estruturando sistemas visuais, direção de fotografia e materiais de divulgação para empresas do segmento premium.
          </p>
          <p className="text-base lg:text-lg leading-[1.7] text-muted-foreground">
            Hoje trabalho de forma independente e estou aberta a oportunidades em empresas, agências ou projetos pontuais. Acredito que design não é apenas estética — é uma{" "}
            <span className="text-foreground">ferramenta para comunicar valor</span>, transmitir confiança e apoiar resultados de negócio.
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


        </RevealLine>
      </div>
    </section>
  );
};

export default About;