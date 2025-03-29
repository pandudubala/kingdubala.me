
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Github, ExternalLink, Fingerprint, Smartphone, Bot, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  tags: string[];
  image?: string;
  icon?: React.ReactNode;
  links?: {
    github?: string;
    demo?: string;
  };
  className?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  icon,
  links,
  className,
  delay = 0
}: ProjectCardProps) => {
  return (
    <AnimatedSection delay={delay} className={cn("", className)}>
      <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 group">
        <div className="relative bg-secondary/50 aspect-video overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-accent/5">
              {icon || <Bot className="h-16 w-16 text-accent/50" />}
            </div>
          )}
        </div>
        
        <div className="flex-1 p-6 md:p-8 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-medium mb-3">{title}</h3>
            <div className="text-muted-foreground mb-4">{description}</div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {links && (
            <div className="flex gap-4 mt-auto pt-4 border-t border-border">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={`View ${title} on GitHub`}
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={`View ${title} demo`}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section bg-secondary/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Projects</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Tank Bot MVP Product"
            description={
              <ul className="list-disc pl-5 space-y-1">
                <li>Semi-automated water tank cleaner that improves efficiency and safety</li>
                <li>High-pressure jet rotates around the tank for thorough cleaning</li>
                <li>Secure backend logic for command handling and communication</li>
              </ul>
            }
            tags={["Robotics", "Automation", "ESP32", "Sensors"]}
            icon={<Bot className="h-16 w-16 text-accent/50" />}
            delay={200}
          />
          
          <ProjectCard
            title="Stepper Motor Control via Webserver"
            description={
              <ul className="list-disc pl-5 space-y-1">
                <li>Academic project for remote control of robotic applications</li>
                <li>Applied expertise in robotics and web development</li>
                <li>Created innovative solution for controlling stepper motors via web interface</li>
              </ul>
            }
            tags={["IoT", "Web Development", "Robotics", "Arduino"]}
            icon={<Monitor className="h-16 w-16 text-accent/50" />}
            delay={400}
          />
          
          <ProjectCard
            title="Fingerprint Numb Lock Security System"
            description={
              <ul className="list-disc pl-5 space-y-1">
                <li>Utilizes fingerprint authentication for secure access control</li>
                <li>Integrated numerical keypad for inputting access codes</li>
                <li>LCD display provides visual feedback and instructions to users</li>
              </ul>
            }
            tags={["Security", "Embedded Systems", "Biometrics"]}
            icon={<Fingerprint className="h-16 w-16 text-accent/50" />}
            delay={600}
          />
          
          <ProjectCard
            title="Smart Baby Cradle"
            description={
              <ul className="list-disc pl-5 space-y-1">
                <li>Project aimed at enhancing infant care with technology</li>
                <li>Features automated rocking motion for soothing sleep</li>
                <li>Developed an app to track device activity and performance</li>
              </ul>
            }
            tags={["IoT", "Mobile App", "MIT App Inventor"]}
            icon={<Smartphone className="h-16 w-16 text-accent/50" />}
            delay={800}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
