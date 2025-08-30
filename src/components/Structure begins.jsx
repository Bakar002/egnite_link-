import React from 'react';
import tree from '../assets/images/Group 21.png'

const StructureHero = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Structure Begins With
              <br />
              <span className="text-blue-400">Smart Advisors</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl">
              Let our AI advisors guide you through complex business decisions with data-driven insights and strategic recommendations.
            </p>
            
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Get Started Today
              </button>
            </div>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Central Hub */}
            <img src={tree} alt="" />
              
              {/* Connecting Lines and Nodes */}
              {/* Top Node */}
              
              
              {/* Top Right Node */}
            
              
              {/* Right Node */}
             
              
              {/* Bottom Right Node */}
              
              
              {/* Bottom Node */}
              
              
              {/* Bottom Left Node */}
              
              
              {/* Left Node */}
             
              
              {/* Top Left Node */}
           
              
              {/* Floating particles */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructureHero;