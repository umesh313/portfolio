
import React from 'react';
import { Code, Smartphone, Brain, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web App Development',
      description: 'Custom React applications and landing pages with modern UI/UX'
    },
    {
      icon: Smartphone,
      title: 'Mobile-Ready Apps',
      description: 'PWA and WebView-based Android applications'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Prompt-engineered AI solutions and chatbots'
    },
    {
      icon: Database,
      title: 'API Dashboards',
      description: 'Data-driven dashboards with real-time updates'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            What I Offer
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Need a fast, responsive, and professional web app? I can build one tailored to your needs — 
              whether it's a dashboard, portfolio, SaaS tool, or a mobile-ready app. Let's connect and bring your idea to life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={40} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Services I Provide:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Web app development (React, HTML/CSS/JS)
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Android app builds (via PWA or WebView)
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Prompt-engineered AI integrations
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    API-powered dashboards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
