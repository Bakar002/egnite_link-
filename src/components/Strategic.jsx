import React from 'react';
import c1 from '../assets/images/image.png';
import c2 from '../assets/images/image (1).png';
import c3 from '../assets/images/image (2).png';
import c4 from '../assets/images/image (3).png';
import c5 from '../assets/images/image (4).png';
import c6 from '../assets/images/image (5).png';

const StrategicUseCases = () => {
  const useCases = [
    {
      title: "Agencies",
      description: "AI creative content campaigns, manages client relationships and optimizes marketing operations.",
      image: c1,
    },
    {
      title: "Clinics",
      description: "AI helps schedule, manages workflows, helps patient care coordination and healthcare operations.",
      image: c2,
    },
    {
      title: "Tech/SaaS",
      description: "AI supports roadmaps, data infrastructure, handles customer support and drives technical innovation.",
      image: c3,
    },
    {
      title: "Real Estate",
      description: "AI manages property listings, client relationships and handles transactions end to end.",
      image: c4,
    },
    {
      title: "Coaches/Edu",
      description: "AI creates personalized programs, manages student progress, and enhances educational delivery.",
      image: c5,
    },
    {
      title: "Retail/E-Com",
      description: "AI optimizes inventory, manages customer experience, handles order fulfillment and boosts sales.",
      image:c6,
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Strategic Use Cases
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Content Section - Top Half */}
              <div className="p-6 h-32 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                  {useCase.description}
                </p>
              </div>
              
              {/* Image Section - Bottom Half */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-blue-900/30 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategicUseCases;