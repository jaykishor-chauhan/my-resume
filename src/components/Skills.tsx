
import React from 'react';
import SectionTitle from './SectionTitle';
import { Code, Database, Globe, Users } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <div className="mb-4 p-3 bg-white rounded-lg border border-gray-100 hover:border-resume-secondary/30 transition-colors">
      <h3 className="font-semibold text-resume-dark mb-3 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-resume-light text-resume-dark px-3 py-1 rounded-full text-sm hover:bg-resume-secondary hover:text-white transition-colors cursor-default"
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
      
      <div className="space-y-4">
        <SkillCategory 
          title="Languages"
          skills={["JavaScript", "Java", "Python", "C++"]}
          icon={<Code size={18} className="text-resume-accent" />}
        />
        
        <SkillCategory 
          title="Databases"
          skills={["MySQL", "MongoDB"]}
          icon={<Database size={18} className="text-resume-accent" />}
        />
        
        <SkillCategory 
          title="Web Development"
          skills={["ReactJS", "ASP.NET", "Bootstrap", "CSS", "HTML"]}
          icon={<Globe size={18} className="text-resume-accent" />}
        />
        
        <SkillCategory 
          title="Soft Skills"
          skills={["Teamwork", "Problem Solving", "Analytical Thinking"]}
          icon={<Users size={18} className="text-resume-accent" />}
        />
      </div>
    </section>
  );
};

export default Skills;
