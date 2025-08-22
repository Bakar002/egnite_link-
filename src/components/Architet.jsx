import React from 'react';
import { ArrowRight } from 'lucide-react';

const IsometricGrowthComponent = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6" style={{backgroundColor: '#000000'}}>
      <div className="max-w-6xl w-full bg-gray-800 rounded-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Column - 3D Isometric Illustration */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
            {/* 3D Isometric Design using CSS */}
            <div className="relative">
              {/* Main Platform Base */}
              <div className="relative transform rotate-12 -skew-x-12 scale-75 lg:scale-90">
                {/* Base Platform */}
                <div className="w-64 h-32 bg-gradient-to-br from-blue-600 to-blue-800 relative transform-gpu"
                     style={{
                       clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 85%)',
                       transform: 'rotateX(60deg) rotateY(-45deg)'
                     }}>
                </div>
                
                {/* Server Blocks */}
                <div className="absolute -top-16 left-8 space-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 transform -rotate-12 skew-x-12 shadow-lg"></div>
                  <div className="w-16 h-12 bg-gradient-to-br from-blue-400 to-blue-600 transform -rotate-12 skew-x-12 shadow-lg"></div>
                </div>
                
                <div className="absolute -top-20 left-28 space-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 transform -rotate-12 skew-x-12 shadow-lg"></div>
                  <div className="w-14 h-10 bg-gradient-to-br from-blue-500 to-blue-700 transform -rotate-12 skew-x-12 shadow-lg"></div>
                </div>
                
                <div className="absolute -top-12 left-48 space-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 transform -rotate-12 skew-x-12 shadow-lg"></div>
                  <div className="w-12 h-8 bg-gradient-to-br from-blue-400 to-blue-600 transform -rotate-12 skew-x-12 shadow-lg"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-24 left-12">
                  <div className="w-6 h-6 bg-blue-400 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0s'}}></div>
                </div>
                <div className="absolute -top-32 left-32">
                  <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}></div>
                </div>
                <div className="absolute -top-20 left-56">
                  <div className="w-5 h-5 bg-blue-300 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="absolute -top-28 left-20">
                  <div className="w-3 h-3 bg-blue-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}></div>
                </div>
                
                {/* Additional Geometric Shapes */}
                <div className="absolute -top-16 right-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 shadow-lg"></div>
                </div>
                <div className="absolute -top-8 right-16">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg"></div>
                </div>
              </div>
              
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-full scale-150 animate-pulse"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="p-8 lg:p-12 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Less Architect Your Growth.
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300">
                Infrastructure short designatic — deploy consult or stack.
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
              </p>
            </div>
            
            <div className="space-y-2 text-gray-400">
              <p>Visit Email address</p>
              <p>hello@domain.com</p>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 group transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              <span>Get Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsometricGrowthComponent;