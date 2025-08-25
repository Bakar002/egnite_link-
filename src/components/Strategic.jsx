import React from 'react';

const StrategicUseCases = () => {
  const useCases = [
    {
      title: "Agencies",
      description: "AI creative content campaigns, manages client relationships and optimizes marketing operations.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Clinics",
      description: "AI helps schedule, manages workflows, helps patient care coordination and healthcare operations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Tech/SaaS",
      description: "AI supports roadmaps, data infrastructure, handles customer support and drives technical innovation.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Real Estate",
      description: "AI manages property listings, client relationships and handles transactions end to end.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Coaches/Edu",
      description: "AI creates personalized programs, manages student progress, and enhances educational delivery.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Retail/E-Com",
      description: "AI optimizes inventory, manages customer experience, handles order fulfillment and boosts sales.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Strategic Use Cases
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                  {useCase.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="h-40 sm:h-48 relative overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
