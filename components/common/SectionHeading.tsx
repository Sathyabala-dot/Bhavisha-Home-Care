interface Props {
  subtitle: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="uppercase tracking-[6px] text-[#d4af37] text-sm mb-4">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold text-white mb-6">
        {title}
      </h2>

      <p className="text-gray-400 text-lg leading-8">
        {description}
      </p>
    </div>
  );
}