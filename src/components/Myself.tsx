import React, { useEffect, useState, useRef } from "react";
import { Code, Zap, Heart } from "lucide-react";
import "../styles/myself.css"; // Import the new CSS file
import colors from "../styles/theme"; // Import theme colors

// A small component to handle the number counting animation
const NumberCounter: React.FC<{ target: number; isVisible: boolean }> = ({
  target,
  isVisible,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    const increment = target / totalFrames;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isVisible, target]);

  return (
    <span className="text-2xl font-bold text-primary group-hover:text-accent-light transition-colors duration-300">
      {count}%
    </span>
  );
};

const Myself: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-6 bg-gradient-to-b from-background via-accent/10 to-background overflow-hidden ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-primary mb-16">
          About{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent hover:from-primary hover:to-accent transition-all duration-500">
            Myself
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ========== CORRECTED IMAGE SECTION START ========== */}
          <div
            className="relative group animate-slide-in-left"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full h-76 rounded-2xl overflow-hidden border border-ui-border hover:border-accent-light transition-all duration-500">
              {/* Image Tag */}
              <img
                src="/uploads/gourab.jpg"
                alt="A picture of Gourab"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Optional: Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          {/* ========== CORRECTED IMAGE SECTION END ========== */}

          {/* Content - Animate from right */}
          <div
            className="space-y-8 animate-slide-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-ui-panel backdrop-blur-lg rounded-2xl p-8 border border-ui-border hover:border-ui-borderHover hover:bg-ui-panelHover transition-all duration-500">
              <p className="text-secondary text-lg leading-relaxed mb-6 hover:text-primary transition-colors duration-300">
                Hey there! I'm Gourab, a passionate video editor who lives and
                breathes creative storytelling. With years of experience
                crafting viral content, I specialize in creating videos that not
                only look amazing but also drive engagement and results.
              </p>

              <p className="text-secondary text-lg leading-relaxed mb-8 hover:text-primary transition-colors duration-300">
                My expertise lies in understanding what makes content tick in
                today's fast-paced digital world. I know how to capture and
                maintain audience attention.
              </p>

              {/* NEW: Stats Section */}
              <div className="grid grid-cols-3 gap-4 text-center mb-8 border-t border-b border-accent/10 py-4">
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-accent-light to-primary bg-clip-text text-transparent">
                    10M+
                  </h3>
                  <p className="text-tertiary text-sm">Views Generated</p>
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.8s" }}
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">
                    200+
                  </h3>
                  <p className="text-tertiary text-sm">Projects Done</p>
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "1.0s" }}
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-accent-light to-primary bg-clip-text text-transparent">
                    5+
                  </h3>
                  <p className="text-tertiary text-sm">Years of Experience</p>
                </div>
              </div>

              {/* NEW: Animated Skill Circles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Technical Skill */}
                <div
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: "1.2s" }}
                >
                  <div className="relative w-28 h-28 mx-auto mb-3 flex items-center justify-center">
                    <svg
                      className="w-full h-full skill-circle-svg"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        className="skill-circle-bg"
                        cx="50"
                        cy="50"
                        r="46"
                      />
                      <circle
                        className="skill-circle-fg"
                        cx="50"
                        cy="50"
                        r="46"
                        style={{ stroke: "url(#gradientTechnical)" }}
                        strokeDashoffset={289 - (289 * 95) / 100}
                      />
                      <defs>
                        <linearGradient id="gradientTechnical">
                          <stop offset="0%" stopColor={colors.accent.DEFAULT} />
                          <stop offset="100%" stopColor={colors.primary} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <Code className="h-8 w-8 text-primary mb-1" />
                      <NumberCounter target={95} isVisible={isVisible} />
                    </div>
                  </div>
                  <h3 className="text-primary font-semibold group-hover:text-accent-light transition-colors duration-300">
                    Technical
                  </h3>
                </div>

                {/* Creative Skill */}
                <div
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: "1.4s" }}
                >
                  <div className="relative w-28 h-28 mx-auto mb-3 flex items-center justify-center">
                    <svg
                      className="w-full h-full skill-circle-svg"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        className="skill-circle-bg"
                        cx="50"
                        cy="50"
                        r="46"
                      />
                      <circle
                        className="skill-circle-fg"
                        cx="50"
                        cy="50"
                        r="46"
                        style={{ stroke: "url(#gradientCreative)" }}
                        strokeDashoffset={289 - (289 * 98) / 100}
                      />
                      <defs>
                        <linearGradient id="gradientCreative">
                          <stop offset="0%" stopColor={colors.primary} />
                          <stop
                            offset="100%"
                            stopColor={colors.accent.DEFAULT}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <Zap className="h-8 w-8 text-primary mb-1" />
                      <NumberCounter target={98} isVisible={isVisible} />
                    </div>
                  </div>
                  <h3 className="text-primary font-semibold group-hover:text-accent-light transition-colors duration-300">
                    Creative
                  </h3>
                </div>

                {/* Passionate Skill */}
                <div
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: "1.6s" }}
                >
                  <div className="relative w-28 h-28 mx-auto mb-3 flex items-center justify-center">
                    <svg
                      className="w-full h-full skill-circle-svg"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        className="skill-circle-bg"
                        cx="50"
                        cy="50"
                        r="46"
                      />
                      <circle
                        className="skill-circle-fg"
                        cx="50"
                        cy="50"
                        r="46"
                        style={{ stroke: "url(#gradientPassionate)" }}
                        strokeDashoffset={289 - (289 * 99) / 100}
                      />
                      <defs>
                        <linearGradient id="gradientPassionate">
                          <stop offset="0%" stopColor={colors.accent.DEFAULT} />
                          <stop offset="100%" stopColor={colors.background} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <Heart className="h-8 w-8 text-primary mb-1" />
                      <NumberCounter target={99} isVisible={isVisible} />
                    </div>
                  </div>
                  <h3 className="text-primary font-semibold group-hover:text-accent-light transition-colors duration-300">
                    Passionate
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myself;
