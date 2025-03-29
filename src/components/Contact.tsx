
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your message! I will get back to you soon.',
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Get In Touch</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Let's Talk</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out if you have any questions or would like to discuss potential collaboration. I'm always open to new opportunities and challenges.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a 
                      href="mailto:pandudubala9666@gmail.com" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      pandudubala9666@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a 
                      href="tel:+919666709846" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 9666709846
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-lg font-medium mb-3">Connect with me</h4>
                <div className="flex gap-5">
                  <a 
                    href="https://github.com/pandudubala" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent/10 p-3 rounded-lg text-accent hover:bg-accent/20 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/pandudubala96663" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent/10 p-3 rounded-lg text-accent hover:bg-accent/20 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-medium mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Your message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-[1.01]",
                    isSubmitting && "opacity-70 pointer-events-none"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {submitMessage && (
                  <div
                    className={cn(
                      "p-4 rounded-lg animate-fade-in",
                      submitMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    )}
                  >
                    {submitMessage.text}
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
