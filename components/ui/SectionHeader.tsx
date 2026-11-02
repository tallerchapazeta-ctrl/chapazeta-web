"use client";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`heading-lg mb-4 ${light ? 'text-white' : 'text-chapa-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-body max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 rounded-full ${centered ? 'mx-auto' : ''} ${light ? 'bg-chapa-yellow' : 'bg-chapa-blue'}`} />
    </div>
  );
}
