import React from 'react';
import { Home, User, Briefcase, Play, Star, Youtube, Mail } from 'lucide-react';

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

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={20} />, color: 'from-red-500 to-white' },
  { id: 'myself', label: 'Myself', icon: <User size={20} />, color: 'from-white to-red-500' },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={20} />, color: 'from-red-500 to-gray-300' },
  { id: 'work', label: 'My Work', icon: <Play size={20} />, color: 'from-white to-red-600' },
  { id: 'reviews', label: 'Reviews', icon: <Star size={20} />, color: 'from-red-600 to-white' },
  { id: 'youtube', label: 'My YouTube', icon: <Youtube size={20} />, color: 'from-red-500 to-red-700' },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} />, color: 'from-white to-red-500' },
];

const CircularNavigation: React.FC<CircularNavigationProps> = ({ isOpen, onClose, activeSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  const radius = 200;
  const centerX = 300;
  const centerY = 300;

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>

      {/* Circular menu */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {navigationItems.map((item, index) => {
            const angle = (index * 360) / navigationItems.length - 90;
            const radian = (angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(radian);
            const y = centerY + radius * Math.sin(radian);

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`absolute w-20 h-20 rounded-full bg-black/80 backdrop-blur-md border border-red-500/30 flex flex-col items-center justify-center text-white text-xs font-medium transition-all duration-300 hover:scale-125 hover:bg-red-500/20 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/50 group ${
                  isOpen ? 'animate-fade-in' : ''
                }`}
                style={{
                  left: x - 40,
                  top: y - 40,
                  transform: isOpen ? 'scale(1)' : 'scale(0)',
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 transition-all duration-300 group-hover:animate-pulse`}></div>
                <div className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                  <span className="mt-1 text-[10px] group-hover:text-red-300 transition-colors duration-300">{item.label}</span>
                </div>
                {activeSection === item.id && (
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-40 animate-pulse`}></div>
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