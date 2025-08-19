// `src/components/TaglineIntro.tsx`
import React, { useEffect, useState } from "react";

interface TaglineIntroProps {
  onAnimationComplete: () => void;
}

const styledWords = [
  { text: "Every ", className: "text-accent" },
  { text: "frame, ", className: "text-primary" },
  { text: "can ", className: "text-secondary" },
  { text: "make ", className: "text-primary" },
  { text: "a ", className: "text-secondary" },
  { text: "story", className: "text-accent" },
];

const fullTagline = styledWords.map((w) => w.text).join("");
const typingSpeed = 60; // milliseconds per character

const TaglineIntro: React.FC<TaglineIntroProps> = ({ onAnimationComplete }) => {
  const [typedText, setTypedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Typewriter effect
    const typingInterval = setInterval(() => {
      setTypedText((prev) => {
        if (prev.length < fullTagline.length) {
          return fullTagline.substring(0, prev.length + 1);
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
          return prev;
        }
      });
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    // Notify parent component on completion after a delay
    if (isComplete) {
      const delayBeforeNotify = 500; // Reduced delay to make transition snappier

      const animationCompleteTimer = setTimeout(() => {
        onAnimationComplete();
      }, delayBeforeNotify);

      return () => {
        clearTimeout(animationCompleteTimer);
      };
    }
  }, [isComplete, onAnimationComplete]);

  // Renders the text with appropriate colors as it's being typed
  const renderTypedText = () => {
    const elements: React.ReactNode[] = [];
    let textIndex = 0;

    for (const { text: wordText, className } of styledWords) {
      const partLength = Math.min(
        wordText.length,
        Math.max(0, typedText.length - textIndex)
      );

      if (partLength > 0) {
        elements.push(
          <span key={textIndex} className={className}>
            {wordText.substring(0, partLength)}
          </span>
        );
      }

      textIndex += wordText.length;
      if (typedText.length < textIndex) break;
    }
    return elements;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight font-mono">
          {renderTypedText()}
          {!isComplete && (
            <span className="cursor-blink text-accent glow-red ml-1 text-7xl md:text-9xl relative -top-1">
              |
            </span>
          )}
        </h1>

        {/* Animated line */}
        <div className="mt-8 flex justify-center">
          <div
            className={`h-1 bg-gradient-to-r from-accent to-primary transition-all ease-in-out duration-1000 ${
              isComplete ? "w-64" : "w-0"
            }`}
          />
        </div>
      </div>

      {/* Particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TaglineIntro;
