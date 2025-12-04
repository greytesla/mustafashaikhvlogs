import React, { useState } from 'react';
import { Mail, Instagram, Youtube, Video, Send, MapPin } from 'lucide-react';
import { mockData } from '../mock';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialIcons = {
    Instagram: Instagram,
    Youtube: Youtube,
    Video: Video
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-600 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-600 transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-600 transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-600 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400 text-sm">Reach out directly</p>
                </div>
              </div>
              <a
                href={`mailto:${mockData.influencer.email}`}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {mockData.influencer.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-white font-semibold mb-4">Connect on Social</h3>
              <div className="space-y-4">
                {mockData.socialLinks.map((link) => {
                  const Icon = socialIcons[link.icon];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span>{link.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Business Inquiries */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-white font-semibold mb-3">Business Inquiries</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                For brand collaborations, sponsorships, and partnership opportunities, please use the contact form or reach out via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;