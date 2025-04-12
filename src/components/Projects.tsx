
import React from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, BarChart, Check, Calendar } from 'lucide-react';

interface ProjectProps {
  title: string;
  year: string;
  technologies: string[];
  description: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, year, technologies, description }) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-all hover:border-resume-secondary/30 group">
      <CardHeader className="pb-2 bg-resume-light/50 group-hover:bg-resume-light transition-colors">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-resume-primary flex items-center gap-2">
            <Code size={18} className="text-resume-accent" />
            {title}
          </CardTitle>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <Calendar size={14} className="text-resume-secondary" />
            {year}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-white text-resume-dark border-resume-secondary/30 group-hover:border-resume-secondary transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pt-3">
        <ul className="list-none pl-1 text-gray-700 space-y-1">
          {description.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check size={16} className="text-resume-secondary mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="mb-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
      <SectionTitle title="Projects" />
      
      <div className="grid grid-cols-1 gap-4">
        <ProjectCard 
          title="Blockchain-Based File Storage System"
          year="2023"
          technologies={["IPFS", "Solidity", "Node.js", "AWS", "Metamask", "JavaScript"]}
          description={[
            "Developed a decentralized storage system using IPFS technology",
            "Implemented smart contracts with time-restricted access control",
            "Built a user-friendly frontend with Node.js and Web3.js"
          ]}
        />
        
        <ProjectCard 
          title="Task Master"
          year="2024"
          technologies={["ReactJS", "Express", "MySQL", "SMTP"]}
          description={[
            "Created a real-time task management application",
            "Implemented notification system via email and in-app alerts",
            "Developed reminders and deadline tracking functionality"
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
