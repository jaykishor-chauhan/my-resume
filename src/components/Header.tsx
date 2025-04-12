
import React from 'react';
import { MapPin, Phone, Globe, Linkedin, Github } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="animate-fade-in mb-6">
      <h1 className="text-4xl font-bold text-resume-primary mb-2">Jaykishor Prasad Chauhan</h1>
      
      <div className="flex flex-wrap gap-4 text-sm mt-3">
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
