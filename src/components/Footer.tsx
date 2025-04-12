
import React from 'react';
import { Globe, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 pt-4 text-center animate-fade-in">
      <div className="flex justify-center space-x-6">
        <a 
          href="https://cjaykishor.com.np" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-resume-dark hover:text-resume-primary transition-colors bg-resume-light/70 px-3 py-1 rounded-full hover:bg-resume-light"
          aria-label="Website"
        >
          <Globe size={18} />
          <span>Website</span>
        </a>
        
        <a 
          href="https://linkedin.com/in/jaykishor-chauhan" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-resume-dark hover:text-resume-primary transition-colors bg-resume-light/70 px-3 py-1 rounded-full hover:bg-resume-light"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>
        
        <a 
          href="https://github.com/jaykishor-chauhan" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-resume-dark hover:text-resume-primary transition-colors bg-resume-light/70 px-3 py-1 rounded-full hover:bg-resume-light"
          aria-label="GitHub"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
      </div>
      
      <p className="mt-4 text-sm text-gray-500">
        Last Updated: April 2025 • Designed with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
