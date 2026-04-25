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
        title="Quem está por trás do trabalho."
      />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Letter */}
        <RevealLine className="lg:col-span-7 lg:col-start-5 space-y-6">
          <p className="text-xl lg:text-2xl leading-[1.5] text-foreground/95 font-light">
            Sou a <span className="text-brand font-medium">Camila</span>, tenho 32 anos, sou formada em Publicidade e Propaganda e atuo como profissional de comunicação com experiência em design gráfico, fotografia e marketing.
          </p>
          <p className="text-base lg:text-lg leading-[1.7] text-muted-foreground">
            Produzo conteúdo voltado para marcas e organizo a comunicação para que se apresentem com clareza, seguindo sua identidade e posicionamento. Já atendi restaurantes como freelancer, criei minha própria empresa de quadros decorativos, o Studio Rosso, e trabalhei como Coordenadora de Marketing e Comunicação no setor moveleiro, onde fiz rebranding e dei direcionamento estratégico alinhado ao que a empresa realmente entregava.
          </p>
          <p className="text-base lg:text-lg leading-[1.7] text-muted-foreground">
            Cada experiência me ensinou algo diferente. O Studio Rosso me deu visão de negócio: aprendi a desenvolver produto, divulgar e vender na prática. A atuação corporativa me deu maturidade estratégica e entendimento de como a comunicação impacta resultado.
          </p>
          <p className="text-base lg:text-lg leading-[1.7] text-muted-foreground">
            Hoje trabalho de forma independente e estou aberta a oportunidades em empresas, agências ou projetos pontuais. Não tenho medo de não saber algo. Mas sou{" "}
            <span className="text-foreground">rigorosa com o que prometo entregar</span>.
          </p>

          {/* Tools */}
          <div className="pt-10 mt-4 border-t border-border">
            <div className="eyebrow text-muted-foreground mb-5">As ferramentas que utilizo no meu dia a dia.</div>
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