import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Layers, Monitor, UserCog } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary-500 blur-3xl"></div>
          <div className="absolute top-[60%] -right-[5%] w-[30%] h-[30%] rounded-full bg-accent-500 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                MindSculptor: Advanced OCD Therapy Platform
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                A comprehensive digital solution designed to support the diagnosis and treatment of obsessive-compulsive disorder using biometric data, artificial intelligence, and natural language processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  to="/domain" 
                  variant="primary" 
                  size="lg"
                  className="bg-white text-primary-800 hover:bg-neutral-100"
                >
                  Explore Research
                </Button>
                <Button 
                  to="/about-us" 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Meet The Team
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Project Overview */}
      <Section
        title="Project Overview"
        subtitle="MindSculptor is an innovative digital therapy platform that combines cutting-edge technology with evidence-based therapeutic approaches."
      >
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-neutral-600 leading-relaxed">
            Our research focuses on developing a comprehensive digital solution that supports both diagnosis and treatment of OCD, leveraging the power of AI, machine learning, and biometric data analysis to provide personalized therapeutic interventions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "OCD Diagnosis",
              description: "Identify presence, severity, and sub-types of OCD through enhanced screening tools and voice analysis",
              icon: <Brain className="h-12 w-12 text-primary-600" strokeWidth={1.5} />,
            },
            {
              title: "VERP Therapy",
              description: "Enhanced Exposure and Response Prevention Therapy with simulated scenarios and biometric data tracking",
              icon: <Layers className="h-12 w-12 text-primary-600" strokeWidth={1.5} />,
            },
            {
              title: "Interactive Voice Assistant",
              description: "AI-powered voice assistant that monitors emotional states and provides personalized cognitive-behavioral strategies",
              icon: <UserCog className="h-12 w-12 text-primary-600" strokeWidth={1.5} />,
            },
            {
              title: "Video Conferencing ERP",
              description: "AI-enhanced video conferencing platform for real-time doctor-patient interaction with emotion analysis",
              icon: <Monitor className="h-12 w-12 text-primary-600" strokeWidth={1.5} />,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card hoverable className="h-full flex flex-col">
                <div className="p-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-heading font-medium mb-3 text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 flex-grow">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Project Significance */}
      <Section className="bg-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-neutral-900 mb-6">
              Advancing Mental Health Treatment Through Technology
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              OCD affects millions of people worldwide, causing significant distress and functional impairment. Traditional treatment approaches often face limitations in accessibility, personalization, and real-time monitoring.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              MindSculptor addresses these challenges by leveraging cutting-edge technology to provide a comprehensive, accessible, and personalized therapeutic experience for individuals with OCD.
            </p>
            <Button to="/domain" className="flex items-center gap-2">
              Learn About Our Methodology <ArrowRight size={16} />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Mental health technology research" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* Research Highlights */}
      <Section
        title="Research Highlights"
        subtitle="Key innovations and findings from our ongoing research project"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Multi-modal Data Integration",
              description: "Combining voice analysis, biometric data, and self-reported symptoms for a comprehensive assessment approach",
              image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              title: "Real-time Anxiety Monitoring",
              description: "Advanced algorithms that track and visualize anxiety levels during exposure therapy sessions",
              image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              title: "Personalized Treatment Pathways",
              description: "AI-driven personalization of therapeutic interventions based on individual OCD subtypes and symptom patterns",
              image: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card hoverable className="h-full flex flex-col">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-medium mb-3 text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
            Discover Our Research Journey
          </h2>
          <p className="text-lg text-secondary-100 mb-8 leading-relaxed">
            Explore our comprehensive documentation, milestone achievements, and technological innovations in OCD treatment research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/documents" 
              variant="primary" 
              size="lg"
              className="bg-white text-secondary-800 hover:bg-neutral-100"
            >
              View Research Documents
            </Button>
            <Button 
              to="/contact-us" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Research Team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;