
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Umesh Ahire</h3>
            <p className="text-gray-400">
              Building modern web applications with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-2 text-gray-400">
              <p>umesh.ahire@protonmail.com</p>
              <p>+91 8652088737</p>
              <p>Available for freelance work</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Umesh Ahire. All rights reserved.
            </p>
            
            <div className="flex items-center text-gray-400">
              <span>Built with</span>
              <Heart className="mx-2 h-4 w-4 text-red-500" />
              {/* <span>using React.js & TailwindCSS</span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
