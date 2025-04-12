
import React from 'react';
import SectionTitle from './SectionTitle';
import { Award } from 'lucide-react';

interface CertificationProps {
  title: string;
}

const CertificationItem: React.FC<CertificationProps> = ({ title }) => {
  return (
    <div className="flex items-start mb-3 hover:bg-resume-light p-2 rounded-lg transition-colors border border-transparent hover:border-resume-secondary/20 group">
      <Award size={20} className="text-resume-secondary mt-0.5 mr-2 flex-shrink-0 group-hover:text-resume-accent transition-colors" />
      <span className="text-gray-700">{title}</span>
    </div>
  );
};

const Certifications: React.FC = () => {
  return (
    <section className="mb-6 animate-slide-in bg-white rounded-lg p-4 shadow-sm border border-gray-100" style={{ animationDelay: '0.4s' }}>
      <SectionTitle title="Certifications" />
      
      <CertificationItem title="IBM Front-End Developer Certificate" />
      <CertificationItem title="Byte Battle Hackathon - Participation & Mentorship" />
    </section>
  );
};

export default Certifications;
