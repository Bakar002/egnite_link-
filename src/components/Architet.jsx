import React from 'react';
import { ArrowRight } from 'lucide-react';
import k from '../assets/images/homeimg.png';

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
                Let’s Architect Your Growth Infrastructure —
                <span className="block text-blue-400">
                  not strategy.
                </span>
              </h1>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                This is not a discovery call. This is the gateway to intelligent
                systems designed to eliminate noise, human bottlenecks, and ad
                dependency. We don’t schedule calls — we begin with architecture.
              </p>

              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                Submit a short diagnostic and our systems team will determine
                whether a deploy consult or a full AI growth stack is the right
                next step for your organization.
              </p>
            </div>

            {/* CTA */}
            <div>
              <a href="/#contact-section">
                <button
                  className="bg-[linear-gradient(97.56deg,#05BDF1_-44.89%,#01375F_95.32%)]
                  hover:opacity-90 text-white font-semibold py-3 px-8 rounded-lg
                  transition-all duration-300 text-sm flex items-center gap-2"
                >
                  Begin Architecture
                  <ArrowRight size={16} />
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthInfrastructureComponent;
