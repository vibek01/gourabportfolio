import React from 'react';
import { Youtube, Play, Eye, ThumbsUp } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  likes: string;
  duration: string;
  description: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'How I Edit Viral TikToks (Complete Tutorial)',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: '2.4M',
    likes: '180K',
    duration: '15:42',
    description: 'Complete breakdown of my editing process for viral short-form content'
  },
  {
    id: '2',
    title: 'After Effects Tricks That Will Blow Your Mind',
    thumbnail: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: '1.8M',
    likes: '142K',
    duration: '12:28',
    description: 'Advanced After Effects techniques I use in professional projects'
  },
  {
    id: '3',
    title: 'Color Grading Like a Hollywood Pro',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: '1.2M',
    likes: '95K',
    duration: '18:15',
    description: 'Professional color grading techniques for cinematic looks'
  },
  {
    id: '4',
    title: 'Building My Dream Editing Setup (2024)',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: '980K',
    likes: '78K',
    duration: '10:33',
    description: 'Complete tour of my editing workspace and gear recommendations'
  },
  {
    id: '5',
    title: 'Premiere Pro vs After Effects: When to Use Each',
    thumbnail: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: '756K',
    likes: '62K',
    duration: '14:07',
    description: 'Comprehensive guide on choosing the right tool for your project'
  },
  {
    id: '6',
    title: 'Editing a $50K Commercial Start to Finish',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    views: '1.5M',
    likes: '120K',
    duration: '22:45',
    description: 'Behind-the-scenes look at editing a high-budget commercial project'
  }
];

const MyYouTube: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-red-900/10 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
              <Youtube className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-8">
            My <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent hover:from-white hover:to-red-500 transition-all duration-500">YouTube</span>
          </h2>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 hover:text-white transition-colors duration-500">
            I share my editing knowledge and behind-the-scenes content on YouTube. From tutorials to project breakdowns, 
            there's something for every video editor looking to level up their skills.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-gray-300 hover:text-white transition-colors duration-500">
            <div className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-red-400" />
              <span className="font-semibold">12M+ Total Views</span>
            </div>
            <div className="flex items-center space-x-2">
              <ThumbsUp className="h-5 w-5 text-red-400" />
              <span className="font-semibold">850K+ Likes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Youtube className="h-5 w-5 text-red-400" />
              <span className="font-semibold">180K Subscribers</span>
            </div>
          </div>
        </div>
        
        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-black/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-red-500/20 hover:bg-red-900/10 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-500 cursor-pointer hover:scale-105"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
                    <Play className="h-8 w-8 text-black ml-1 animate-pulse" />
                  </div>
                </div>
                
                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/90 border border-red-500/30 rounded px-2 py-1 text-white text-sm font-medium">
                  {video.duration}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-300 transition-colors duration-500">
                  {video.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-white transition-colors duration-300">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-red-400" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="h-4 w-4 text-red-400" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Subscribe button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-gradient-to-r from-red-500 to-black border-2 border-red-500 rounded-full text-white font-semibold text-lg hover:from-black hover:to-red-500 hover:border-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-110">
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center">
              <Youtube className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Subscribe to My Channel
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyYouTube;