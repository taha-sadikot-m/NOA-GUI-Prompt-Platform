import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10 md:mb-20">
      <h2 className="text-3xl md:text-4xl font-medium bg-positivus-green px-2 rounded-md inline-block">
        {title}
      </h2>
      <p className="max-w-xl text-base md:text-lg text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;