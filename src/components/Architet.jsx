import React from 'react';
import { ArrowRight } from 'lucide-react';

const GrowthInfrastructureComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{backgroundColor: '#0a0a0a'}}>
      <div className="max-w-6xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
        <div className="grid lg:grid-cols-2 items-center min-h-[600px]">
          {/* Left Column - Image */}
          <div className="relative p-8 lg:p-12 flex items-center justify-center min-h-[400px] bg-gradient-to-br from-gray-800 to-gray-900">
            {/* Yahan aap apni image ka src dal dein */}
            <img 
              src="your-image-path-here.png" 
              alt="Growth Infrastructure" 
              className="w-full h-auto max-w-sm object-contain"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="p-8 lg:p-12 space-y-6 text-white">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                Let's Architect Your Growth.
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-gray-300">
                Infrastructure™ — short diagnostic — deploy consult or stack.
              </h2>
              <p className="text-gray-400 leading-relaxed text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
           
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Visit Email address</p>
              <p className="text-white">hello@domain.com</p>
            </div>
            
            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2 group transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              <span>Get Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthInfrastructureComponent;