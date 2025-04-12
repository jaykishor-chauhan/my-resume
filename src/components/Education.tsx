
import React from 'react';
import SectionTitle from './SectionTitle';
import { School, Calendar } from 'lucide-react';

const EducationItem: React.FC<{
  degree: string;
  institution: string;
  year: string;
  gpa: string;
}> = ({ degree, institution, year, gpa }) => {
  return (
    <div className="mb-4 hover:bg-resume-light p-3 rounded-lg transition-colors border border-transparent hover:border-resume-secondary/20 group">
      <div className="flex flex-col md:flex-row md:justify-between mb-1">
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          <School size={18} className="text-resume-accent" />
          {degree}
        </h3>
        <span className="text-sm text-gray-600 flex items-center gap-1">
          <Calendar size={14} className="text-resume-secondary" />
          {year}
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <span className="text-resume-dark ml-6 md:ml-7">{institution}</span>
        <span className="text-resume-secondary font-medium ml-6 md:ml-0 group-hover:text-resume-primary transition-colors">CGPA: {gpa}</span>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section className="mb-6 animate-slide-in" style={{ animationDelay: '0.1s' }}>
      <SectionTitle title="Education" />
      
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <EducationItem 
          degree="B.Tech in Computer Science and Engineering"
          institution="Amrita University, Bangalore"
          year="Expected 2026"
          gpa="8.18/10"
        />
        
        <EducationItem 
          degree="Higher Secondary"
          institution="Alpine High School, Nepal"
          year="2020–22"
          gpa="3.1/4"
        />
        
        <EducationItem 
          degree="Secondary School"
          institution="Shree Maiasthan Vidyapeeth, Nepal"
          year="2019"
          gpa="3.32/4"
        />
      </div>
    </section>
  );
};

export default Education;
