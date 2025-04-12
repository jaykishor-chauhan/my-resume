
import React from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  title: string;
  year: string;
  technologies: string[];
  description: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, year, technologies, description }) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-resume-primary">{title}</CardTitle>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-resume-light text-resume-dark border-resume-secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
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
    </section>
  );
};

export default Projects;
