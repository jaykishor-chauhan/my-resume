
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
            <a href="mailto:jaykishorchauhan2018.com" className="hover:text-resume-primary transition-colors">
              jaykishorchauhan2018@gmail.com
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
        <a href="https://maps.google.com/?q=Bangalore,India" 
           className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-resume-light to-blue-50 border border-resume-secondary/10 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-resume-dark" 
           target="_blank" 
           rel="noopener noreferrer">
          <MapPin size={16} className="text-resume-secondary" />
          <span>Bangalore, India</span>
        </a>
        
        
        <a href="tel:+918073127085" 
           className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-resume-light to-blue-50 border border-resume-secondary/10 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-resume-dark" 
           target="_blank" 
           rel="noopener noreferrer">
          <Phone size={16} className="text-resume-secondary" />
          <span>+91 8073127085</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
