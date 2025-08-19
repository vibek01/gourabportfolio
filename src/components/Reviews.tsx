import React, { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import "../styles/InteractiveCardEffect.css"; // Make sure this CSS file exists
import { colors } from "../styles/theme"; // Assuming theme.ts is in the styles folder

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Karishma Mehta",
    role: "Storytelling Curator | Writer",
    company: "Humans of Bombay",
    rating: 5,
    review:
      "Your editing brought my visual stories to life—understanding each person’s emotion, you crafted edits that deeply resonate with humanity.",
    avatar: "../../public/uploads/karishma.jpg",
  },
  {
    id: "2",
    name: "Aditya Kumar",
    role: "Regional Food Creator",
    company: "Authentic Bihari Recipes",
    rating: 5,
    review:
      "Your content edits turned simple home-style cooking into a visual feast—warm, authentic, and inviting as an embrace from home.",
    avatar: "../../public/uploads/aditya_kumar.jpg",
  },
  {
    id: "3",
    name: "Dipti Parihar Sharma",
    role: "Fashion & Lifestyle Curator",
    company: "Dipti Parihar Sharma",
    rating: 5,
    review:
      "Your touch in post-production enhanced every frame—infusing elegance into movement, and making each stylistic shift subtle yet powerful.",
    avatar: "../../public/uploads/dipti.jpg",
  },
  {
    id: "4",
    name: "Akash Pal",
    role: "Tech Youtuber",
    company: "Technical Sky",
    rating: 5,
    review:
      "Your video edits reveal hidden Android features with clarity—each trick feels accessible yet exciting, just with the right pacing.",
    avatar: "../../public/uploads/technicalsky.jpg",
  },
  {
    id: "5",
    name: "Tech Gun (Vishwajeet)",
    role: "Programming Educator",
    company: "Tech Gun",
    rating: 5,
    review:
      "Editing with precision and subtle instructional flair—your work makes technical tutorials feel clear, crisp, and listener-friendly.",
    avatar: "../../public/uploads/techgun.jpg",
  },
  {
    id: "6",
    name: "iTech India (Saiyed Irfan Anwarhushen)",
    role: "Gadget Reviewer",
    company: "iTech India",
    rating: 5,
    review:
      "Through fine-tuned transitions and crisp overlays, you made complex gadget comparisons feel sleek and consumer-ready.",
    avatar: "../../public/uploads/itech.jpg",
  },
];

const Reviews: React.FC = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = cardsContainerRef.current;
      if (!container) return;

      for (const card of container.querySelectorAll(".interactive-card")) {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const container = cardsContainerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-8"
          style={{ color: colors.primary }}
        >
          Client{" "}
          <span
            className="bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500"
            style={{
              backgroundImage: `linear-gradient(to right, ${colors.accent.DEFAULT}, ${colors.primary})`,
            }}
          >
            Reviews
          </span>
        </h2>
        <p
          className="text-center text-xl mb-16 max-w-3xl mx-auto transition-colors duration-500"
          style={{ color: colors.secondary }}
        >
          Don't just take my word for it. Here's what my clients say about
          working with me.
        </p>

        <div
          id="cards-container"
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <div className="interactive-card" key={review.id}>
              <div className="card-content">
                <div
                  className="group rounded-2xl p-8 transition-all duration-500 hover:scale-105 h-full w-full flex flex-col"
                  style={{
                    backgroundColor: colors.ui.panel,
                    border: `1px solid ${colors.ui.border}`,
                  }}
                >
                  <div className="mb-6">
                    <Quote
                      className="h-8 w-8 opacity-60 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: colors.accent.light }}
                    />
                  </div>
                  <div className="flex mb-6">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-5 w-5 fill-current transition-colors duration-300"
                        style={{ color: colors.accent.DEFAULT }}
                      />
                    ))}
                  </div>
                  <p
                    className="leading-relaxed mb-8 flex-grow"
                    style={{ color: colors.secondary }}
                  >
                    "{review.review}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-full overflow-hidden border-2 transition-colors duration-300"
                      style={{ borderColor: colors.accent.dark }}
                    >
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4
                        className="font-semibold transition-colors duration-300"
                        style={{ color: colors.primary }}
                      >
                        {review.name}
                      </h4>
                      <p
                        className="text-sm transition-colors duration-300"
                        style={{ color: colors.tertiary }}
                      >
                        {review.role}
                      </p>
                      <p
                        className="text-sm font-medium transition-colors duration-300"
                        style={{ color: colors.accent.DEFAULT }}
                      >
                        {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
