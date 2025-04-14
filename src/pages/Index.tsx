import Resume from '@/components/Resume';
import { Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-resume-light py-8 px-4 relative print:bg-white print:py-0">
      <div className="fixed top-4 right-4 flex gap-2 print:hidden z-10">
        <Button 
          variant="outline" 
          className="bg-white shadow-md hover:bg-resume-light flex items-center gap-2"
          onClick={handlePrint}
        >
          <Printer size={16} />
          Print
        </Button>
        <Button 
          variant="outline" 
          className="bg-white shadow-md hover:bg-resume-light flex items-center gap-2"
          onClick={() => window.open('/my-resume.pdf', '_blank')}
        >
          <Download size={16} />
          Download PDF
        </Button>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Resume />
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500 print:hidden">
        <p>© 2025 Jaykishor Prasad Chauhan. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Index;
