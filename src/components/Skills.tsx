
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'Python', 'TypeScript'],
      color: 'blue'
    },
    {
      title: 'Frameworks',
      skills: ['React.js', 'TailwindCSS', 'Node.js'],
      color: 'green'
    },
    {
      title: 'Tools',
      skills: ['Git', 'VSCode', 'Postman'],
      color: 'purple'
    },
    {
      title: 'Platforms',
      skills: ['Firebase', 'Netlify', 'Vercel'],
      color: 'orange'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700',
      green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I work with modern technologies and tools to deliver high-quality solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg border text-center font-medium transition-all duration-300 hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Specialized Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design', 'API Integration', 'Database Design', 
              'UI/UX Design', 'Prompt Engineering', 'AI Integration',
              'Performance Optimization', 'Testing & Debugging'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
