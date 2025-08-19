import React from "react";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

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
      "Specialized in short-form content optimization",
    ],
    highlight: "10M+ views generated",
  },
  {
    title: "Freelance Video Editor",
    company: "Various Clients",
    location: "Global",
    period: "2021 - 2023",
    description: [
      "Edited 200+ videos for YouTubers and brands",
      "Developed signature editing style for Gen Z content",
      "Managed multiple client projects simultaneously",
    ],
    highlight: "200+ projects completed",
  },
  {
    title: "Junior Motion Designer",
    company: "Digital Studio",
    location: "Mumbai, India",
    period: "2020 - 2021",
    description: [
      "Created motion graphics and animations",
      "Collaborated on brand identity projects",
      "Learned advanced After Effects techniques",
    ],
    highlight: "50+ animations created",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-primary mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent hover:from-primary hover:to-accent transition-all duration-500">
            Journey
          </span>
        </h2>

        {/* --- MODIFICATION: Main container is now relative --- */}
        <div className="relative">
          {/* --- MODIFICATION: Timeline line is positioned relative to this container --- */}
          {/* It's slightly offset to the left (left-8) to align with the dots */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-accent/30 via-primary/30 to-accent/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              // --- MODIFICATION: Using Grid for layout and items-center for vertical alignment ---
              <div
                key={index}
                className="grid grid-cols-[auto,1fr] gap-x-8 items-center group"
              >
                {/* --- Column 1: Timeline Dot --- */}
                {/* The dot is wrapped in a relative div for z-index stacking */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                    <div className="w-8 h-8 bg-background rounded-full group-hover:bg-accent/20 transition-colors duration-300"></div>
                  </div>
                </div>

                {/* --- Column 2: Content Card --- */}
                <div className="flex-1 bg-ui-panel backdrop-blur-lg rounded-2xl p-8 border border-ui-border group-hover:bg-ui-panelHover group-hover:border-accent/50 group-hover:shadow-accent transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-accent-light transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-accent-light font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                        {exp.company}
                      </p>
                    </div>
                    {/* --- MODIFICATION: Styling for the highlight chip updated --- */}
                    <div className="bg-accent/10 rounded-lg px-4 py-2 border border-accent/30 backdrop-blur-sm mt-2 sm:mt-0">
                      <span className="text-accent-light font-medium text-sm">
                        {exp.highlight}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mb-6 text-tertiary group-hover:text-secondary transition-colors duration-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-accent/80" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-accent/80" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3 text-secondary group-hover:text-primary transition-colors duration-300"
                      >
                        <TrendingUp className="h-4 w-4 text-accent-light mt-1 flex-shrink-0" />
                        <span className="hover:text-accent-light transition-colors duration-300">
                          {item}
                        </span>
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
