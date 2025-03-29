
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-28 pb-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:pr-8">
            <div className="space-y-2">
              <h4 className="text-accent text-lg font-medium animate-fade-in" style={{ animationDelay: '200ms' }}>
                Hello, I'm
              </h4>
              <h1 className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                Pandu Dubala
              </h1>
              <h2 className="text-2xl font-normal animate-fade-in" style={{ animationDelay: '600ms' }}>
                <span className="text-accent">OSS Engineer</span>, Tech enthusiast
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg max-w-xl animate-fade-in" style={{ animationDelay: '800ms' }}>
              Innovative electronics specialist with expertise in IoT, embedded systems, and robotics. 
              Transforming complex technical challenges into elegant, future-ready solutions that drive real-world impact.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{ animationDelay: '1000ms' }}>
              <a 
                href="#contact" 
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="border border-accent text-accent hover:bg-accent/10 px-6 py-3 rounded-md font-medium transition-all"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center gap-5 pt-4 animate-fade-in" style={{ animationDelay: '1200ms' }}>
              <a 
                href="https://github.com/pandudubala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pandudubala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:pandudubala9666@gmail.com" 
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div 
            className={cn(
              "relative aspect-square max-w-md mx-auto md:ml-auto",
              "animate-fade-in"
            )}
            style={{ animationDelay: '1000ms' }}
          >
            <div className="glass-card rounded-2xl h-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 animate-pulse-slow"></div>
              <div className="w-full h-full flex items-center justify-center p-4">
                <img 
                  src="/pandu-photo.jpg"
                  alt="Pandu Dubala"
                  className="rounded-full w-60 h-60 sm:w-72 sm:h-72 object-cover border-4 border-accent/20 animate-float"
                  onError={(e) => {
                    // Fallback to initials if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const div = document.createElement('div');
                      div.className = 'rounded-full size-60 sm:size-72 bg-muted/30 flex items-center justify-center animate-float';
                      div.innerHTML = '<div class="text-6xl font-display font-bold text-accent/90">PD</div>';
                      parent.appendChild(div);
                    }
                  }}
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 size-20 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-6 -left-6 size-16 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
