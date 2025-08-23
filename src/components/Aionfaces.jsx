import React from 'react';

const AionFacesComponent = () => {
  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Images */}
          <div className="relative">
            {/* Main larger image */}
            <div className="relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0c6a0d65516?w=400&h=500&fit=crop&crop=face" 
                alt="AION Technology Demo"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            
            {/* Secondary smaller image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop" 
                alt="Technology Interface"
                className="w-3/4 h-32 object-cover rounded-lg shadow-xl ml-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold mb-8">
              What is <span className="text-cyan-400">AION Faces</span>™?
            </h1>
            
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">▶</span>
                Advanced artificial intelligence system for facial recognition and analysis
              </p>
              
              <p className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">▶</span>
                Real-time processing with 99.8% accuracy in identification
              </p>
              
              <p className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">▶</span>
                Seamless integration with existing security infrastructure
              </p>
              
              <p className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">▶</span>
                Privacy-focused design with encrypted data processing
              </p>
              
              <p className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">▶</span>
                Scalable solution for enterprises of all sizes
              </p>
            </div>

            <div className="pt-6">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AionFacesComponent;