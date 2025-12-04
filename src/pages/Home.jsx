import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Video, ArrowRight, Play } from 'lucide-react';
import { mockData } from '../mock';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialIcons = {
    Instagram: Instagram,
    Youtube: Youtube,
    Video: Video
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
    <video
      src="/assets/videos/home.mp4"   // <-- put your video here
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />

    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
  </div>

        {/* Hero Content */}
        <div
          className={`relative z-10 text-center px-6 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            {mockData.influencer.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 tracking-wide">
            {mockData.influencer.tagline}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            {mockData.socialLinks.map((link) => {
              const Icon = socialIcons[link.icon];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={link.platform}
                >
                  <Icon className="w-6 h-6 text-white" />
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            to="/work"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{mockData.influencer.stats.followers}</div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{mockData.influencer.stats.projects}</div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{mockData.influencer.stats.brands}</div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">Brand Collaborations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-white">Featured Work</h2>
            <Link
              to="/work"
              className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors duration-200"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.reels.slice(0, 3).map((reel) => (
              <div
                key={reel.id}
                className="group relative aspect-[9/16] overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">{reel.title}</h3>
                    <p className="text-gray-300 text-sm">{reel.views} views</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;