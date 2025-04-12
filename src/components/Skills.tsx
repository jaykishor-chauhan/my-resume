
import React from 'react';
import SectionTitle from './SectionTitle';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold text-resume-dark mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-resume-light text-resume-dark px-3 py-1 rounded-full text-sm hover:bg-resume-secondary hover:text-white transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="mb-6 animate-slide-in" style={{ animationDelay: '0.3s' }}>
      <SectionTitle title="Skills" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCategory 
          title="Languages"
          skills={["JavaScript", "Java", "Python", "C++"]}
        />
        
        <SkillCategory 
          title="Databases"
          skills={["MySQL", "MongoDB"]}
        />
        
        <SkillCategory 
          title="Web Development"
          skills={["ReactJS", "ASP.NET", "Bootstrap", "CSS", "HTML"]}
        />
        
        <SkillCategory 
          title="Soft Skills"
          skills={["Teamwork", "Problem Solving", "Analytical Thinking"]}
        />
      </div>
    </section>
  );
};

export default Skills;
