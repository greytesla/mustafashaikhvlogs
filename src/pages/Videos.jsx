import React, { useState } from "react";
import { Play, Clock, Eye } from "lucide-react";
import { mockData } from "../mock";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(mockData.videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Videos
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Long-form content, tutorials, and behind-the-scenes from my YouTube
            channel.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">

            {/* If playing: show YouTube iframe */}
            {isPlaying ? (
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              /* Thumbnail state before play */
              <div
                className="relative w-full h-full group cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                  <h2 className="text-white font-bold text-2xl mb-3">
                    {selectedVideo.title}
                  </h2>
                  <div className="flex items-center gap-6 text-sm text-gray-300">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {selectedVideo.views}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {selectedVideo.duration}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.videos.map((video) => (
            <div
              key={video.id}
              onClick={() => {
                setSelectedVideo(video);
                setIsPlaying(false); // reset to thumbnail until clicked
              }}
              className={`group cursor-pointer transition-all duration-300 ${
                selectedVideo.id === video.id ? "ring-2 ring-white rounded-lg" : ""
              }`}
            >
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                  {video.duration}
                </div>
              </div>

              <h3 className="text-white font-semibold mb-2 group-hover:text-gray-300 transition-colors duration-200">
                {video.title}
              </h3>
              <p className="text-gray-400 text-sm">{video.views} views</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
