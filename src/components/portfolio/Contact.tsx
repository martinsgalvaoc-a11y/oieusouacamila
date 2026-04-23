import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Mail, label: "E-mail", value: "martinsgalvao.c@gmail.com", href: "mailto:martinsgalvao.c@gmail.com" },
  { icon: Phone, label: "Telefone", value: "(11) 96428-6008", href: "tel:+5511964286008" },
  { icon: MapPin, label: "Localização", value: "São Bernardo do Campo · SP", href: "#" },
];

const Contact = () => {
  return (
    <section id="contato" className="relative overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--brand-glow)/0.4)_0%,transparent_50%)]" />

      <div className="container relative py-24 lg:py-40">
        <div className="max-w-5xl">
          <div className="eyebrow text-foreground/70 mb-6">04 — Contato</div>
          <h2 className="display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85]">
            Vamos
            <br />
            <span className="text-outline">criar algo.</span>
          </h2>
          <p className="mt-8 max-w-lg text-foreground/80 leading-relaxed">
            Aberta a colaborações em branding, fotografia e direção de arte. Conta o que você
            está construindo — vamos pensar juntos.
          </p>

          <a
            href="mailto:martinsgalvao.c@gmail.com"
            className="group mt-10 inline-flex items-center gap-4 bg-background text-foreground px-8 py-5 hover:bg-foreground hover:text-background transition-all"
          >
            <span className="eyebrow">Iniciar conversa</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

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
