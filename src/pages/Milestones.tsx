import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, FileCheck } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

interface Milestone {
  id: string;
  title: string;
  date: string;
  description: string;
  marks: string;
  status: 'completed' | 'upcoming' | 'in-progress';
  details: string[];
}

const Milestones: React.FC = () => {
  const milestones: Milestone[] = [
    {
      id: 'proposal',
      title: 'Project Proposal',
      date: '2024-09-15',
      description: 'Initial project proposal presentation and documentation.',
      marks: '10/10',
      status: 'completed',
      details: [
        'Presentation of initial research concept',
        'Literature review summary',
        'Identification of research gap and problem statement',
        'Proposal of methodology and technical approach',
        'Timeline and milestone planning',
        'Resource allocation and budget planning'
      ]
    },
    {
      id: 'progress-1',
      title: 'Progress Presentation 1',
      date: '2024-11-20',
      description: 'First progress review of project implementation.',
      marks: '18/20',
      status: 'completed',
      details: [
        'Demonstration of system architecture',
        'Presentation of initial UI/UX designs',
        'Overview of implemented assessment modules',
        'Preliminary results from voice analysis algorithms',
        'Discussion of challenges and proposed solutions',
        'Updated timeline and next steps'
      ]
    },
    {
      id: 'progress-2',
      title: 'Progress Presentation 2',
      date: '2025-02-15',
      description: 'Second progress review focusing on system integration and testing.',
      marks: 'Pending',
      status: 'in-progress',
      details: [
        'Integration of all system components',
        'Demonstration of the VERP therapy module',
        'Presentation of the AI voice assistant functionality',
        'Initial user testing results',
        'Discussion of refinements based on feedback',
        'Plan for final evaluation phase'
      ]
    },
    {
      id: 'final-assessment',
      title: 'Final Assessment',
      date: '2025-04-20',
      description: 'Comprehensive assessment of the complete project.',
      marks: 'Pending',
      status: 'upcoming',
      details: [
        'Final demonstration of the complete MindSculptor platform',
        'Presentation of evaluation results',
        'Discussion of research contributions and innovations',
        'Analysis of limitations and future work',
        'Comprehensive project documentation',
        'Publication plans and commercialization potential'
      ]
    },
    {
      id: 'viva',
      title: 'Viva',
      date: '2025-05-10',
      description: 'Oral defense of the research project.',
      marks: 'Pending',
      status: 'upcoming',
      details: [
        'In-depth questioning on research methodology',
        'Demonstration of technical knowledge',
        'Defense of design and implementation choices',
        'Discussion of ethical considerations',
        'Reflection on learning outcomes',
        'Exploration of project impact and potential applications'
      ]
    },
  ];

  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(milestones[0]);

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Project Milestones</h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Tracking our research progress through key project assessments and deliverables.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Milestone Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-heading font-medium mb-6 text-neutral-900">Assessments</h2>
              
              <div className="space-y-3">
                {milestones.map((milestone) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => setSelectedMilestone(milestone)}
                      className={`w-full text-left p-4 rounded-lg transition-colors flex items-start gap-3 ${
                        selectedMilestone?.id === milestone.id
                          ? 'bg-primary-50 text-primary-800 border-l-4 border-primary-600'
                          : 'hover:bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {milestone.status === 'completed' && <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />}
                      {milestone.status === 'in-progress' && <Clock className="h-5 w-5 text-warning-500 flex-shrink-0 mt-0.5" />}
                      {milestone.status === 'upcoming' && <Calendar className="h-5 w-5 text-neutral-400 flex-shrink-0 mt-0.5" />}
                      
                      <div>
                        <h3 className="font-medium text-inherit">{milestone.title}</h3>
                        <p className="text-sm text-neutral-500 mt-1">
                          {new Date(milestone.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Milestone Details */}
          <div className="lg:col-span-2">
            {selectedMilestone && (
              <motion.div
                key={selectedMilestone.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <div className="p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <h2 className="text-3xl font-heading font-semibold text-neutral-900">
                        {selectedMilestone.title}
                      </h2>
                      <div className="flex items-center gap-2">
                        {selectedMilestone.status === 'completed' && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-100 text-success-800">
                            <CheckCircle className="h-4 w-4 mr-1" /> Completed
                          </span>
                        )}
                        {selectedMilestone.status === 'in-progress' && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-warning-100 text-warning-800">
                            <Clock className="h-4 w-4 mr-1" /> In Progress
                          </span>
                        )}
                        {selectedMilestone.status === 'upcoming' && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800">
                            <Calendar className="h-4 w-4 mr-1" /> Upcoming
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary-600" />
                        <div>
                          <p className="text-sm text-neutral-500">Date</p>
                          <p className="font-medium">
                            {new Date(selectedMilestone.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileCheck className="h-5 w-5 text-primary-600" />
                        <div>
                          <p className="text-sm text-neutral-500">Marks Allocated</p>
                          <p className="font-medium">{selectedMilestone.marks}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-heading font-medium mb-4 text-neutral-900">Overview</h3>
                      <p className="text-neutral-600 leading-relaxed">{selectedMilestone.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-medium mb-4 text-neutral-900">Key Components</h3>
                      <ul className="space-y-3">
                        {selectedMilestone.details.map((detail, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-medium">{index + 1}</span>
                            </div>
                            <p className="text-neutral-600">{detail}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {selectedMilestone.status === 'completed' && (
                      <div className="mt-8 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                        <h3 className="text-xl font-heading font-medium mb-4 text-neutral-900">Assessment Outcome</h3>
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-success-100 text-success-700 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-neutral-600">This milestone has been successfully completed with a mark of <strong>{selectedMilestone.marks}</strong>.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Milestones;