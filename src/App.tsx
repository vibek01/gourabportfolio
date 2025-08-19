import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaglineIntro from "./components/TaglineIntro";
import Hero from "./components/Hero";
import Myself from "./components/Myself";
import Experience from "./components/Experience";
import MyWork from "./components/MyWork";
import Reviews from "./components/Reviews";
import MyYouTube from "./components/MyYouTube";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [introState, setIntroState] = useState<
    "visible" | "exiting" | "hidden"
  >("visible");

  useEffect(() => {
    // Prevent scrolling while the intro is visible or animating
    if (introState !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [introState]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "myself",
        "experience",
        "work",
        "reviews",
        "youtube",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnimationComplete = () => {
    setIntroState("exiting"); // 1. Trigger the exit animations
    setTimeout(() => {
      setIntroState("hidden"); // 2. After animation, remove the intro component
    }, 1200); // This duration MUST match the CSS animation duration
  };

  const renderIntro = () => {
    if (introState === "hidden") {
      return null;
    }

    // CRITICAL FIX: The wrapper is now a fixed, full-screen overlay.
    // This prevents the main app content from pushing it up.
    return (
      <div
        className={`fixed inset-0 z-50 ${
          introState === "exiting" ? "animate-intro-zoom-out" : ""
        }`}
      >
        <TaglineIntro onAnimationComplete={handleAnimationComplete} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {renderIntro()}

      {/* 
        This div is initially invisible. When the intro starts exiting, 
        it becomes visible and plays its zoom-in animation.
      */}
      <div
        className={
          introState !== "visible" ? "animate-hero-zoom-in" : "opacity-0"
        }
      >
        <Header activeSection={activeSection} />

        <main className="relative">
          <section id="home">
            <Hero />
          </section>

          <section id="myself">
            <Myself />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="work">
            <MyWork />
          </section>

          <section id="reviews">
            <Reviews />
          </section>

          <section id="youtube">
            <MyYouTube />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
