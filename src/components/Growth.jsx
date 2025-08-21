import React from 'react';

const GrowthMethodPhases = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white text-4xl font-light mb-4">Phases of the Growth Method</h1>
          <p className="text-gray-400 text-lg">Each phase builds the system. The result is permanent</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-600 transform -translate-y-1/2"></div>

          {/* Phase containers */}
          <div className="flex justify-between items-center relative">
            
            {/* Ignition Phase */}
            <div className="flex flex-col items-center relative">
              {/* Vertical line */}
              <div className="absolute top-0 w-px h-32 bg-gray-600 transform -translate-y-16"></div>
              {/* Circle marker */}
              <div className="w-3 h-3 bg-white rounded-full mb-8 relative z-10"></div>
              <div className="text-center max-w-48">
                <h3 className="text-white text-xl font-light mb-4">Ignition</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Define target, configure system, prepare content, and kickoff
                </p>
              </div>
            </div>

            {/* Acceleration Phase */}
            <div className="flex flex-col items-center relative">
              {/* Vertical line */}
              <div className="absolute bottom-0 w-px h-32 bg-gray-600 transform translate-y-16"></div>
              <div className="text-center max-w-48 mb-8">
                <h3 className="text-white text-xl font-light mb-4">Acceleration</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Increase momentum content and engagement
                </p>
              </div>
              {/* Circle marker */}
              <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
            </div>

            {/* Optimization Phase */}
            <div className="flex flex-col items-center relative">
              {/* Vertical line */}
              <div className="absolute top-0 w-px h-32 bg-gray-600 transform -translate-y-16"></div>
              {/* Circle marker */}
              <div className="w-3 h-3 bg-white rounded-full mb-8 relative z-10"></div>
              <div className="text-center max-w-48">
                <h3 className="text-white text-xl font-light mb-4">Optimization</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Adapt messaging via behavioral feedback loops
                </p>
              </div>
            </div>

            {/* Expansion Phase */}
            <div className="flex flex-col items-center relative">
              {/* Vertical line */}
              <div className="absolute bottom-0 w-px h-32 bg-gray-600 transform translate-y-16"></div>
              <div className="text-center max-w-48 mb-8">
                <h3 className="text-white text-xl font-light mb-4">Expansion</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Scale-up service delivery and logic-based fulfillment
                </p>
              </div>
              {/* Circle marker */}
              <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
            </div>

            {/* Evolution Phase */}
            <div className="flex flex-col items-center relative">
              {/* Vertical line */}
              <div className="absolute top-0 w-px h-32 bg-gray-600 transform -translate-y-16"></div>
              {/* Circle marker */}
              <div className="w-3 h-3 bg-white rounded-full mb-8 relative z-10"></div>
              <div className="text-center max-w-48">
                <h3 className="text-white text-xl font-light mb-4">Evolution</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Continuous intelligence upgrades via human-AI insight
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthMethodPhases;