
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Pandu Dubala. All rights reserved.
            </p>
          </div>
          
          <a 
            href="#home"
            className="bg-accent/10 hover:bg-accent/20 text-accent p-2 rounded-full transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </a>
          
          <div className="text-sm text-muted-foreground">
            <p>OSS Engineer & Robotics Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
