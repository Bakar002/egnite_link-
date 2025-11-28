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
                Let's Architect Your Growth
                Infrastructure — not strategy.Short diagnostic — deploy consult or stack.
              </h1>
             
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                This is not a discovery call. This is the gateway to intelligent systems, designed to eliminate noise, human bottlenecks, and ad dependency. We don't schedule calls. We begin with architecture.
              </p>
            </div>
            
          

            {/* Email Input Form */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Your Email address ..."
                className="flex-1 bg-black border border-gray-700 rounded-lg sm:rounded-r-none px-4 py-3 text-white text-sm placeholder-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-[linear-gradient(97.56deg,#05BDF1_-44.89%,#01375F_95.32%)] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg sm:rounded-l-none transition-all duration-300 text-sm whitespace-nowrap">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthInfrastructureComponent;