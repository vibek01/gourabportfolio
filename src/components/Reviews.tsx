import React from 'react';
import { Star, Quote } from 'lucide-react';

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
    id: '1',
    name: 'Sarah Johnson',
    role: 'Content Creator',
    company: '@sarahjcreates',
    rating: 5,
    review: 'Gourab transformed my content completely! His editing style is exactly what Gen Z wants. My engagement increased by 400% after working with him.',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Marketing Director',
    company: 'TechFlow Solutions',
    rating: 5,
    review: 'Outstanding work! Gourab delivered exactly what we needed for our viral campaign. The attention to detail and understanding of current trends is impressive.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'YouTuber',
    company: '2.5M Subscribers',
    rating: 5,
    review: 'Best editor I\'ve ever worked with! Gourab knows exactly how to keep viewers hooked from start to finish. My average view duration increased by 60%.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '4',
    name: 'David Park',
    role: 'Brand Manager',
    company: 'Urban Fashion Co.',
    rating: 5,
    review: 'Gourab\'s editing brought our brand story to life in ways we never imagined. The final videos exceeded all our expectations and drove amazing results.',
    avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Influencer',
    company: '1.8M TikTok Followers',
    rating: 5,
    review: 'Working with Gourab was a game-changer! His edits are so smooth and trendy. Every video he touches becomes a hit. Highly recommend!',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '6',
    name: 'Alex Kumar',
    role: 'CEO',
    company: 'StartupHub',
    rating: 5,
    review: 'Incredible talent! Gourab helped us create promotional videos that perfectly captured our brand essence. The ROI on our video marketing improved dramatically.',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-red-900/5 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-8">
          Client <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent hover:from-white hover:to-red-500 transition-all duration-500">Reviews</span>
        </h2>
        
        <p className="text-center text-gray-300 text-xl mb-16 max-w-3xl mx-auto hover:text-white transition-colors duration-500">
          Don't just take my word for it. Here's what my clients say about working with me.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/20 hover:bg-red-900/10 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-500 hover:scale-105"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-red-400 opacity-60 group-hover:opacity-100 group-hover:text-white transition-all duration-300" />
              </div>
              
              {/* Stars */}
              <div className="flex mb-6">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 text-red-400 fill-current group-hover:text-white transition-colors duration-300" />
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-gray-300 leading-relaxed mb-8 group-hover:text-white transition-colors duration-500">
                "{review.review}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-500 group-hover:border-white transition-colors duration-300">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-red-300 transition-colors duration-300">{review.name}</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{review.role}</p>
                  <p className="text-red-400 text-sm font-medium group-hover:text-white transition-colors duration-300">{review.company}</p>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;