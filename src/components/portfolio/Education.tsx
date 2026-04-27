import { GraduationCap, Languages, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { RevealLine } from "./SplitReveal";

const specializations = [
  { area: "Design Gráfico", course: "Dg Essential" },
  { area: "Design de Marcas", course: "Método Pedro Panetto" },
  { area: "Edição de Imagem", course: "Intensivão Método BePro", teacher: "Rafael Ferreira" },
  { area: "Fotografia", course: "TeleFoto" },
];

const Education = () => {
  return (
    <section
      id="formacao"
      className="relative py-24 lg:py-40 bg-background border-b border-border"
    >
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Base e repertório"
          title="Formação e Especializações."
          description="Educação formal somada a uma busca contínua por aprofundamento técnico em design, marca e imagem."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Coluna 1 — Formação + Idiomas */}
          <div className="space-y-14">
            <RevealLine delay={0.05}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-9 h-9 border border-brand/40 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-brand" />
                  </span>
                  <h3 className="eyebrow text-foreground">Formação</h3>
                </div>

                <div className="pl-12 border-l border-border/60 ml-[18px] py-2">
                  <div className="eyebrow text-brand mb-3">2012 — 2016</div>
                  <h4 className="display text-2xl md:text-3xl leading-[1.05] mb-2 uppercase tracking-tight">
                    Publicidade e Propaganda
                  </h4>
                  <p className="text-sm text-muted-foreground tracking-wide">
                    Universidade Metodista de São Paulo
                  </p>
                </div>
              </div>
            </RevealLine>

            <RevealLine delay={0.15}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-9 h-9 border border-brand/40 flex items-center justify-center">
                    <Languages className="w-4 h-4 text-brand" />
                  </span>
                  <h3 className="eyebrow text-foreground">Idiomas</h3>
                </div>

                <div className="pl-12 border-l border-border/60 ml-[18px] py-2">
                  <h4 className="display text-2xl md:text-3xl leading-[1.05] mb-2 uppercase tracking-tight">
                    Inglês
                  </h4>
                  <p className="text-sm text-muted-foreground tracking-wide">
                    Intermediário
                  </p>
                </div>
              </div>
            </RevealLine>
          </div>

          {/* Coluna 2 — Especializações */}
          <div>
            <RevealLine delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-9 h-9 border border-brand/40 flex items-center justify-center">
                  <Award className="w-4 h-4 text-brand" />
                </span>
                <h3 className="eyebrow text-foreground">Especializações</h3>
              </div>

              <ul className="pl-12 border-l border-border/60 ml-[18px] space-y-8">
                {specializations.map((s, i) => (
                  <li key={i} className="group">
                    <div className="eyebrow text-brand mb-2">{s.area}</div>
                    <h4 className="display text-xl md:text-2xl leading-[1.1] uppercase tracking-tight">
                      {s.course}
                    </h4>
                    {s.teacher && (
                      <p className="text-sm text-muted-foreground tracking-wide mt-1">
                        {s.teacher}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </RevealLine>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
