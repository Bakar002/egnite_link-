import React from 'react';
import ai from '../assets/images/Img (7).png';

export default function DeploymentUseCases() {
  const useCases = [
    {
      id: 1,
      title: "Outbound Video Sales",
      image: ai,
      bgColor: "from-blue-900 to-blue-700"
    },
    {
      id: 2,
      title: "Employee & Product Demos",
      image: "/api/placeholder/300/200",
      bgColor: "from-purple-900 to-blue-800"
    },
    {
      id: 3,
      title: "Social Video Presence",
      image: "/api/placeholder/300/200",
      bgColor: "from-teal-900 to-blue-800"
    },
    {
      id: 4,
      title: "Internal Training",
      image: "/api/placeholder/300/200",
      bgColor: "from-cyan-900 to-blue-800"
    },
    {
      id: 5,
      title: "Enterprise Tutorials",
      image: "/api/placeholder/300/200",
      bgColor: "from-blue-900 to-indigo-800",
      isLarge: true
    }
  ];

  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-white text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
          Deployment Use Cases
        </h1>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* First Row - 2 columns */}
          {useCases.slice(0, 2).map((useCase) => (
            <div
              key={useCase.id}
              className={`relative rounded-2xl overflow-hidden h-48 sm:h-64 bg-gradient-to-br ${useCase.bgColor} group cursor-pointer transition-transform hover:scale-105`}
            >
              {/* Background Pattern/Image */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                {/* Simulated tech pattern */}
                <div className="absolute top-4 left-4 w-12 sm:w-16 h-12 sm:h-16 border border-blue-400/30 rounded"></div>
                <div className="absolute top-8 right-8 w-6 sm:w-8 h-6 sm:h-8 bg-blue-400/20 rounded-full"></div>
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-10 sm:w-12 h-1 bg-blue-400/30"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-white text-base sm:text-lg font-medium">
                  {useCase.title}
                </h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}

          {/* Second Row - 2 columns */}
          {useCases.slice(2, 4).map((useCase) => (
            <div
              key={useCase.id}
              className={`relative rounded-2xl overflow-hidden h-48 sm:h-64 bg-gradient-to-br ${useCase.bgColor} group cursor-pointer transition-transform hover:scale-105`}
            >
              {/* Background Pattern/Image */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
                {/* Simulated video/person imagery */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-16 sm:w-20 h-12 sm:h-16 bg-white/10 rounded-lg"></div>
                <div className="absolute top-10 sm:top-12 right-10 sm:right-12 w-5 sm:w-6 h-5 sm:h-6 bg-cyan-400/30 rounded-full"></div>
                <div className="absolute bottom-10 sm:bottom-12 left-10 sm:left-12 w-12 sm:w-16 h-1.5 sm:h-2 bg-cyan-400/20 rounded"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-white text-base sm:text-lg font-medium">
                  {useCase.title}
                </h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom Large Card */}
        <div className="w-full">
          <div
            className={`relative rounded-2xl overflow-hidden h-56 sm:h-64 bg-gradient-to-br ${useCases[4].bgColor} group cursor-pointer transition-transform hover:scale-[1.02]`}
          >
            {/* Background with space/cosmic theme */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-r from-blue-900 to-indigo-800"></div>
              {/* Simulated space/cosmic elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-blue-400/10 rounded-full"></div>
              <div className="absolute top-6 sm:top-8 left-6 sm:left-8 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400/40 rounded-full"></div>
              <div className="absolute top-12 sm:top-16 right-12 sm:right-16 w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="absolute bottom-12 sm:bottom-16 left-20 sm:left-24 w-1 h-1 bg-blue-400/60 rounded-full"></div>
              <div className="absolute bottom-20 sm:bottom-24 right-24 sm:right-32 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-indigo-400/40 rounded-full"></div>

              {/* Curved line element */}
              <div className="absolute bottom-10 sm:bottom-12 left-1/2 transform -translate-x-1/2 w-36 sm:w-48 h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <h3 className="text-white text-base sm:text-lg font-medium">
                {useCases[4].title}
              </h3>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
