
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-4 flex items-center">
      <h2 className="text-xl font-bold text-resume-primary border-b-2 border-resume-secondary pb-1 inline-block relative">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-resume-secondary/20 -mb-1.5"></span>
      </h2>
      <div className="h-[1px] bg-gradient-to-r from-resume-secondary/50 to-resume-secondary/5 flex-grow ml-3"></div>
    </div>
  );
};

export default SectionTitle;
