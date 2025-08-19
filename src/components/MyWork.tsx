import React, { useState, useEffect, useRef } from "react";
import { Play, Eye, ExternalLink, X } from "lucide-react";
import "../styles/mywork.css"; // Adjust path to the new styles folder

interface WorkItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoPreview: string; // URL for the short hover-to-play video
  videoUrl: string; // Embed URL for the full video (e.g., YouTube)
  views: string;
  description: string;
}

const workItems: WorkItem[] = [
  {
    id: "1",
    title: "SwiperJS Demo",
    category: "Carousel Library",
    thumbnail: "https://swiperjs.com/demos/images/nature-5.jpg",
    videoPreview:
      "https://player.vimeo.com/external/449973800.sd.mp4?s=7e9f2b4e5a&profile_id=164",
    videoUrl: "https://www.youtube.com/embed/kdgcVSTqpRk",
    views: "2.5M",
    description:
      "Mobile-first, touch-friendly carousel with parallax and 3D effects.",
  },
  {
    id: "2",
    title: "React Slick Showcase",
    category: "Carousel Library",
    thumbnail: "https://swiperjs.com/demos/images/nature-2.jpg",
    videoPreview:
      "https://player.vimeo.com/external/385062924.sd.mp4?s=2d84&profile_id=164",
    videoUrl: "https://www.youtube.com/embed/RmX1xY5XKOs",
    views: "850K",
    description:
      "Classic, stable carousel with infinite scroll and autoplay support.",
  },
  {
    id: "3",
    title: "React Responsive Carousel",
    category: "Carousel Library",
    thumbnail: "https://swiperjs.com/demos/images/nature-1.jpg",
    videoPreview:
      "https://player.vimeo.com/external/460213928.sd.mp4?s=bb5&profile_id=164",
    videoUrl: "https://www.youtube.com/embed/y96VjW1Qn7U",
    views: "1.2M",
    description:
      "Lightweight and responsive, supports images and videos with SSR.",
  },
  {
    id: "4",
    title: "Embla Carousel",
    category: "Carousel Library",
    thumbnail: "https://swiperjs.com/demos/images/nature-3.jpg",
    videoPreview:
      "https://player.vimeo.com/external/307578963.sd.mp4?s=74a4&profile_id=164",
    videoUrl: "https://www.youtube.com/embed/PaSkQWu6p_A",
    views: "3.1M",
    description:
      "Ultra-lightweight and customizable with plugins for autoplay and fade.",
  },
  {
    id: "5",
    title: "React Multi Carousel",
    category: "Carousel Library",
    thumbnail: "https://swiperjs.com/demos/images/nature-4.jpg",
    videoPreview:
      "https://player.vimeo.com/external/308957959.sd.mp4?s=f7c9&profile_id=164",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    views: "920K",
    description:
      "Optimized for multiple items per slide with SSR support and autoplay.",
  },
  {
    id: "6",
    title: "lightGallery React",
    category: "Video Gallery",
    thumbnail: "https://swiperjs.com/demos/images/nature-6.jpg",
    videoPreview:
      "https://player.vimeo.com/external/310582629.sd.mp4?s=f6b&profile_id=164",
    videoUrl: "https://www.youtube.com/embed/ZZ4zTtcP5Zw",
    views: "675K",
    description:
      "Video-specific carousel with lightbox, social sharing, and transitions.",
  },
];

const duplicatedItems = [...workItems, ...workItems];

const MyWork: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollRotation, setScrollRotation] = useState(0); // State for 3D rotation

  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the carousel container

  // Intersection Observer for initial fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Scroll listener for 3D perspective effect
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const rect = carouselRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementCenterY = rect.top + rect.height / 2;

      // Calculate position relative to viewport center (-1 to 1)
      const normalizedPosition =
        (elementCenterY - viewportHeight / 2) / (viewportHeight / 2);

      const maxRotation = 10; // Max tilt in degrees
      const newRotation = Math.max(
        -maxRotation,
        Math.min(maxRotation, normalizedPosition * maxRotation)
      );

      setScrollRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (url: string) => {
    setModalUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalUrl(null), 400);
  };

  const carouselStyle = {
    "--item-count": workItems.length,
    "--card-width": "360px",
    "--card-gap": "32px",
    "--animation-duration": `${workItems.length * 6}s`,
  } as React.CSSProperties;

  return (
    <>
      <section
        ref={sectionRef}
        className={`py-20 bg-gradient-to-b from-black via-red-900/10 to-black overflow-hidden ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-section-reveal">
            <h2 className="text-5xl font-bold text-center text-white mb-8">
              My{" "}
              <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent hover:from-white hover:to-red-500 transition-all duration-500">
                Work
              </span>
            </h2>
            <p className="text-center text-gray-300 text-xl mb-16 max-w-3xl mx-auto hover:text-white transition-colors duration-500">
              From viral shorts to cinematic commercials, here's a showcase of
              my best work that keeps audiences hooked.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper">
          <div
            ref={carouselRef}
            className="carousel-container animate-section-reveal"
            style={{
              ...carouselStyle,
              animationDelay: "0.3s",
              transform: `rotateX(${scrollRotation}deg)`,
            }}
          >
            <div className="carousel-track">
              {duplicatedItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="group relative bg-black/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-500 flex flex-col flex-shrink-0"
                  style={{ width: "var(--card-width)" }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div
                    className="relative h-52 overflow-hidden cursor-pointer"
                    onClick={() => openModal(item.videoUrl)}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        hoveredItem === item.id ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <video
                      src={item.videoPreview}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        hoveredItem === item.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-red-900/20 to-transparent"></div>
                    <div
                      className={`absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-500 ${
                        hoveredItem === item.id
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-white rounded-full flex items-center justify-center hover:scale-125 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
                        <Play className="h-8 w-8 text-black ml-1 animate-pulse" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-red-500/80 to-black/80 rounded-full text-white text-sm font-medium backdrop-blur-sm border border-red-400/50">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/80 rounded-full px-3 py-1 backdrop-blur-sm border border-red-500/30">
                      <Eye className="h-4 w-4 text-white" />
                      <span className="text-white text-sm font-medium">
                        {item.views}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-white transition-colors duration-300 line-clamp-2 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <button
                      onClick={() => openModal(item.videoUrl)}
                      className="flex items-center space-x-2 text-red-400 hover:text-white transition-colors duration-300 group/btn mt-4"
                    >
                      <span className="font-medium">Watch Now</span>
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
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
    </>
  );
};

export default MyWork;
