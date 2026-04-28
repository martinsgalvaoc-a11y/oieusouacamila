import { useActiveSection } from "@/hooks/use-active-section";

const sections = [
  { id: "top", num: "01", label: "Início" },
  { id: "perfil", num: "02", label: "Perfil" },
  { id: "experiencia", num: "03", label: "Experiência" },
  { id: "formacao", num: "04", label: "Formação" },
  { id: "portfolio", num: "05", label: "Portfólio" },
  { id: "processo", num: "06", label: "Processo" },
  { id: "contato", num: "07", label: "Contato" },
];

const SectionNav = () => {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <nav
      aria-label="Navegação de seções"
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-1"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3 justify-end py-2"
          >
            <span
              className={`eyebrow text-[10px] transition-all duration-500 ${
                isActive
                  ? "opacity-100 text-foreground translate-x-0"
                  : "opacity-0 -translate-x-2 text-muted-foreground group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {s.num} · {s.label}
            </span>
            <span
              className={`block h-px transition-all duration-500 ${
                isActive ? "w-10 bg-brand" : "w-5 bg-foreground/30 group-hover:w-8 group-hover:bg-foreground"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default SectionNav;
