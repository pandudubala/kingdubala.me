import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CalendarClock, Briefcase, Cpu, Settings, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: React.ReactNode;
  delay?: number;
}

const ExperienceItem = ({ title, company, period, location, description, delay = 0 }: ExperienceItemProps) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
        <div className="ml-2">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
            <div>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-lg text-accent">{company}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarClock className="h-4 w-4" />
              <span>{period}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>{location}</span>
            </span>
          </div>
          
          <div className="space-y-2">{description}</div>
        </div>
      </div>
    </AnimatedSection>
  );
};

interface ExperienceProps {
  kspElectronics?: boolean;
}

const Experience = ({ kspElectronics }: ExperienceProps) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Experience</h2>
        </AnimatedSection>
        
        <div className="space-y-8">
          <ExperienceItem
            title="OSS Engineer"
            company="WIPRO PARI Robotics Pvt Ltd"
            period="Feb 2024 - Present"
            location="Chennai, Tamil Nadu, India"
            delay={200}
            description={
              <>
                <p>Currently working on automation and robotics solutions, focusing on:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Building and modifying machines for new projects as per DFM and SOPs (Retrofit levels P0 P1 P2).</li>
                  <li>Documenting machines (Electrical And Mechanical Assembly) in accordance with SOP and Required Standard.</li>
                  <li>Creating and verifying Bill of Materials (BOM) to ensure all required parts meet specifications.</li>
                  <li>Coordinating with customers during New Project Introduction, handling FAQs and RC/CR activities.</li>
                  <li>Troubleshooting system failures and providing technical support during machine breakdowns.</li>
                  <li>Leading Line Bring-Up (LBU) processes and supporting mass production.</li>
                  <li>Calibrating various industrial equipment for optimal operation.</li>
                  <li>Implementing preventive maintenance programs to reduce machine downtime.</li>
                </ul>
              </>
            }
          />
          
          {kspElectronics && (
            <ExperienceItem
              title="IoT Developer & Mentor"
              company="KSP Electronics"
              period="2021 - Present"
              location="Remote"
              delay={300}
              description={
                <>
                  <p>Part of the KSP Electronics team, focusing on IoT solutions and student mentorship:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Developing IoT projects and providing comprehensive documentation for implementations.</li>
                    <li>Mentoring students on hardware selection, circuit design, and firmware development.</li>
                    <li>Creating educational content related to electronics and IoT technologies.</li>
                    <li>Assisting with troubleshooting and optimization of IoT projects.</li>
                    <li>Building robust solutions using various microcontrollers and sensors for real-world applications.</li>
                  </ul>
                </>
              }
            />
          )}
          
          <ExperienceItem
            title="IoT Freelancer"
            company="Independent"
            period="2021 - Present"
            location="Remote"
            delay={kspElectronics ? 400 : 300}
            description={
              <>
                <p>Working as a freelance IoT projects developer and technical consultant:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Developing custom IoT and embedded systems projects for college students and educational institutions.</li>
                  <li>Providing comprehensive technical documentation for IoT implementations and prototypes.</li>
                  <li>Offering guidance and mentorship on hardware selection, circuit design, and firmware development.</li>
                  <li>Assisting with troubleshooting and optimization of existing IoT projects.</li>
                  <li>Creating detailed project reports, presentations, and user manuals for completed solutions.</li>
                </ul>
              </>
            }
          />
          
          <ExperienceItem
            title="Product Developer"
            company="Instinct Technologies - Tank BOT"
            period="Dec 2023 - Feb 2024"
            location="Hyderabad, India"
            delay={kspElectronics ? 500 : 400}
            description={
              <>
                <p>Worked on developing an innovative Tank BOT product:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Designed and developed the robot's mechanical structure.</li>
                  <li>Implemented control mechanisms for precise operation.</li>
                  <li>Worked on Belt mechanism and Stepper motor integration with drivers and ESP32.</li>
                  <li>Participated in MakersMela at Somaiya Vidya Vihar University, showcasing the innovative product.</li>
                </ul>
              </>
            }
          />
          
          <ExperienceItem
            title="Electrical Design Intern"
            company="BAISCO PVT LTD"
            period="May 2023 - July 2023"
            location="Remote"
            delay={kspElectronics ? 600 : 600}
            description={
              <>
                <p>Contributed to electrical design and troubleshooting:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Researched effective vehicle charging systems and integration methods.</li>
                  <li>Utilized IoT and PLC protocols to resolve battery damage and short circuit issues.</li>
                  <li>Designed a portable power outlet board for efficient energy management.</li>
                </ul>
              </>
            }
          />
          
          <ExperienceItem
            title="Industrial Training"
            company="132/33 KV Substation"
            period="Aug 2019 - Jan 2020"
            location="Turkapally, Hyderabad, India"
            delay={kspElectronics ? 700 : 800}
            description={
              <>
                <p>Gained hands-on experience in substation operations:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Researched SCADA-operated substation systems and their functionalities.</li>
                  <li>Led team assessments of substation feeders' CT &PT components.</li>
                  <li>Documented comprehensive study of 132/33 kV SUBSTATION LGM FET operations.</li>
                </ul>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
