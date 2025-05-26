import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  FileCheck,
  Clock,
  CalendarClock,
  ExternalLink,
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Document {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'pending';
  type: string;
  downloadUrl?: string;
}

const Documents: React.FC = () => {
  const documents: Document[] = [
    {
      id: 'project-charter',
      title: 'Project Charter',
      description:
        'Initial project proposal document outlining the scope, objectives, and high-level requirements.',
      date: '2024-06-28',
      status: 'completed',
      type: 'PDF',
      downloadUrl: 'assets/documents/TAF-24-25J-046.pdf',
    },
    {
      id: 'Project-Proposal-IT21286278',
      title: 'Proposal Document - A T Illesinghe',
      description:
        'Comprehensive research proposal including literature review, methodology, and implementation plan.',
      date: '2024-08-15',
      status: 'completed',
      type: 'PDF',
      downloadUrl: 'assets/documents/IT21286278-Project Proposal.pdf',
    },
    {
      id: 'Project-Proposal-IT21234484',
      title: 'Proposal Document - P T Jayasinghe',
      description:
        'Comprehensive research proposal including literature review, methodology, and implementation plan.',
      date: '2024-08-15',
      status: 'completed',
      type: 'PDF',
      downloadUrl: 'assets/documents/IT21234484_Project_Proporsal.pdf',
    },
    {
      id: 'Project-Proposal-IT21219498',
      title: 'Proposal Document - C S Vithanage',
      description:
        'Comprehensive research proposal including literature review, methodology, and implementation plan.',
      date: '2024-08-15',
      status: 'completed',
      type: 'PDF',
      downloadUrl: 'assets/documents/IT21219498_ProposalReport.pdf',
    },
    {
      id: 'Project-Proposal-IT21209420',
      title: 'Proposal Document - D E H Mallawaarachchi',
      description:
        'Comprehensive research proposal including literature review, methodology, and implementation plan.',
      date: '2024-08-15',
      status: 'completed',
      type: 'PDF',
      downloadUrl: 'assets/documents/IT21209420-Project-Proposal.pdf',
    },
    // {
    //   id: 'requirement-specification',
    //   title: 'Requirements Specification',
    //   description:
    //     'Detailed specification of functional and non-functional requirements for the MindSculptor platform.',
    //   date: '2024-10-05',
    //   status: 'completed',
    //   type: 'PDF',
    //   downloadUrl: '#',
    // },
    // {
    //   id: 'design-document',
    //   title: 'System Design Document',
    //   description:
    //     'Technical design specifications including architecture, data models, and interface designs.',
    //   date: '2024-10-20',
    //   status: 'completed',
    //   type: 'PDF',
    //   downloadUrl: '#',
    // },
    {
      id: 'progress-report-1',
      title: 'Progress Report 1',
      description:
        'First progress report detailing implementation achievements, challenges, and next steps.',
      date: '2024-12-03',
      status: 'completed',
      type: 'PDF',
      downloadUrl: 'assets/documents/Mindsculptor-PP1.pdf',
    },
    {
      id: 'progress-report-2',
      title: 'Progress Report 2',
      description:
        'Second progress report covering system integration, testing results, and refinements.',
      date: '2025-03-20',
      status: 'completed',
      type: 'PDF',
      downloadUrl: 'assets/documents/Mindsculptor-PP2.pdf',
    },
    {
      id: 'final-thesis',
      title: 'Final Thesis Document',
      description:
        'Comprehensive documentation of the entire research project, findings, and conclusions.',
      date: '2025-04-11',
      status: 'completed',
      type: 'PDF',
      downloadUrl:
        'assets/documents/24-25J-046_Group_Final_Report_MindSculptor.pdf',
    },
    {
      id: 'research-paper',
      title: 'Research Paper',
      description:
        'Comprehensive documentation of the entire research project, findings, and conclusions.',
      date: '2025-04-11',
      status: 'pending',
      type: 'PDF',
      downloadUrl:
        'assets/documents/24-25J-046_Group_Final_Report_MindSculptor.pdf',
    },
    {
      id: 'Final-Presentation',
      title: 'Final-Presentation',
      description:
        'Presentation slides summarizing the research project, key findings, and future work.',
      date: '2025-05-28',
      status: 'pending',
      type: 'PDF',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Research Documents
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Access our comprehensive collection of research documentation for
              the MindSculptor project.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Card>
              <div className="p-6 border-b border-neutral-200">
                <h2 className="text-2xl font-heading font-medium text-neutral-900">
                  Document Repository
                </h2>
                <p className="text-neutral-600 mt-2">
                  This section provides access to all documentation related to
                  our research project, including proposals, reports, and
                  technical specifications.
                </p>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-100 text-success-800">
                    <FileCheck className="h-4 w-4 mr-1" /> Completed:{' '}
                    {documents.filter((d) => d.status === 'completed').length}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800">
                    <Clock className="h-4 w-4 mr-1" /> Pending:{' '}
                    {documents.filter((d) => d.status === 'pending').length}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    <FileText className="h-4 w-4 mr-1" /> Total:{' '}
                    {documents.length}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card hoverable>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary-50 text-primary-700 flex-shrink-0">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <h3 className="text-xl font-heading font-medium text-neutral-900">
                            {doc.title}
                          </h3>
                          <div>
                            {doc.status === 'completed' ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                                <FileCheck className="h-3 w-3 mr-1" /> Available
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
                                <CalendarClock className="h-3 w-3 mr-1" />{' '}
                                Pending
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-neutral-600 mb-4">
                          {doc.description}
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-sm text-neutral-500">
                            <span>
                              <Clock className="inline h-4 w-4 mr-1" />
                              {new Date(doc.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                            <span className="inline-flex items-center ml-3">
                              <FileText className="inline h-4 w-4 mr-1" />
                              {doc.type}
                            </span>
                          </div>
                          {doc.status === 'completed' && doc.downloadUrl && (
                            <Button
                              href={doc.downloadUrl}
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-1"
                            >
                              <Download className="h-4 w-4" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary-100 text-primary-700 flex-shrink-0">
                <ExternalLink className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-medium mb-2 text-neutral-900">
                  Additional Resources
                </h3>
                <p className="text-neutral-600 mb-4">
                  For more detailed information on our research project, please
                  visit the university's digital repository or contact our
                  research team directly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    href="https://github.com/IT21219498/MindSculptor.git"
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    University Repository
                  </Button>
                  <Button to="/contact-us" variant="outline" size="sm">
                    Contact Research Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Documents;
