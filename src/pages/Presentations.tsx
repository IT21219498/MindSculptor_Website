import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Calendar,
  Clock,
  Presentation as FilePresentation,
  CheckCircle,
  Eye,
  Download,
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card, { CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Presentation {
  id: string;
  title: string;
  date: string;
  description: string;
  status: 'completed' | 'upcoming';
  slides?: string;
  preview?: string;
}

const Presentations: React.FC = () => {
  const presentations: Presentation[] = [
    {
      id: 'proposal',
      title: 'Project Proposal Presentation',
      date: '2024-08-15',
      description:
        'Initial presentation introducing the research concept, objectives, and methodology.',
      status: 'completed',
      slides: 'assets/documents/Mindsculptor-Proposal.pptx',
      preview:
        'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'progress-1',
      title: 'Progress Presentation 1',
      date: '2024-12-03',
      description:
        'First progress review showcasing implemented features and preliminary results.',
      status: 'completed',
      slides: 'assets/documents/Mindsculptor - PP1.pptx',
      preview:
        'https://images.pexels.com/photos/7102062/pexels-photo-7102062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'progress-2',
      title: 'Progress Presentation 2',
      date: '2025-03-20',
      description:
        'Second progress review demonstrating system integration and user testing findings.',
      status: 'completed',
      slides: 'assets/documents/Mindsculptor-PP2.pptx',
      preview:
        'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'final',
      title: 'Final Presentation',
      date: '2025-05-28',
      description:
        'Comprehensive presentation of the complete MindSculptor platform and research findings.',
      status: 'upcoming',
    },
    // {
    //   id: 'viva',
    //   title: 'Viva Presentation',
    //   date: '2025-05-10',
    //   description:
    //     'Defense presentation summarizing the research contributions and answering examiner questions.',
    //   status: 'upcoming',
    // },
  ];

  const [selectedPresentation, setSelectedPresentation] =
    useState<Presentation | null>(
      presentations.find((p) => p.status === 'completed') || presentations[0]
    );

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Research Presentations
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Access slides and materials from our project presentations
              throughout the research lifecycle.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Presentation Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-heading font-medium mb-6 text-neutral-900">
                Presentations
              </h2>

              <div className="space-y-3">
                {presentations.map((presentation) => (
                  <motion.div
                    key={presentation.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => setSelectedPresentation(presentation)}
                      className={`w-full text-left p-4 rounded-lg transition-colors flex items-start gap-3 ${
                        selectedPresentation?.id === presentation.id
                          ? 'bg-primary-50 text-primary-800 border-l-4 border-primary-600'
                          : 'hover:bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {presentation.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Clock className="h-5 w-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                      )}

                      <div>
                        <h3 className="font-medium text-inherit">
                          {presentation.title}
                        </h3>
                        <p className="text-sm text-neutral-500 mt-1">
                          {new Date(presentation.date).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        </p>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Presentation Details */}
          <div className="lg:col-span-2">
            {selectedPresentation && (
              <motion.div
                key={selectedPresentation.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <div className="p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <h2 className="text-3xl font-heading font-semibold text-neutral-900">
                        {selectedPresentation.title}
                      </h2>
                      <div className="flex items-center gap-2">
                        {selectedPresentation.status === 'completed' ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-100 text-success-800">
                            <CheckCircle className="h-4 w-4 mr-1" /> Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800">
                            <Calendar className="h-4 w-4 mr-1" /> Upcoming
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <Calendar className="h-5 w-5 text-primary-600" />
                      <div>
                        <p className="text-sm text-neutral-500">
                          Presentation Date
                        </p>
                        <p className="font-medium">
                          {new Date(
                            selectedPresentation.date
                          ).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-heading font-medium mb-4 text-neutral-900">
                        Overview
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {selectedPresentation.description}
                      </p>
                    </div>

                    {selectedPresentation.status === 'completed' &&
                      selectedPresentation.preview && (
                        <div className="mb-8">
                          <h3 className="text-xl font-heading font-medium mb-4 text-neutral-900">
                            Preview
                          </h3>
                          <div className="rounded-lg overflow-hidden shadow-md border border-neutral-200">
                            <img
                              src={selectedPresentation.preview}
                              alt={`Preview of ${selectedPresentation.title}`}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      )}

                    {selectedPresentation.status === 'completed' &&
                      selectedPresentation.slides && (
                        <div className="flex flex-wrap gap-3">
                          <Button
                            href={selectedPresentation.slides}
                            variant="primary"
                            className="flex items-center gap-2"
                          >
                            <Eye className="h-5 w-5" />
                            View Presentation
                          </Button>
                          <Button
                            href={selectedPresentation.slides}
                            variant="outline"
                            className="flex items-center gap-2"
                          >
                            <Download className="h-5 w-5" />
                            Download Slides
                          </Button>
                        </div>
                      )}

                    {selectedPresentation.status === 'upcoming' && (
                      <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-medium text-neutral-900 mb-1">
                              Upcoming Presentation
                            </h4>
                            <p className="text-neutral-600">
                              This presentation is scheduled for{' '}
                              {new Date(
                                selectedPresentation.date
                              ).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                              . Slides will be available after the presentation.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>

                {selectedPresentation.status === 'completed' && (
                  <div className="mt-8">
                    <h3 className="text-xl font-heading font-medium mb-4 text-neutral-900">
                      Related Resources
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card hoverable>
                        <CardBody>
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-full bg-primary-100 text-primary-700 flex-shrink-0">
                              <FilePresentation className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-medium text-neutral-900 mb-1">
                                Accompanying Documentation
                              </h4>
                              <p className="text-sm text-neutral-600 mb-3">
                                View detailed documentation related to this
                                presentation.
                              </p>
                              <Button
                                to="/documents"
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-1"
                              >
                                <ExternalLink className="h-4 w-4" /> View
                                Documents
                              </Button>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card hoverable>
                        <CardBody>
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-full bg-primary-100 text-primary-700 flex-shrink-0">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-medium text-neutral-900 mb-1">
                                Assessment Milestone
                              </h4>
                              <p className="text-sm text-neutral-600 mb-3">
                                View details of the related project milestone.
                              </p>
                              <Button
                                to="/milestones"
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-1"
                              >
                                <ExternalLink className="h-4 w-4" /> View
                                Milestone
                              </Button>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Presentations;
