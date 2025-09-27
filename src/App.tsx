import React, { useState, useEffect } from "react";
import { X } from "lucide-react"; // Import X for the modal close button
import Header from "./components/Header";
import TaglineIntro from "./components/TaglineIntro";
import Hero from "./components/Hero";
import Myself from "./components/Myself";
import Experience from "./components/Experience";
import MyWork from "./components/MyWork";
import Reviews from "./components/Reviews";
import MyYouTube from "./components/MyYouTube";
import Contact from "./components/Contact";
import "./styles/mywork.css"; // Import modal styles here

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [introState, setIntroState] = useState<
    "visible" | "exiting" | "hidden"
  >("visible");

  // --- MODAL STATE LIFTED FROM MyWork.tsx ---
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (url: string) => {
    setModalUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Allow animation to finish before clearing the URL
    setTimeout(() => setModalUrl(null), 400);
  };
  // --- END OF LIFTED MODAL STATE ---

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
    <div className="min-h-screen bg-background">
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

          <section id="work">
            {/* Pass the openModal function as a prop */}
            <MyWork openModal={openModal} />
          </section>
          
          <section id="myself">
            <Myself />
          </section>

          <section id="experience">
            <Experience />
          </section>


          <section id="reviews">
            <Reviews />
          </section>

          {/* <section id="youtube">
            <MyYouTube />
          </section> */}

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>

      {/* --- RENDER MODAL HERE --- */}
      {/* It is outside the transformed div, so it will be positioned correctly */}
      {modalUrl && (
        <div
          className={`video-modal ${
            isModalOpen ? "modal-enter" : "modal-exit"
          }`}
        >
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close-button">
              <X size={24} />
            </button>
            <iframe
              className="modal-iframe"
              src={`${modalUrl}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      {/* --- END OF MODAL --- */}
    </div>
  );
}

export default App;
