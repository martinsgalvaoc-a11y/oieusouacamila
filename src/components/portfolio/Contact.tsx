import { Mail, MapPin, Phone, ArrowUpRight, Download } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { RevealLine } from "./SplitReveal";

const pdfHref = `${import.meta.env.BASE_URL}curriculo-camila-renata.pdf`;

const contacts = [
  {
    icon: Mail,
    label: "E-mail",
    value: "martinsgalvao.c@gmail.com",
    href: "mailto:martinsgalvao.c@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 96428-6008",
    href: "tel:+5511964286008",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Bernardo do Campo · SP",
    href: "#",
  },
];

const Contact = () => {
  return (
    <section id="contato" className="relative overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--brand-glow)/0.4)_0%,transparent_55%)]" />

      <div className="container relative py-24 lg:py-40">
        <RevealLine className="max-w-5xl">
          <div className="eyebrow text-foreground/70 mb-6">06 — Contato</div>
          <h2 className="display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85]">
            Tem um
            <br />
            projeto?
            <br />
            <span className="text-outline">Me conta.</span>
          </h2>
          <p className="mt-8 max-w-lg text-foreground/85 leading-relaxed text-lg">
            Aberta a colaborações em branding, fotografia e direção de arte.
            Conta o que você está construindo — vamos pensar juntos no próximo
            movimento.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="mailto:martinsgalvao.c@gmail.com"
              className="group bg-background text-foreground px-8 py-5 hover:bg-foreground hover:text-background"
              strength={0.4}
            >
              <span className="eyebrow flex items-center gap-4">
                Iniciar conversa
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </MagneticButton>

            <MagneticButton
              href={pdfHref}
              className="group border border-foreground/40 text-foreground px-8 py-5 hover:bg-foreground/10"
              strength={0.25}
              ariaLabel="Baixar currículo em PDF"
            >
              <span className="eyebrow flex items-center gap-3">
                <Download className="w-4 h-4" />
                Baixar CV (PDF)
              </span>
            </MagneticButton>
          </div>
        </RevealLine>

        <div className="mt-20 lg:mt-32 grid sm:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group bg-background/40 backdrop-blur-md hover:bg-background/80 transition-colors p-8"
            >
              <c.icon className="w-5 h-5 text-brand mb-6" />
              <div className="eyebrow text-muted-foreground mb-2">{c.label}</div>
              <div className="font-medium text-foreground group-hover:text-brand transition-colors break-words">
                {c.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
