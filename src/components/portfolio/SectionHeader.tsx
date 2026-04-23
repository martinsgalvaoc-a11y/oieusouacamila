interface Props {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ index, eyebrow, title, description }: Props) => {
  return (
    <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
      <div className="lg:col-span-4 flex items-start gap-4">
        <span className="display text-xl text-brand">{index}</span>
        <span className="eyebrow text-muted-foreground pt-2">{eyebrow}</span>
      </div>
      <div className="lg:col-span-8">
        <h2 className="display text-5xl md:text-7xl lg:text-8xl">{title}</h2>
        {description && (
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
