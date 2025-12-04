import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { mockData } from '../mock';

const Work = () => {
  const [playingId, setPlayingId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A curated collection of my latest reels and content pieces. Each project tells a unique story.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative aspect-[9/16] overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredId(reel.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setPlayingId(reel.id)}
            >
              {/* If Playing → Instagram Autoplay Embed */}
              {playingId === reel.id ? (
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.instagram.com/reel/${reel.reelId}/embed/?autoplay=1&mute=1`}
                  allow="autoplay; encrypted-media; fullscreen"
                  frameBorder="0"
                ></iframe>
              ) : (
                <>
                  {/* Thumbnail */}
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                    loading="lazy"
                  />

                  {/* Overlay with Info */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 ${
                      hoveredId === reel.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-bold text-xl">{reel.title}</h3>
                        <ExternalLink className="w-5 h-5 text-white/80" />
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-300">{reel.views} views</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-300">{reel.platform}</span>
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredId === reel.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>

                  {/* Film Grain Effect */}
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                      backgroundRepeat: 'repeat',
                    }}
                  ></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
