
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Award, Clock, MapPin, Code, Map } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">About Me</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <AnimatedSection delay={200} className="lg:col-span-2">
            <div className="glass-card rounded-xl p-6 md:p-8 h-full">
              <div className="space-y-4">
                <p className="text-lg">
                  I'm a passionate Automation and Robotics Engineer with a strong background in designing, building, and 
                  maintaining industrial automation systems. Currently working at WIPRO PARI Robotics, I've developed 
                  expertise in machine retrofitting, technical support, and implementing preventive maintenance programs.
                </p>
                <p>
                  Beyond my full-time role, I've contributed to innovative projects like Tank BOT, a semi-automated water 
                  tank cleaner, and led a variety of IoT and industrial automation initiatives. I'm particularly interested 
                  in finding creative solutions to complex engineering challenges.
                </p>
                <p>
                  My approach combines technical knowledge with practical problem-solving skills, allowing me to efficiently 
                  troubleshoot system failures and identify optimization opportunities.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400} className="space-y-6">
            <div className="glass-card rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <span className="bg-accent/10 rounded-lg p-3">
                  <MapPin className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <span className="bg-accent/10 rounded-lg p-3">
                  <Award className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <h3 className="text-lg font-medium mb-1">Experience</h3>
                  <p className="text-muted-foreground">3+ Years</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <span className="bg-accent/10 rounded-lg p-3">
                  <Code className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <h3 className="text-lg font-medium mb-1">Expertise</h3>
                  <p className="text-muted-foreground">Robotics, Automation, IoT</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
