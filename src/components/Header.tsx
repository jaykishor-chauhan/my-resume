
import React from 'react';
import { MapPin, Phone, Globe, Linkedin, Github, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="animate-fade-in mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-4xl font-bold text-resume-primary mb-2 relative inline-block">
            Jaykishor Prasad Chauhan
            <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-resume-secondary"></div>
          </h1>
          <p className="text-lg text-resume-dark">Computer Science & Engineering Student</p>
        </div>
        <div className="mt-2 md:mt-0">
          <div className="flex items-center gap-1 text-resume-accent">
            <Mail size={16} className="text-resume-secondary" />
            <a href="mailto:jaykishor@example.com" className="hover:text-resume-primary transition-colors">
              jaykishor@example.com
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 text-sm mt-4 bg-resume-light/70 p-3 rounded-lg border border-resume-secondary/10">
        <div className="flex items-center gap-1">
          <MapPin size={16} className="text-resume-secondary" />
          <span>Bangalore, India</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Phone size={16} className="text-resume-secondary" />
          <a href="tel:+918073127085" className="hover:text-resume-primary transition-colors">
            +91 8073127085
          </a>
        </div>
        
        <div className="flex items-center gap-1">
          <Globe size={16} className="text-resume-secondary" />
          <a 
            href="https://cjaykishor.com.np" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-resume-primary transition-colors"
          >
            cjaykishor.com.np
          </a>
        </div>
        
        <div className="flex items-center gap-1">
          <Linkedin size={16} className="text-resume-secondary" />
          <a 
            href="https://linkedin.com/in/jaykishor-chauhan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-resume-primary transition-colors"
          >
            linkedin.com/in/jaykishor-chauhan
          </a>
        </div>
        
        <div className="flex items-center gap-1">
          <Github size={16} className="text-resume-secondary" />
          <a 
            href="https://github.com/jaykishor-chauhan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-resume-primary transition-colors"
          >
            github.com/jaykishor-chauhan
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
