import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Target, Lightbulb, Hammer, Laptop } from 'lucide-react';
import Section from '../components/ui/Section';
import Card, { CardBody } from '../components/ui/Card';

const Domain: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Research Domain</h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Exploring the intersection of artificial intelligence, psychology, and digital therapeutics to revolutionize OCD treatment.
            </p>
          </div>
        </div>
      </div>

      {/* Literature Survey */}
      <Section id="literature-survey" title="Literature Survey" className="bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <p className="text-neutral-600 mb-6 leading-relaxed">
            Our comprehensive literature survey examined existing approaches to OCD diagnosis and treatment, digital mental health interventions, and the application of AI in psychological assessment. Key findings include:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Traditional OCD Assessment Limitations",
              content: "Current clinical assessment tools like the Y-BOCS rely heavily on self-reporting and clinician judgment, which can be subjective and time-intensive. Digital adaptations show promise but lack integration with objective biometric measures.",
              icon: <FileText className="h-8 w-8 text-primary-600" />,
            },
            {
              title: "Digital Therapeutics for Mental Health",
              content: "Recent studies show that digital interventions for mental health conditions can be effective, especially when personalized. However, most existing solutions for OCD lack real-time adaptation and multimodal data integration.",
              icon: <Laptop className="h-8 w-8 text-primary-600" />,
            },
            {
              title: "Voice Analysis in Mental Health",
              content: "Research indicates that vocal biomarkers can provide insights into emotional states and mental health conditions. Few studies have specifically applied these techniques to OCD assessment and treatment monitoring.",
              icon: <Search className="h-8 w-8 text-primary-600" />,
            },
            {
              title: "AI in Psychological Assessment",
              content: "Machine learning algorithms have shown promise in predicting treatment outcomes and personalizing interventions for various mental health conditions, though applications specific to OCD remain limited.",
              icon: <Lightbulb className="h-8 w-8 text-primary-600" />,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardBody>
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-primary-50 mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-medium mb-3 text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600">{item.content}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Research Gap */}
      <Section id="research-gap" title="Research Gap" className="bg-neutral-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardBody>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Despite advances in both OCD treatment and digital mental health solutions, several significant gaps remain in the current research landscape:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-neutral-600">
                <li>
                  <strong>Limited Integration of Multimodal Data:</strong> Existing OCD assessment tools rarely combine subjective self-reports with objective biometric data, limiting their comprehensiveness and accuracy.
                </li>
                <li>
                  <strong>Lack of Real-time Adaptation:</strong> Current digital interventions typically follow predefined protocols rather than adapting in real-time to patient responses and physiological states.
                </li>
                <li>
                  <strong>Insufficient Personalization:</strong> Most digital OCD treatments do not adequately address the heterogeneity of OCD subtypes and symptom presentations.
                </li>
                <li>
                  <strong>Underutilization of Voice Analysis:</strong> The potential of vocal biomarkers for assessing emotional states during OCD episodes remains largely unexplored.
                </li>
                <li>
                  <strong>Limited AI-Enhanced Therapeutic Support:</strong> Few systems leverage AI to augment therapist decision-making during live treatment sessions for OCD.
                </li>
              </ul>
            </CardBody>
          </Card>
        </motion.div>
      </Section>

      {/* Research Problem */}
      <Section id="research-problem" title="Research Problem" className="bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardBody>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Our research addresses the following key problem:
              </p>
              <div className="p-6 bg-primary-50 rounded-lg border-l-4 border-primary-500 mb-6">
                <p className="text-lg font-medium text-primary-900">
                  How can artificial intelligence, biometric data analysis, and digital therapeutics be integrated to create a comprehensive platform that enhances the diagnosis, assessment, and treatment of obsessive-compulsive disorder across different subtypes?
                </p>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                This problem encompasses several interconnected challenges, including the development of algorithms for analyzing voice patterns during OCD episodes, creating adaptive exposure therapy protocols based on real-time anxiety measurements, and designing AI systems that can support therapeutic decision-making during live sessions.
              </p>
            </CardBody>
          </Card>
        </motion.div>
      </Section>

      {/* Research Objectives */}
      <Section id="research-objectives" title="Research Objectives" className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-neutral-600 leading-relaxed">
              Our research aims to achieve the following objectives:
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "Develop an enhanced OCD assessment system",
                description: "Create a multimodal assessment system that combines traditional questionnaires with voice analysis to improve the accuracy and comprehensiveness of OCD diagnosis and subtype identification.",
                icon: <Target className="h-8 w-8 text-primary-600" />,
              },
              {
                title: "Design and implement VERP therapy",
                description: "Develop a Virtual Exposure and Response Prevention therapy system that simulates OCD-triggering scenarios and monitors anxiety levels through self-reports and biometric data.",
                icon: <Hammer className="h-8 w-8 text-primary-600" />,
              },
              {
                title: "Create an AI-powered interactive voice assistant",
                description: "Build a voice assistant capable of engaging patients in therapeutic conversations, analyzing emotional states through voice patterns, and providing personalized cognitive-behavioral strategies.",
                icon: <Laptop className="h-8 w-8 text-primary-600" />,
              },
              {
                title: "Develop AI-enhanced video conferencing for ERP therapy",
                description: "Create a platform that facilitates therapist-patient interactions with AI-powered analysis of facial expressions and other biometric data to inform therapeutic decisions.",
                icon: <Lightbulb className="h-8 w-8 text-primary-600" />,
              },
              {
                title: "Evaluate the platform's effectiveness",
                description: "Assess the usability, accuracy, and therapeutic efficacy of the MindSculptor platform through controlled studies with both clinicians and patients.",
                icon: <Search className="h-8 w-8 text-primary-600" />,
              },
            ].map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardBody>
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-primary-50 mr-4 flex-shrink-0">
                        {objective.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-medium mb-2 text-neutral-900">
                          {objective.title}
                        </h3>
                        <p className="text-neutral-600">{objective.description}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Methodology */}
      <Section id="methodology" title="Methodology" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Our research employs a multidisciplinary approach combining techniques from computer science, psychology, and human-computer interaction:
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-heading font-medium mb-4 text-neutral-900">
                Data Collection & Analysis
              </h3>
              <Card>
                <CardBody>
                  <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                    <li>Adaptation of validated OCD assessment instruments (Y-BOCS, OCI-R) into digital format</li>
                    <li>Collection of voice samples during structured interviews about OCD episodes</li>
                    <li>Extraction of vocal features (pitch, intensity, speech rate) using signal processing techniques</li>
                    <li>Development of machine learning models to correlate vocal features with emotional states and OCD severity</li>
                  </ul>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-heading font-medium mb-4 text-neutral-900">
                VERP Therapy Implementation
              </h3>
              <Card>
                <CardBody>
                  <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                    <li>Creation of a database of OCD-triggering scenarios tailored to different subtypes</li>
                    <li>Development of an algorithm for sequencing exposure exercises based on anxiety levels</li>
                    <li>Implementation of real-time anxiety tracking through self-reports and optional biometric sensors</li>
                    <li>Design of visualization tools for anxiety progression throughout treatment</li>
                  </ul>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-medium mb-4 text-neutral-900">
                AI Voice Assistant Development
              </h3>
              <Card>
                <CardBody>
                  <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                    <li>Training of natural language processing models on OCD-specific therapeutic dialogues</li>
                    <li>Development of algorithms to detect emotional states from voice characteristics</li>
                    <li>Creation of a conversational framework based on cognitive-behavioral therapy principles</li>
                    <li>Implementation of adaptive response generation based on detected emotional states</li>
                  </ul>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-heading font-medium mb-4 text-neutral-900">
                Video Conferencing Enhancement
              </h3>
              <Card>
                <CardBody>
                  <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                    <li>Integration of facial expression analysis algorithms for emotion detection</li>
                    <li>Development of a therapist dashboard displaying real-time patient metrics</li>
                    <li>Implementation of AI-based suggestion system for therapeutic interventions</li>
                    <li>Creation of session analytics for tracking treatment progress</li>
                  </ul>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-heading font-medium mb-4 text-neutral-900">
                Evaluation
              </h3>
              <Card>
                <CardBody>
                  <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                    <li>Usability testing with clinicians and patients</li>
                    <li>Validation studies comparing AI-assisted assessments with traditional clinical evaluations</li>
                    <li>Pilot studies measuring therapeutic outcomes in controlled settings</li>
                    <li>Iterative refinement based on feedback and performance metrics</li>
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Technologies Used */}
      <Section id="technologies" title="Technologies Used" className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: "Artificial Intelligence & Machine Learning",
                items: [
                  "TensorFlow/PyTorch for deep learning models",
                  "Natural Language Processing libraries (NLTK, spaCy)",
                  "Emotion recognition algorithms",
                  "Voice pattern analysis tools",
                ],
              },
              {
                category: "Frontend Development",
                items: [
                  "React for user interface development",
                  "Tailwind CSS for styling",
                  "Three.js for 3D visualizations",
                  "WebRTC for video conferencing",
                ],
              },
              {
                category: "Backend & Data Management",
                items: [
                  "Node.js/Express for server development",
                  "MongoDB for data storage",
                  "Redis for caching",
                  "WebSocket for real-time communication",
                ],
              },
              {
                category: "Clinical Tools & Integration",
                items: [
                  "Digitized versions of Y-BOCS and OCI-R",
                  "ERP therapy protocols and frameworks",
                  "Anxiety measurement scales",
                  "HIPAA-compliant data handling",
                ],
              },
            ].map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardBody>
                    <h3 className="text-xl font-heading font-medium mb-4 text-neutral-900 pb-3 border-b border-neutral-200">
                      {tech.category}
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                      {tech.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Domain;