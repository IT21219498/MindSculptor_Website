import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Get in touch with the MindSculptor research team for inquiries, collaboration opportunities, or more information.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <h2 className="text-2xl font-heading font-medium mb-6 text-neutral-900">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary-100 text-primary-700 flex-shrink-0">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-900 mb-1">Email</h3>
                          <p className="text-neutral-600 mb-1">For general inquiries:</p>
                          <a 
                            href="mailto:info@mindsculptor.research.sliit.lk" 
                            className="text-primary-600 hover:text-primary-800 transition-colors"
                          >
                            info@mindsculptor.research.sliit.lk
                          </a>
                          <p className="text-neutral-600 mt-2 mb-1">For collaboration:</p>
                          <a 
                            href="mailto:collaborate@mindsculptor.research.sliit.lk" 
                            className="text-primary-600 hover:text-primary-800 transition-colors"
                          >
                            collaborate@mindsculptor.research.sliit.lk
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary-100 text-primary-700 flex-shrink-0">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-900 mb-1">Phone</h3>
                          <p className="text-neutral-600 mb-1">Office:</p>
                          <a 
                            href="tel:+94112345678" 
                            className="text-primary-600 hover:text-primary-800 transition-colors"
                          >
                            +94 11 2345678
                          </a>
                          <p className="text-neutral-600 mt-2 mb-1">Research Lab:</p>
                          <a 
                            href="tel:+94112345679" 
                            className="text-primary-600 hover:text-primary-800 transition-colors"
                          >
                            +94 11 2345679
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary-100 text-primary-700 flex-shrink-0">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-900 mb-1">Address</h3>
                          <address className="text-neutral-600 not-italic">
                            Department of Computer Science and Engineering<br />
                            Sri Lanka Institute of Information Technology<br />
                            New Kandy Road, Malabe<br />
                            Sri Lanka
                          </address>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-neutral-200">
                      <h3 className="font-medium text-neutral-900 mb-3">Research Hours</h3>
                      <p className="text-neutral-600 mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-neutral-600">Saturday: 9:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-medium mb-6 text-neutral-900">Send Us a Message</h2>
                    
                    {isSubmitted ? (
                      <div className="bg-success-50 border border-success-200 rounded-lg p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="h-16 w-16 rounded-full bg-success-100 flex items-center justify-center">
                            <CheckCircle className="h-8 w-8 text-success-600" />
                          </div>
                        </div>
                        <h3 className="text-xl font-heading font-medium text-success-800 mb-2">Message Sent Successfully!</h3>
                        <p className="text-success-700 mb-6">
                          Thank you for contacting us. We will get back to you as soon as possible.
                        </p>
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                            Subject
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          >
                            <option value="" disabled>Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Research Collaboration">Research Collaboration</option>
                            <option value="Technical Questions">Technical Questions</option>
                            <option value="Media Inquiry">Media Inquiry</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                            placeholder="Your message here..."
                          ></textarea>
                        </div>
                        
                        <Button
                          type="submit"
                          variant="primary"
                          className="flex items-center gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>Processing...</>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <Card>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-heading font-medium mb-6 text-neutral-900">Location</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467127241!2d79.97075651432567!3d6.914677395001855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sus!4v1625141336518!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="SLIIT Location Map"
                  ></iframe>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default ContactUs;