import React from 'react';
import cardoverly from '../assets/images/bgimagecheck.jpeg';
import oneicon from '../assets/images/car1icon.png';
import twoicon from '../assets/images/car2icon.png';
import threeicon from '../assets/images/car3icon.png';

export default function EgniteIntegration() {
  const features = [
    { icon: oneicon, title: "Data from intelligence systems™" },
    { icon: twoicon, title: "Automation from systems engineering™" },
    { icon: threeicon, title: "Communication logic from AI reference™" },
    { icon: threeicon, title: "Workflow automation from AI prototype™" }
  ];

  return (
    <div className=" flex items-start justify-center relative overflow-hidden p-2 sm:p-4 md:p-0">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <img src={cardoverly} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-6 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 md:mt-5">
            Integration with E-Gnité
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base">
            REALTYLink™ functions in harmony with all other divisions of E-Gnite-Link-AI Systems™.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative lg:px-4 lg:py-4 sm:px-2 px-2 md:mt-50">
          {/* Overlay Card Background */}
          <div
            className="rounded-2xl p-4 sm:p-6 md:p-10 border border-gray-700/50"
            style={{
              background: "linear-gradient(335.99deg, #252525 9.77%, #424242 89.74%)"
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 sm:space-y-4 md:space-y-4 group"
                >
                  {/* Icon Container */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-400/30 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-4 sm:p-5 md:p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img src={feature.icon} alt="" className="w-6 sm:w-8 md:w-8 h-6 sm:h-8 md:h-8" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-300 text-xs sm:text-sm md:text-base font-medium px-1 sm:px-2 md:px-2">
                    {feature.title}
                  </h3>
                </div>  
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}