
import React from 'react';
import Header from './Header';
import Objective from './Objective';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import Achievements from './Achievements';
import Footer from './Footer';
import { Separator } from './ui/separator';

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg border border-resume-secondary/20 print:shadow-none print:border-none">
      <Header />
      <Separator className="my-5 bg-resume-secondary/30" />
      <Objective />
      <Education />
      <Projects />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Skills />
        </div>
        <div>
          <Certifications />
          <Achievements />
        </div>
      </div>
      
      <Separator className="my-5 bg-resume-secondary/30" />
      <Footer />
    </div>
  );
};

export default Resume;
