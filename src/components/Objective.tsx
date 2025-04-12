
import React from 'react';
import SectionTitle from './SectionTitle';
import { Target } from 'lucide-react';

const Objective: React.FC = () => {
  return (
    <section className="mb-6 animate-slide-in">
      <SectionTitle title="Career Objective" />
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex">
        <Target size={24} className="text-resume-accent mt-1 mr-3 flex-shrink-0" />
        <p className="text-gray-700">
          Aspiring Web Developer and Data Scientist with a solid foundation in computer science, specializing in web technologies and data-driven solutions. Experienced in developing web applications and implementing machine learning models. Seeking opportunities to leverage technical skills and creativity to contribute to innovative projects while continuously expanding knowledge in emerging technologies.
        </p>
      </div>
    </section>
  );
};

export default Objective;
