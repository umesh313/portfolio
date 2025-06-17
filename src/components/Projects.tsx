import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Weathora',
      description: 'A responsive weather application with real-time data and beautiful UI.',
      image: 'portfolio/src/images/weathora.png',
      tech: ['React', 'TailwindCSS', 'Weather API'],
      category: 'React',
      demo: 'https://weathora-puce.vercel.app',
      github: '#'
    },
    {
      id: 2,
      title: 'Jokify',
      description: 'Fun jokes application to brighten your day with humor and entertainment.',
      image: 'src/images/Jokify.png',
      tech: ['React', 'JavaScript', 'Jokes API'],
      category: 'React',
      demo: 'https://jokify-fun.vercel.app/',
      github: '#'
    },
    {
      id: 3,
      title: 'Briefd',
      description: 'Stay updated with the latest news from around the world in a clean interface.',
      image: 'src/images/briefd.png',
      tech: ['React', 'News API', 'TailwindCSS'],
      category: 'React',
      demo: 'https://briefd-news.vercel.app/',
      github: '#'
    },
    // {
    //   id: 4,
    //   title: 'AI Chat Bot',
    //   description: 'Intelligent chatbot with prompt engineering and natural language processing.',
    //   image: '/lovable-uploads/photo-1488590528505-98d2b5aba04b',
    //   tech: ['Python', 'AI/ML', 'Prompt Engineering'],
    //   category: 'AI',
    //   demo: '#',
    //   github: '#'
    // },
    // {
    //   id: 5,
    //   title: 'E-commerce Dashboard',
    //   description: 'Admin dashboard for managing products, orders, and analytics.',
    //   image: '/lovable-uploads/photo-1531297484001-80022131f5a1',
    //   tech: ['React', 'JavaScript', 'SQL'],
    //   category: 'Dashboard',
    //   demo: '#',
    //   github: '#'
    // },
    // {
    //   id: 6,
    //   title: 'Data Visualization Dashboard',
    //   description: 'Interactive dashboard for visualizing complex datasets.',
    //   image: '/lovable-uploads/photo-1483058712412-4245e9b90334',
    //   tech: ['React', 'D3.js', 'Python'],
    //   category: 'Dashboard',
    //   demo: '#',
    //   github: '#'
    // }
  ];

  const categories = ['All', 'React', 'Dashboard', 'AI'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise 
            in web development, AI integration, and user experience design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/90 hover:bg-white text-gray-900 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a 
                      href={project.github}
                      className="flex-1 bg-gray-900/90 hover:bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

