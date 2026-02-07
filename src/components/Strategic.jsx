import React from 'react';

const StrategicUseCases = ({ useCases,title }) => {
  return (
    <div className="bg-black px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
           {title}
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
