
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8 shadow-xl">
              {/* Avatar placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                U
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Umesh
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Full Stack Developer
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-20"></div>
          </div>
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate developer with expertise in building modern web applications and mobile solutions. 
                I love creating user-friendly interfaces and solving complex problems with clean, efficient code.
              </p>
              
              <p>
                With a strong foundation in React.js, JavaScript, and modern web technologies, I specialize in 
                creating responsive, performant applications that deliver exceptional user experiences.
              </p>
              
              <p>
                Beyond coding, I'm deeply interested in AI and prompt engineering, leveraging these skills to 
                build intelligent applications that push the boundaries of what's possible.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'React.js', 'JavaScript', 'HTML/CSS', 'Python', 
                  'SQL', 'Prompt Engineering', 'Node.js', 'TailwindCSS'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
