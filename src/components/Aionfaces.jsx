import React from 'react';
import aiOnDemo from '../assets/images/aion2nd.png'; // Replace with actual image path
import arrow from '../assets/images/Feather Icon.png'; // Replace with actual image path

const AionFacesComponent = () => {
  return (
    <div className="bg-black  p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Images */}
          <div className="relative">
            {/* Main larger image */}
            <div className="relative mb-6">
              <img 
                src={aiOnDemo}
                alt="AION Technology Demo"
                className="w-full  object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            
            
          </div>

          {/* Right Column - Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold mb-8">
              What is <span className="text-cyan-400">AION Faces</span>™?
            </h1>
            <p>It allows you to deploy digital brand figures — trained to speak, explain, and guide — using humanlike AI models backed by structured intelligence.</p>
            
            <div className="space-y-4 text-gray-300 ">
              <p className="flex items-start ">
                <img src={arrow} alt="" />
                Delivers video content in your tone
              </p>
              
              <p className="flex items-start">
                <img src={arrow} alt="" />
                Adapts to funnel stage or behavior
              </p>
              
              <p className="flex items-start">
                <img src={arrow} alt="" />
                Operates as a synthetic brand extension
              </p>
              
              <p className="flex items-start">
                <img src={arrow} alt="" />
                Maintains perfect message fidelity
              </p>
              
              <p className="flex items-start">
                <img src={arrow} alt="" />
                Works without studio, retakes, or emotion fatigue
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AionFacesComponent;