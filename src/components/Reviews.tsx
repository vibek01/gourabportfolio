import React, { useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import "../styles/reviews.css"; // Make sure you have created and imported this css file

// --- FIX: Import images directly so Vite can process them ---
import karishmaAvatar from "../../public/uploads/470895036_1629300951304761_287775401158200711_n.jpg";
import adityaAvatar from "/public/uploads/aditya_kumar.jpg";
import diptiAvatar from "/public/uploads/dipti.jpg";
import akashAvatar from "/public/uploads/technicalsky.jpg";
import techgunAvatar from "/public/uploads/techgun.jpg";
import itechAvatar from "/public/uploads/itech.jpg";

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
      "Captures Mumbai’s humanity with powerful visual storytelling that turns every individual’s story into something universally moving.",
    // --- FIX: Use the imported image variable ---
    avatar: karishmaAvatar,
  },
  {
    id: "2",
    name: "Aditya Kumar",
    role: "Regional Food Creator",
    company: "Authentic Bihari Recipes",
    rating: 5,
    review:
      "Brings traditional Bihari flavors to life with simple, heartfelt cooking that feels like a home-cooked hug.",
    // --- FIX: Use the imported image variable ---
    avatar: adityaAvatar,
  },
  {
    id: "3",
    name: "Dipti Parihar Sharma",
    role: "Fashion & Lifestyle Curator",
    company: "Dipti Parihar Sharma",
    rating: 5,
    review:
      "Effortlessly blends Western trends with Indian elegance, making her style both aspirational and accessible.",
    // --- FIX: Use the imported image variable ---
    avatar: diptiAvatar,
  },
  {
    id: "4",
    name: "Akash Pal",
    role: "Tech Youtuber",
    company: "Technical Sky",
    rating: 5,
    review:
      "Weaves everyday life and travel into candid, feel-good vlogs that feel like catching up with a friend.",
    // --- FIX: Use the imported image variable ---
    avatar: akashAvatar,
  },
  {
    id: "5",
    name: "Tech Gun (Vishwajeet)",
    role: "Programming Educator",
    company: "Tech Gun",
    rating: 5,
    review:
      "Delivers clear, in-depth coding tutorials in Hindi, making complex concepts approachable for local learners.",
    // --- FIX: Use the imported image variable ---
    avatar: techgunAvatar,
  },
  {
    id: "6",
    name: "iTech India (Saiyed Irfan Anwarhushen)",
    role: "Gadget Reviewer",
    company: "iTech India",
    rating: 5,
    review:
      "Offers balanced and thorough gadget comparisons that help tech consumers make smarter, informed choices.",
    // --- FIX: Use the imported image variable ---
    avatar: itechAvatar,
  },
];

const Reviews: React.FC = () => {
  // --- ADDITION: Logic for the glowing border effect ---
  const cardsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cardsContainer = cardsRef.current;
    if (!cardsContainer) return;
    const handleMouseMove = (e: MouseEvent) => {
      for (const card of cardsContainer.children as HTMLCollectionOf<HTMLDivElement>) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
    cardsContainer.addEventListener("mousemove", handleMouseMove);
    return () => {
      cardsContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  // --- END ADDITION ---

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-primary mb-8">
          Client{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent hover:from-primary hover:to-accent transition-all duration-500">
            Reviews
          </span>
        </h2>

        <p className="text-center text-secondary text-xl mb-16 max-w-3xl mx-auto hover:text-primary transition-colors duration-500">
          Don't just take my word for it. Here's what my clients say about
          working with me.
        </p>

        {/* --- MODIFICATION: Added id and ref for the mousemove effect --- */}
        <div
          id="review-cards"
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            // --- MODIFICATION: New card structure for the glowing effect ---
            <div key={review.id} className="card group">
              <div className="card-content">
                <div className="w-full h-full flex flex-col bg-ui-panel backdrop-blur-lg rounded-2xl p-8 border border-ui-border">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-accent-light opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                  </div>

                  {/* Stars */}
                  <div className="flex mb-6">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-5 w-5 text-accent-light fill-current group-hover:text-primary transition-colors duration-300"
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="flex-grow text-secondary leading-relaxed mb-8 group-hover:text-primary transition-colors duration-500">
                    "{review.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent group-hover:border-primary transition-colors duration-300">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold group-hover:text-accent-light transition-colors duration-300">
                        {review.name}
                      </h4>
                      <p className="text-tertiary text-sm group-hover:text-secondary transition-colors duration-300">
                        {review.role}
                      </p>
                      <p className="text-accent-light text-sm font-medium group-hover:text-primary transition-colors duration-300">
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
