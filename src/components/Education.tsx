
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { GraduationCap, CalendarClock, MapPin, Award, Cpu, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  delay?: number;
}

const EducationItem = ({ degree, institution, location, period, grade, delay = 0 }: EducationItemProps) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="glass-card rounded-xl p-6 md:p-8 h-full relative overflow-hidden group">
        {/* Electronic circuit decoration in background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,30 L30,30 L30,10 M70,10 L70,30 L90,30 M90,70 L70,70 L70,90 M30,90 L30,70 L10,70" 
                  fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M50,20 L50,40 M50,60 L50,80 M20,50 L40,50 M60,50 L80,50" 
                  fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
        
        <div className="absolute top-0 left-0 w-2 h-full bg-accent/70"></div>
        <div className="ml-2">
          <h3 className="text-xl font-medium mb-1">{degree}</h3>
          <p className="text-lg text-accent mb-3">{institution}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarClock className="h-4 w-4" />
              <span>{period}</span>
            </div>
          </div>
          
          {grade && (
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-4 w-4 text-accent" />
              <span>{grade}</span>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Education = () => {
  return (
    <section id="education" className="section bg-secondary/50 relative overflow-hidden">
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-[10%] right-[5%] w-20 h-20">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M50,10 L50,90 M10,50 L90,50" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className="absolute bottom-[15%] left-[10%] w-32 h-32">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M30,10 L30,90 M50,10 L50,90 M70,10 L70,90" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M10,30 L90,30 M10,50 L90,50 M10,70 L90,70" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
      
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title flex items-center">
            <Cpu className="h-6 w-6 mr-2 text-accent" />
            Education
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EducationItem
            degree="BTech in Electrical & Electronics Engineering"
            institution="Joginpally Baskar Rao Engineering College"
            location="Hyderabad"
            period="2020-2023"
            grade="CGPA: 6.95"
            delay={200}
          />
          
          <EducationItem
            degree="Diploma in Electrical Engineering"
            institution="Govt Polytechnic College"
            location="Cheryal, Siddipet"
            period="2017-2020"
            grade="73.89%"
            delay={400}
          />
          
          <EducationItem
            degree="SSC"
            institution="Buds & Flowers E/M High School"
            location="Sircilla"
            period="2016-2017"
            grade="GPA: 8.7"
            delay={600}
          />
        </div>
        
        <AnimatedSection delay={800} className="mt-12">
          <div className="glass-card rounded-xl p-6 md:p-8 relative">
            {/* Circuit board pattern background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="30" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="70" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="30" cy="70" r="5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="70" cy="70" r="5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M30,30 L70,30 M70,30 L70,70 M70,70 L30,70 M30,70 L30,30" stroke="currentColor" strokeWidth="0.5"/>
              </svg>
            </div>
            
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2 relative">
              <Zap className="h-5 w-5 text-accent" />
              Achievements
            </h3>
            
            <ul className="space-y-4 relative">
              <li className="flex items-start gap-3 group">
                <div className="bg-accent/10 p-1.5 rounded-full mt-0.5 group-hover:bg-accent/20 transition-colors">
                  <GraduationCap className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="relative">
                    Student Co-ordinator SAC
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </span>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="bg-accent/10 p-1.5 rounded-full mt-0.5 group-hover:bg-accent/20 transition-colors">
                  <GraduationCap className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="relative">
                    Awarded as Lance Corporal (LCPL) in National Cadet Corps (NCC) with C certificate
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </span>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="bg-accent/10 p-1.5 rounded-full mt-0.5 group-hover:bg-accent/20 transition-colors">
                  <GraduationCap className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="relative">
                    Certificate of appreciation for MakersMela at Somaiya University, Mumbai
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Education;
