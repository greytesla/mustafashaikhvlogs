import React from 'react';
import { Instagram, Youtube, Video, Mail } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    Instagram: Instagram,
    Youtube: Youtube,
    Video: Video
  };

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-3">{mockData.influencer.name}</h3>
            <p className="text-gray-400 text-sm">{mockData.influencer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/work" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Work</a></li>
              <li><a href="/videos" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Videos</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {mockData.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={link.platform}
                  >
                    <Icon className="w-5 h-5 text-gray-400" />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${mockData.influencer.email}`}
              className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              {mockData.influencer.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} {mockData.influencer.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;