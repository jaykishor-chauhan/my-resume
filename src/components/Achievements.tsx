
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
    <div className="flex items-start mb-3 hover:bg-resume-light p-2 rounded transition-colors">
      <Icon size={20} className="text-resume-secondary mt-0.5 mr-2 flex-shrink-0" />
      <span className="text-gray-700">{title}</span>
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section className="mb-6 animate-slide-in" style={{ animationDelay: '0.5s' }}>
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
