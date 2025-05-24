import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Brain className="h-7 w-7 text-secondary-400" strokeWidth={1.5} />
              <span className="text-xl font-heading font-semibold text-white">MindSculptor</span>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              A comprehensive digital therapy platform designed to support in the diagnosis and treatment for obsessive-compulsive disorder (OCD).
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:info@mindsculptor.research" className="text-neutral-300 hover:text-secondary-400 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-secondary-400 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/domain" className="text-neutral-300 hover:text-secondary-400 transition-colors text-sm">Domain</Link>
              </li>
              <li>
                <Link to="/milestones" className="text-neutral-300 hover:text-secondary-400 transition-colors text-sm">Milestones</Link>
              </li>
              <li>
                <Link to="/documents" className="text-neutral-300 hover:text-secondary-400 transition-colors text-sm">Documents</Link>
              </li>
              <li>
                <Link to="/presentations" className="text-neutral-300 hover:text-secondary-400 transition-colors text-sm">Presentations</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-neutral-300 text-sm leading-relaxed">
              <p>Department of Computer Science and Engineering</p>
              <p>Sri Lanka Institute of Information Technology</p>
              <p>New Kandy Road, Malabe</p>
              <p className="mt-2">Email: info@mindsculptor.research</p>
              <p>Phone: +94 11 2345678</p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 text-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} MindSculptor Research Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;