const items = [
  "Branding",
  "Direção de Arte",
  "Fotografia",
  "Identidade Visual",
  "Comunicação",
  "Estratégia",
];

const Marquee = () => {
  return (
    <div className="relative border-y border-border bg-ink/40 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="display text-3xl mx-8 flex items-center gap-8">
            {item}
            <span className="w-2 h-2 rounded-full bg-brand inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
