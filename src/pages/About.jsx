import React from 'react';
import { Camera, Film, Palette, Award } from 'lucide-react';
import { mockData } from '../mock';

const About = () => {
  const skills = [
    { icon: Camera, name: 'Content Creation', description: 'Crafting visual stories that captivate' },
    { icon: Film, name: 'Video Production', description: 'From concept to final cut' },
    { icon: Palette, name: 'Creative Direction', description: 'Vision meets execution' },
    { icon: Award, name: 'Brand Strategy', description: 'Building authentic connections' }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] mb-20 overflow-hidden">
        <img
          src="/assets/images/banner.jpg"
          alt="Mustafa Shaikh"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{mockData.influencer.name}</h1>
            <p className="text-2xl text-gray-300">{mockData.influencer.tagline}</p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        {/* Bio Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>{mockData.influencer.bio}</p>
            <p>
              Over the years, I've had the privilege of working with diverse brands and telling countless stories through the lens. 
              Each project is an opportunity to push creative boundaries and deliver content that not only looks stunning but also 
              drives meaningful engagement.
            </p>
            <p>
              When I'm not behind the camera, you'll find me exploring new techniques, staying up-to-date with the latest trends in 
              content creation, and constantly seeking inspiration from the world around me.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-3 gap-8 py-12 border-y border-gray-800">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{mockData.influencer.stats.followers}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{mockData.influencer.stats.projects}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{mockData.influencer.stats.brands}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Brands</div>
            </div>
          </div>
        </section>

        {/* Skills/Expertise */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{skill.name}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Create Together</h2>
          <p className="text-gray-400 text-lg mb-8">
            Ready to bring your brand's story to life? Let's talk about your next project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;