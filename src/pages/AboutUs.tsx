import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, Award, GraduationCap } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  email: string;
  linkedin?: string;
  github?: string;
  achievements?: string[];
}

const AboutUs: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 'member1',
      name: 'Shayan Williams',
      role: 'Team Lead & AI Specialist',
      bio: 'Specializing in machine learning and natural language processing, Shayan leads the development of the voice analysis algorithms and AI components of the MindSculptor platform.',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      email: 'shayan.williams@research.sliit.lk',
      linkedin: '#',
      github: '#',
      achievements: [
        'Best Undergraduate Research Award, Department of Computer Science, 2023',
        'Publication in International Journal of Human-Computer Interaction',
        'Winner, National Hackathon for Mental Health Technologies, 2023'
      ]
    },
    {
      id: 'member2',
      name: 'Anika Perera',
      role: 'Full-stack Developer & UX Designer',
      bio: 'Anika combines expertise in full-stack development with user experience design to create intuitive and accessible interfaces for the MindSculptor platform.',
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      email: 'anika.perera@research.sliit.lk',
      linkedin: '#',
      github: '#',
      achievements: [
        'UX Design Excellence Award, Sri Lanka Design Festival, 2023',
        'Selected for Google Developer Expert Program (Web Technologies)',
        'Lead developer for award-winning healthcare application, 2022'
      ]
    },
    {
      id: 'member3',
      name: 'Ravi Mendis',
      role: 'Psychology & Research Specialist',
      bio: 'With a background in clinical psychology, Ravi ensures that MindSculptor\'s features align with evidence-based practices for OCD treatment and assessment.',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      email: 'ravi.mendis@research.sliit.lk',
      linkedin: '#',
      github: '#',
      achievements: [
        'Research Fellowship, National Institute of Mental Health, 2023',
        'Co-author of 3 publications on digital interventions for anxiety disorders',
        'Clinical research experience at leading mental health institutions'
      ]
    },
    {
      id: 'member4',
      name: 'Danusha Fernando',
      role: 'Backend & Data Engineering Lead',
      bio: 'Danusha specializes in data engineering and backend architecture, ensuring that MindSculptor can efficiently process and analyze large amounts of user data securely.',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      email: 'danusha.fernando@research.sliit.lk',
      linkedin: '#',
      github: '#',
      achievements: [
        'Certificate of Excellence in Cloud Computing, AWS Academy, 2023',
        'Developed award-winning data pipeline for healthcare analytics',
        'Speaker at International Conference on Health Informatics, 2022'
      ]
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Our Team</h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Meet the researchers behind the MindSculptor project, a multidisciplinary team combining expertise in AI, psychology, and software development.
            </p>
          </div>
        </div>
      </div>

      {/* Team Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-heading font-medium mb-4 text-neutral-900">Our Research Team</h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Our team brings together expertise from multiple disciplines to address the complex challenge of developing digital interventions for obsessive-compulsive disorder. With backgrounds spanning artificial intelligence, psychology, user experience design, and software engineering, we combine diverse perspectives to create innovative solutions.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Under the guidance of faculty advisors from the Department of Computer Science and Engineering at the Sri Lanka Institute of Information Technology, we are committed to conducting rigorous research that makes a meaningful contribution to mental health technology.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hoverable className="h-full flex flex-col overflow-hidden">
                  <div className="aspect-w-3 aspect-h-2 w-full">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-64 object-cover object-center"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-heading font-medium mb-1 text-neutral-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                    <p className="text-neutral-600 mb-6">{member.bio}</p>
                    <div className="flex items-center space-x-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-neutral-500 hover:text-primary-600 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="text-neutral-500 hover:text-primary-600 transition-colors"
                          aria-label={`LinkedIn profile of ${member.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          className="text-neutral-500 hover:text-primary-600 transition-colors"
                          aria-label={`GitHub profile of ${member.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Team Achievements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-8 text-center">Team Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={`${member.id}-achievements`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-medium text-neutral-900">{member.name}</h3>
                          <p className="text-neutral-500 text-sm">{member.role}</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {member.achievements?.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-success-100 text-success-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <GraduationCap className="h-3 w-3" />
                            </div>
                            <p className="text-neutral-600 text-sm">{achievement}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advisors */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-heading font-medium mb-6 text-neutral-900">Research Advisors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Dr. Ayesha Silva" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-medium mb-1 text-neutral-900">Dr. Ayesha Silva</h3>
                      <p className="text-primary-600 text-sm mb-2">Senior Lecturer, Department of Computer Science</p>
                      <p className="text-neutral-600 text-sm mb-3">
                        Specializing in artificial intelligence and healthcare informatics, with extensive experience in developing digital health interventions.
                      </p>
                      <a 
                        href="#" 
                        className="text-primary-600 hover:text-primary-800 transition-colors text-sm flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" /> Faculty Profile
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Prof. Rajiv Karunathilake" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-medium mb-1 text-neutral-900">Prof. Rajiv Karunathilake</h3>
                      <p className="text-primary-600 text-sm mb-2">Professor, Department of Psychology</p>
                      <p className="text-neutral-600 text-sm mb-3">
                        Clinical psychologist with research focus on technology-assisted interventions for anxiety disorders and OCD.
                      </p>
                      <a 
                        href="#" 
                        className="text-primary-600 hover:text-primary-800 transition-colors text-sm flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" /> Faculty Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default AboutUs;