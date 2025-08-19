import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import CircularNavigation from "./CircularNavigation";

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 right-0 z-50 p-6">
        <button
          onClick={toggleMenu}
          className="relative group p-3 rounded-full bg-background/80 backdrop-blur-md border border-ui-border hover:bg-accent/20 hover:border-accent-light hover:shadow-accent transition-all duration-300 hover:scale-110"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-primary relative z-10 group-hover:text-accent-light transition-colors duration-300" />
          ) : (
            <Menu className="h-6 w-6 text-primary relative z-10 group-hover:text-accent-light transition-colors duration-300" />
          )}
        </button>
      </header>

      <CircularNavigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};

export default Header;
