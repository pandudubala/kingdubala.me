
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Code, Cpu, Settings, Database, Layout, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay?: number;
}

const SkillCategory = ({ title, icon, skills, delay = 0 }: SkillCategoryProps) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="glass-card rounded-xl p-6 md:p-8 h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-accent/10 p-3 rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1.5 bg-secondary rounded-lg text-sm transition-all hover:bg-accent/10 hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  delay?: number;
}

const Certification = ({ title, issuer, date, credentialId, url, delay = 0 }: CertificationProps) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <Card className="h-full hover:shadow-md transition-all">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-accent/10 p-2.5 rounded-lg mt-1">
              <Award className="h-5 w-5 text-accent" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-accent">{issuer}</p>
              <p className="text-xs text-muted-foreground">{date}</p>
              {credentialId && <p className="text-xs">Credential ID: {credentialId}</p>}
              {url && (
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline inline-flex items-center gap-1 mt-2"
                >
                  Show credential
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Skills & Certifications</h2>
        </AnimatedSection>
        
        <Tabs defaultValue="skills" className="w-full mt-8">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCategory
                title="Programming"
                icon={<Code className="h-5 w-5 text-accent" />}
                skills={["Matlab", "LaTeX", "C/C++", "HTML", "CSS", "PHP", "MySQL"]}
                delay={200}
              />
              
              <SkillCategory
                title="Robotics"
                icon={<Cpu className="h-5 w-5 text-accent" />}
                skills={["Arduino", "IDE", "AMega 2560", "Sensor Interfacing", "Microcontrollers"]}
                delay={400}
              />
              
              <SkillCategory
                title="Software"
                icon={<Settings className="h-5 w-5 text-accent" />}
                skills={["Wordpress CMS", "PlatformIO", "Blender", "EasyEda", "Proteus", "Linux"]}
                delay={600}
              />
              
              <SkillCategory
                title="Certifications"
                icon={<Database className="h-5 w-5 text-accent" />}
                skills={["MICROCHIP Certification", "C Programming", "SPOKEN TUTORIAL", "HTML Training", "PHP and MySQL"]}
                delay={800}
              />
              
              <SkillCategory
                title="Soft Skills"
                icon={<Layout className="h-5 w-5 text-accent" />}
                skills={["Time Management", "Problem-solving", "Documentation", "Engaging Presentation", "Leadership", "On-site coordination"]}
                delay={1000}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Certification
                title="MATLAB Onramp"
                issuer="MathWorks"
                date="Apr 2023"
                credentialId="3e34cf59-7ed0-4d2b-91d8-deff837dec73"
                url="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=3e34cf59-7ed0-4d2b-91d8-deff837dec73&"
                delay={100}
              />
              
              <Certification
                title="Advanced Excel Course"
                issuer="National Institute of Electronics & Information Technology (NIELIT)"
                date="May 2021"
                delay={200}
              />
              
              <Certification
                title="PHP & MySQL"
                issuer="Spoken Tutorial IIT Bombay"
                date="Aug 2020"
                delay={300}
              />
              
              <Certification
                title="C Certification"
                issuer="Spoken Tutorial IIT Bombay"
                date="Aug 2020"
                delay={400}
              />
              
              <Certification
                title="HTML Training"
                issuer="Spoken Tutorial IIT Bombay"
                date="Jul 2020"
                delay={500}
              />
              
              <Certification
                title="MICROCHIP Certification"
                issuer="MICROCHIP"
                date="Nov 2019"
                delay={600}
              />
              
              <Certification
                title="Computer Hardware & Networking"
                issuer="Digital India"
                date="Jun 2017"
                delay={700}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
