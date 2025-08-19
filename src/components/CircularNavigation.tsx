import React, { useState, useEffect, useRef } from "react";
import { Home, User, Briefcase, Play, Star, Youtube, Mail } from "lucide-react";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface CircularNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

// --- CONFIGURATION ---
// You can change this value to make the rotation faster or slower.
// Positive values rotate clockwise, negative values counter-clockwise.
const rotationSpeed = 8; // Degrees per second
// --- END CONFIGURATION ---

const navigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Home size={20} />,
    color: "from-accent to-primary",
  },
  {
    id: "myself",
    label: "Myself",
    icon: <User size={20} />,
    color: "from-primary to-accent",
  },
  {
    id: "experience",
    label: "Experience",
    icon: <Briefcase size={20} />,
    color: "from-accent to-secondary",
  },
  {
    id: "work",
    label: "My Work",
    icon: <Play size={20} />,
    color: "from-primary to-accent-dark",
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: <Star size={20} />,
    color: "from-accent-dark to-primary",
  },
  {
    id: "youtube",
    label: "My YouTube",
    icon: <Youtube size={20} />,
    color: "from-accent to-accent-dark",
  },
  {
    id: "contact",
    label: "Contact",
    icon: <Mail size={20} />,
    color: "from-primary to-accent",
  },
];

const CircularNavigation: React.FC<CircularNavigationProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const [rotation, setRotation] = useState(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Animation loop for rotation
    const animate = () => {
      setRotation((prevRotation) => (prevRotation + rotationSpeed / 60) % 360);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (isOpen) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  const radius = 200;
  const centerX = 300;
  const centerY = 300;

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-background/50 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Circular menu */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] overflow-hidden">
        <div
          className="relative w-full h-full"
          style={{ transform: `rotate(${rotation}deg)` }} // 1. The main container rotates
        >
          {navigationItems.map((item, index) => {
            const angle = (index * 360) / navigationItems.length - 90;
            const radian = (angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(radian);
            const y = centerY + radius * Math.sin(radian);

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`absolute w-20 h-20 rounded-full bg-background/80 backdrop-blur-md border border-ui-border flex flex-col items-center justify-center text-primary text-xs font-medium transition-all duration-300 hover:scale-125 hover:bg-accent/20 hover:border-accent-light hover:shadow-accent group ${
                  isOpen ? "animate-fade-in" : ""
                }`}
                style={{
                  left: x - 40,
                  top: y - 40,
                  transform: isOpen ? "scale(1)" : "scale(0)", // Button just scales in/out
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 transition-all duration-300 group-hover:animate-pulse`}
                ></div>

                {/* 2. This inner container performs the counter-rotation to keep content level */}
                <div
                  className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-300"
                  style={{ transform: `rotate(${-rotation}deg)` }} // This is the fix
                >
                  {item.icon}
                  <span className="mt-1 text-[10px] group-hover:text-accent-light transition-colors duration-300">
                    {item.label}
                  </span>
                </div>

                {activeSection === item.id && (
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-40 animate-pulse`}
                  ></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CircularNavigation;
