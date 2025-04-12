
import React from 'react';
import SectionTitle from './SectionTitle';
import { FileText, Star } from 'lucide-react';

interface AchievementProps {
  type: 'publication' | 'achievement';
  title: string;
}

const AchievementItem: React.FC<AchievementProps> = ({ type, title }) => {
  const Icon = type === 'publication' ? FileText : Star;
  
  return (
    <div className="flex items-start mb-3 hover:bg-resume-light p-2 rounded-lg transition-colors border border-transparent hover:border-resume-secondary/20 group">
      <Icon 
        size={20} 
        className="text-resume-secondary mt-0.5 mr-2 flex-shrink-0 group-hover:text-resume-accent transition-colors" 
      />
      <span className="text-gray-700">{title}</span>
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section className="mb-6 animate-slide-in bg-white rounded-lg p-4 shadow-sm border border-gray-100 mt-6" style={{ animationDelay: '0.5s' }}>
      <SectionTitle title="Achievements & Publications" />
      
      <AchievementItem 
        type="publication"
        title="Blockchain File Storage IEEE Paper" 
      />
      
      <AchievementItem 
        type="publication"
        title="Student Success Task System" 
      />
      
      <AchievementItem 
        type="achievement"
        title="Mentored students in Byte Battle Hackathon 2024" 
      />
    </section>
  );
};

export default Achievements;
