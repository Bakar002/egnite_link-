import React from 'react';
import { ArrowRight } from 'lucide-react';
import k from '../assets/images/k.png';

const GrowthInfrastructureComponent = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="max-w-6xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[500px] lg:min-h-[600px]">
          {/* Left Column - Image */}
          <div className="relative p-6 sm:p-8 lg:p-12 flex items-center justify-center min-h-[250px] sm:min-h-[350px] lg:min-h-[400px]">
            <img
              src={k}
              alt="Growth Infrastructure"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>

          {/* Right Column - Content */}
          <div className="p-6 sm:p-8 lg:p-12 space-y-6 text-white">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Let's Architect Your Growth.
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-300">
                Infrastructure™ — short diagnostic — deploy consult or stack.
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <p>Visit Email address</p>
              <p className="text-white">hello@domain.com</p>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center space-x-2 group transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base">
              <span>Get Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthInfrastructureComponent;
