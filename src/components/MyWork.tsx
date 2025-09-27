import React, { useState, useRef } from "react";
import { Play, ExternalLink } from "lucide-react";
import "../styles/mywork.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string; // URL for the static image
  videoPreview: string; // URL for the short hover-to-play video
  videoUrl: string; // The full YouTube embed URL for the modal
  description: string;
}

// Props for the component, including the openModal function
interface MyWorkProps {
  openModal: (url: string) => void;
}

// --- PORTFOLIO ITEMS WITHOUT VIEW COUNTS ---
const workItems: WorkItem[] = [
  {
    id: "1",
    title: "Car Bike Edit",
    category: "Video Editing",
    thumbnail: "https://i.ytimg.com/vi/-VIYvP1jNuY/hq720.jpg",
    videoPreview:
      "https://player.vimeo.com/external/449973800.sd.mp4?s=7e9f2b4e5a&profile_id=164", // Placeholder
    videoUrl: "https://www.youtube.com/embed/-VIYvP1jNuY",
    description:
      "A high-octane edit featuring dynamic transitions and captivating visuals of cars and bikes.",
  },
  {
    id: "2",
    title: "After Effects Edit",
    category: "Motion Graphics",
    thumbnail: "https://i.ytimg.com/vi/6XCvEUhb3AM/hq720.jpg",
    videoPreview:
      "https://player.vimeo.com/external/385062924.sd.mp4?s=2d84&profile_id=164", // Placeholder
    videoUrl: "https://www.youtube.com/embed/6XCvEUhb3AM",
    description:
      "Showcasing complex visual effects and smooth motion graphics created using Adobe After Effects.",
  },
  {
    id: "3",
    title: "Tech Youtuber Work",
    category: "Content Creation",
    thumbnail: "https://i.ytimg.com/vi/BOfNW_h9wD0/hq720.jpg",
    videoPreview:
      "https://player.vimeo.com/external/460213928.sd.mp4?s=bb5&profile_id=164", // Placeholder
    videoUrl: "https://www.youtube.com/embed/BOfNW_h9wD0",
    description:
      "Engaging video content edited for a popular tech channel, focusing on viewer retention and clarity.",
  },
  {
    id: "4",
    title: "Minimalistic Motion Graphics",
    category: "Motion Graphics",
    thumbnail: "https://i.ytimg.com/vi/EBsvFwnxzwU/hq720.jpg",
    videoPreview:
      "https://player.vimeo.com/external/307578963.sd.mp4?s=74a4&profile_id=164", // Placeholder
    videoUrl: "https://www.youtube.com/embed/EBsvFwnxzwU",
    description:
      "A sample of clean, elegant, and minimalistic motion graphics designed for modern brand storytelling.",
  },
  {
    id: "5",
    title: "How Stock Market Actually Works",
    category: "Long Video",
    thumbnail: "https://i.ytimg.com/vi/oZAiHH9nrhk/hq720.jpg",
    videoPreview:
      "https://player.vimeo.com/external/403688115.sd.mp4?s=db818f0ae&profile_id=164", // Placeholder
    videoUrl: "https://www.youtube.com/embed/oZAiHH9nrhk",
    description:
      "A Documentary on how the stock market works in real life.",
  },
];

// This duplicates the items to create the infinite scroll effect
const duplicatedItems = [...workItems, ...workItems, ...workItems];

const MyWork: React.FC<MyWorkProps> = ({ openModal }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isGridView, setGridView] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Creates a subtle rotation effect on scroll
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const carouselStyle = {
    "--item-count": workItems.length,
    "--card-width": "360px",
    "--card-gap": "32px",
    // Adjust animation speed based on the number of items
    "--animation-duration": `${workItems.length * 8}s`,
  } as React.CSSProperties;

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-center text-primary mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-center text-secondary text-xl mb-16 max-w-3xl mx-auto">
            From viral shorts to cinematic edits, here's a showcase of my best
            work that keeps audiences hooked.
          </p>
        </motion.div>
      </div>

      {!isGridView ? (
        <div className="carousel-wrapper">
          <motion.div
            ref={carouselRef}
            className="carousel-container"
            style={{
              rotateX: scrollRotation,
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="carousel-track" style={carouselStyle}>
              {duplicatedItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="group relative bg-ui-panel backdrop-blur-lg rounded-2xl overflow-hidden border border-ui-border hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-transform duration-300 ease-in-out flex flex-col flex-shrink-0 transform-origin-bottom hover:scale-105 hover:-translate-y-4 hover:z-20"
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
                        hoveredItem === item.id ? "opacity-20" : "opacity-100"
                      }`}
                    />
                    {hoveredItem === item.id && (
                      <video
                        src={item.videoPreview}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-background ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/80 rounded-full text-primary text-sm font-medium backdrop-blur-sm border border-ui-border">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-secondary group-hover:text-primary/90 transition-colors duration-300 line-clamp-2 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <button
                      onClick={() => openModal(item.videoUrl)}
                      className="flex items-center space-x-2 text-accent hover:text-accent-light transition-colors duration-300 group/btn mt-4 font-semibold"
                    >
                      <span>Watch Now</span>
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {workItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-ui-panel backdrop-blur-lg rounded-2xl overflow-hidden border border-ui-border hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-transform duration-300 ease-in-out flex flex-col transform-origin-bottom hover:scale-105 hover:-translate-y-2 hover:z-20"
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
                    hoveredItem === item.id ? "opacity-20" : "opacity-100"
                  }`}
                />
                {hoveredItem === item.id && (
                  <video
                    src={item.videoPreview}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-background ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/80 rounded-full text-primary text-sm font-medium backdrop-blur-sm border border-ui-border">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-secondary group-hover:text-primary/90 transition-colors duration-300 line-clamp-2 text-sm">
                    {item.description}
                  </p>
                </div>
                <button
                  onClick={() => openModal(item.videoUrl)}
                  className="flex items-center space-x-2 text-accent hover:text-accent-light transition-colors duration-300 group/btn mt-4 font-semibold"
                >
                  <span>Watch Now</span>
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      <div className="text-center mt-12">
        <button
          onClick={() => setGridView(!isGridView)}
          className="px-8 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent-light transition-colors duration-300"
        >
          {isGridView ? "Shrink" : "View All"}
        </button>
      </div>
    </section>
  );
};

export default MyWork;