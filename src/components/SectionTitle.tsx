
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold text-resume-primary border-b-2 border-resume-secondary pb-1 inline-block">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
