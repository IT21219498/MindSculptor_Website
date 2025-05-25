import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Award,
  GraduationCap,
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  company: string;
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
      name: 'Pasindu Jayasinghe',
      role: 'Associate Software Engineer',
      company: 'Sampath IT Solutions',
      bio: 'Specializing in machine learning and natural language processing, Pasindu leads the development of the voice analysis algorithms and AI components of the MindSculptor platform.',
      photo:
        'https://media.licdn.com/dms/image/v2/D5603AQFeZGbSC96spg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708585968052?e=2147483647&v=beta&t=1ct-6PIFH5FlWC1eCsQN-ZjRI2rdF6_AMs-Xoz9eLJ0',
      email: 'pasindujayasinghe@gmail.com',
      linkedin: '#',
      github: '#',
      achievements: [
        'Published research on beginner-friendly Java learning environments, presented at ICICT 2024 in London.',
        'Demonstrated leadership in collaborative development, contributing to successful project presentations and repository management',
      ],
    },
    {
      id: 'member2',
      name: 'Ashen Illesinghe',
      role: 'Associate Site Reliability Engineer',
      company: 'IFS Sri Lanka',
      bio: 'Ashen combines expertise in full-stack development with user experience design to create intuitive and accessible interfaces for the MindSculptor platform.',
      photo:
        'https://media.licdn.com/dms/image/v2/D4E03AQE0zlK6Hv3zEA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728485759917?e=2147483647&v=beta&t=GJ9QLvn1LcNj66FHOdtVu0W5Jdz_OEnEOPFVxDt7pr8',
      email: 'ashen.tharana@gmail.com',
      linkedin: '#',
      github: '#',
      achievements: [
        'Possesses expertise in cloud computing technologies, including Docker, Kubernetes, and containerized deployment strategies.',
        'Published research on beginner-friendly Java learning environments, presented at ICICT 2024 in London.',
      ],
    },
    {
      id: 'member3',
      name: 'Hasaranga Mallawaarachchi',
      role: 'Software Engineer',
      company: 'Adveccio',
      bio: "With a background in clinical psychology, Hasaranga ensures that MindSculptor's features align with evidence-based practices for OCD treatment and assessment.",
      photo:
        'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/488046051_2833863883460853_5831324483929417967_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i07YQNPlJqsQ7kNvwFcOSnb&_nc_oc=AdnmfsWUo9OImN82wi_IjqNCC8_y8O3vzx99rA3Scnp2pWXmTLW0gVVI8RQiUJiKr-Y&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=wVbjUgyBvqW69xnUirGcUA&oh=00_AfLlB9xjHbkMrmVQUiHC6ccboQzQ-92AzKf_PL24pHhOtQ&oe=68392077',
      email: 'dh.mallawaarachchi@gmail.com',
      linkedin: '#',
      github: '#',
      achievements: [
        'Expert in full-stack development, with hands-on experience in React, Flask, MongoDB, and containerized deployments',
        'Published research on beginner-friendly Java learning environments, presented at ICICT 2024 in London.',
      ],
    },
    {
      id: 'member4',
      name: 'Chamikara Vithanage',
      role: 'Software Engineer',
      company: 'Adveccio',
      bio: 'Chamikara specializes in data engineering and backend architecture, ensuring that MindSculptor can efficiently process and analyze large amounts of user data securely.',
      photo:
        'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/296846816_3313519858966298_2957682396124164736_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sYe9f_Sj-EwQ7kNvwFhUAPu&_nc_oc=AdmqvMxnEqKb02UFFZ9pN6bvb5hWm1aPmvaNdVCupE_4hpiPQO-M5VF8-lui11gMgHI&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=BH0cbzOnsBDifyJ16xYRUQ&oh=00_AfK0pCPSoCjPR2CMG3wGziVEPnDZxSZiwayRe9_Hz4hyrw&oe=6839163D',
      email: 'csvithanage14@gmail.com',
      linkedin: '#',
      github: '#',
      achievements: [
        'Published research on beginner-friendly Java learning environments, presented at ICICT 2024 in London.',
        'Led the system architecture and research design of multiple mental health platforms using computer vision and machine learning',
      ],
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Our Team
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Meet the researchers behind the MindSculptor project, a
              multidisciplinary team combining expertise in AI, psychology, and
              software development.
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
                <h2 className="text-2xl font-heading font-medium mb-4 text-neutral-900">
                  Our Research Team
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Our team brings together expertise from multiple disciplines
                  to address the complex challenge of developing digital
                  interventions for obsessive-compulsive disorder. With
                  backgrounds spanning artificial intelligence, psychology, user
                  experience design, and software engineering, we combine
                  diverse perspectives to create innovative solutions.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Under the guidance of faculty advisors from the Department of
                  Computer Science and Engineering at the Sri Lanka Institute of
                  Information Technology, we are committed to conducting
                  rigorous research that makes a meaningful contribution to
                  mental health technology.
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
                <Card
                  hoverable
                  className="h-full flex flex-col overflow-hidden"
                >
                  <div className="aspect-w-3 aspect-h-2 w-full">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-64 object-cover object-center"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-heading font-medium mb-1 text-neutral-900">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {member.role}
                    </p>
                    <p className="text-black-600 font-medium mb-3">
                      {member.company}
                    </p>
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
            <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-8 text-center">
              Team Achievements
            </h2>
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
                          <h3 className="text-lg font-heading font-medium text-neutral-900">
                            {member.name}
                          </h3>
                          <p className="text-neutral-500 text-sm">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {member.achievements?.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-success-100 text-success-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <GraduationCap className="h-3 w-3" />
                            </div>
                            <p className="text-neutral-600 text-sm">
                              {achievement}
                            </p>
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
                <h2 className="text-2xl font-heading font-medium mb-6 text-neutral-900">
                  Research Advisors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="https://i1.rgstatic.net/ii/profile.image/11431281227502527-1709611386728_Q512/Dilshan-De-Silva-4.jpg"
                        alt="Prof. Dilshan De Silva"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-medium mb-1 text-neutral-900">
                        Prof. Dilshan De Silva
                      </h3>
                      <p className="text-primary-600 text-sm mb-2">
                        Associate Professor, Department of Computer Science and
                        Software Engineering
                      </p>
                      <p className="text-neutral-600 text-sm mb-3">
                        Specializing in artificial intelligence and healthcare
                        informatics, with extensive experience in developing
                        digital health interventions.
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
                        src="https://static.sliit.lk/profile/samadhir-1735439152.jpg"
                        alt="Mr. Samadhi Rathnayake"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-medium mb-1 text-neutral-900">
                        Mr. Samadhi Rathnayake
                      </h3>
                      <p className="text-primary-600 text-sm mb-2">
                        Lecturer, Department of Data Science
                      </p>
                      <p className="text-neutral-600 text-sm mb-3">
                        Serving as a Lecturer in Data Science, with primary
                        research interests in Artificial Intelligence and
                        Machine Learning.
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
                        src="https://medicine.kln.ac.lk/images/People/Academic-Staff/DrRoshan.jpg"
                        alt="Dr. Roshan Fernando"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-medium mb-1 text-neutral-900">
                        Dr. Roshan Fernando
                      </h3>
                      <p className="text-primary-600 text-sm mb-2">
                        Senior Lecturer, Department of Psychiatry
                      </p>
                      <p className="text-neutral-600 text-sm mb-3">
                        Clinical Psychiatrist with research focus on
                        technology-assisted interventions for anxiety disorders
                        and OCD.
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUcEHPR9-2gxWFCT1yiEDi5t5xLRw99NzoZU6HyI8C5dwD-srwpQHs2DRSxTdkkou7x8&usqp=CAU"
                        alt="Miss. Sandharu Fernando "
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-medium mb-1 text-neutral-900">
                        Miss. Sandharu Fernando
                      </h3>
                      <p className="text-primary-600 text-sm mb-2">
                        Clinical phycologist, Department of Psychiatry
                      </p>
                      <p className="text-neutral-600 text-sm mb-3">
                        Ms Sandharu Fernando is an early Childhood Education
                        expert in strong background of counseling and clinical
                        phycology.
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
