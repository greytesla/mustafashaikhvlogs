import React from 'react';
import { ExternalLink, Briefcase } from 'lucide-react';
import { mockData } from '../mock';

const Collaborations = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Collaborations</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Trusted by leading brands to create compelling content that drives results and tells meaningful stories.
          </p>
        </div>

        {/* Collaborations Grid */}
        <div className="space-y-20">
          {mockData.collaborations.map((collab, index) => (
            <div
              key={collab.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative group overflow-hidden rounded-lg ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="aspect-video">
                  <img
                    src={collab.image}
                    alt={collab.brand}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="inline-flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full mb-4">
                  <Briefcase className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm font-medium">{collab.type}</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">{collab.brand}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {collab.description}
                </p>
                <button className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 group">
                  <span className="font-semibold">View Project</span>
                  <ExternalLink className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-300"
              >
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;