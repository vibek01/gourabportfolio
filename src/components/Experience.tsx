import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  highlight: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Video Editor",
    company: "Creative Media Agency",
    location: "Remote",
    period: "2023 - Present",
    description: [
      "Lead editor for high-profile social media campaigns",
      "Created viral content with 10M+ views across platforms",
      "Specialized in short-form content optimization"
    ],
    highlight: "10M+ views generated"
  },
  {
    title: "Freelance Video Editor",
    company: "Various Clients",
    location: "Global",
    period: "2021 - 2023",
    description: [
      "Edited 200+ videos for YouTubers and brands",
      "Developed signature editing style for Gen Z content",
      "Managed multiple client projects simultaneously"
    ],
    highlight: "200+ projects completed"
  },
  {
    title: "Junior Motion Designer",
    company: "Digital Studio",
    location: "Mumbai, India",
    period: "2020 - 2021",
    description: [
      "Created motion graphics and animations",
      "Collaborated on brand identity projects",
      "Learned advanced After Effects techniques"
    ],
    highlight: "50+ animations created"
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-red-900/5 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          My <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent hover:from-white hover:to-red-500 transition-all duration-500">Journey</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-white to-red-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-8 group"
              >
                {/* Timeline dot */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-red-500 to-white rounded-full flex items-center justify-center group-hover:scale-125 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
                  <div className="w-8 h-8 bg-black rounded-full group-hover:bg-red-500 transition-colors duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/20 group-hover:bg-red-900/10 group-hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-red-300 transition-colors duration-300">{exp.title}</h3>
                      <p className="text-red-400 font-semibold text-lg group-hover:text-white transition-colors duration-300">{exp.company}</p>
                    </div>
                    <div className="bg-gradient-to-r from-red-500/20 to-white/20 rounded-lg px-4 py-2 border border-red-400/30 group-hover:border-white/50 transition-all duration-300">
                      <span className="text-red-300 font-medium group-hover:text-white transition-colors duration-300">{exp.highlight}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                        <TrendingUp className="h-4 w-4 text-red-400 mt-1 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                        <span className="hover:text-red-300 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;