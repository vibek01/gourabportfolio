import React, { useState, useEffect } from "react";
import { ChevronDown, Play } from "lucide-react";
import "../styles/hero.css"; // Import the new CSS file

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State to control when the stroke animation should start
  const [startStrokeAnimation, setStartStrokeAnimation] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = (clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // This timer is the key. It will trigger our state change after the Hero
    // section has had time to start its own entrance animation.
    const animationTimer = setTimeout(() => {
      setStartStrokeAnimation(true);
    }, 500); // Wait 500ms before starting the stroke draw.

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(animationTimer); // Cleanup the timer
    };
  }, []); // Empty array ensures this runs only once when the component mounts

  const getParallaxStyle = (intensity: number) => ({
    transform: `translate3d(${mousePosition.x * intensity}px, ${
      mousePosition.y * intensity
    }px, 0)`,
    transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  });

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background effects */}
      <div
        style={getParallaxStyle(40)}
        className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/10"
      ></div>
      <div
        style={getParallaxStyle(30)}
        className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        style={getParallaxStyle(25)}
        className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>

      {/* Parallax particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/30 rounded-full animate-pulse"
            style={{
              ...getParallaxStyle(5 + Math.random() * 15),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          <span
            className="block animate-slide-up-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Editing
            <span className="relative inline-block word-wrapper">
              <span className="opacity-0"> Reality</span>
              <svg className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none">
                <defs>
                  <linearGradient
                    id="gradientReality"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
                <text
                  className={`animated-gradient-stroke ${
                    startStrokeAnimation ? "animate-stroke" : ""
                  }`}
                  x="50%"
                  y="70%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  stroke="url(#gradientReality)"
                >
                  &nbsp;Reality
                </text>
              </svg>
            </span>
          </span>
          <span
            className="block animate-slide-up-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Crafting
            <span className="relative inline-block word-wrapper">
              <span className="opacity-0"> Emotion</span>
              <svg className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none">
                <defs>
                  <linearGradient
                    id="gradientEmotion"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
                <text
                  className={`animated-gradient-stroke ${
                    startStrokeAnimation ? "animate-stroke" : ""
                  }`}
                  x="50%"
                  y="70%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  stroke="url(#gradientEmotion)"
                >
                  &nbsp;Emotion
                </text>
              </svg>
            </span>
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed hover:text-white transition-colors duration-500 animate-slide-up-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          I'm{" "}
          <span className="text-red-400 font-semibold hover:text-white transition-colors duration-300">
            Gourab
          </span>
          , a video editor specializing in high-energy content for Gen Z. Using{" "}
          <span className="text-white font-medium hover:text-red-400 transition-colors duration-300">
            Premiere Pro & After Effects
          </span>
          , I craft everything from viral shorts and reels to engaging vlogs and
          ads that capture and hold attention.
        </p>

        <div
          className="animate-slide-up-fade-in inline-block"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={scrollToWork}
            className="cta-shimmer-button group relative px-12 py-4 bg-gradient-to-r from-red-500 to-black border-2 border-red-500 rounded-full text-white font-semibold text-lg hover:from-black hover:to-red-500 hover:border-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
          >
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center group-hover:text-red-300 transition-colors duration-300">
              <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              <span className="tracking-wider">View My Work</span>
            </span>
          </button>
        </div>
      </div>

      <div
        style={getParallaxStyle(15)}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-white/60 hover:text-red-400 cursor-pointer transition-colors duration-300" />
      </div>
    </div>
  );
};

export default Hero;
