import React from 'react';

const GrowthMethodPhases = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-white text-2xl md:text-5xl font-light mb-4 md:mb-6 tracking-wide">
            Phases of the Growth Method
          </h1>
          <p className="text-gray-400 text-base md:text-xl font-light px-4">
            Each phase builds the system. The result is permanent
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Main horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-600 transform -translate-y-1/2 z-0"></div>

          {/* Phase containers */}
          <div className="flex justify-between items-center relative">

            {/* Ignition Phase */}
            <div className="flex flex-col items-center relative z-10">
              {/* Vertical line going up */}
              <div className="w-px h-24 bg-gray-600 mb-2"></div>
              {/* Circle marker */}
              <div className="w-3 h-3 bg-white rounded-full mb-4"></div>
              <div className="text-left max-w-48">
                <h3 className="text-white text-lg font-light mb-3">Ignition</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Define target, configure system, prepare outreach
                </p>
              </div>
            </div>

            {/* Acceleration Phase */}
            <div className="flex flex-col items-center relative z-10">
              <div className="text-left max-w-48 mb-4">
                <h3 className="text-white text-lg font-light mb-3">Acceleration</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Launch multi-channel contact and engagement
                </p>
              </div>
              {/* Circle marker */}
              <div className="w-3 h-3 bg-white rounded-full mb-2"></div>
              {/* Vertical line going down */}
              <div className="w-px h-24 bg-gray-600"></div>
            </div>

            {/* Optimization Phase */}
            <div className="flex flex-col items-center relative z-10">
              {/* Vertical line going up */}
              <div className="w-px h-24 bg-gray-600 mb-2"></div>
              {/* Circle marker */}
              <div className="w-3 h-3 bg-white rounded-full mb-4"></div>
              <div className="text-left max-w-48">
                <h3 className="text-white text-lg font-light mb-3">Optimization</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Adapt messaging via behavioral feedback loops
                </p>
              </div>
            </div>

            {/* Expansion Phase */}
            <div className="flex flex-col items-center relative z-10">
              <div className="text-left max-w-48 mb-4">
                <h3 className="text-white text-lg font-light mb-3">Expansion</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automate service delivery and logic-based fulfillment
                </p>
              </div>
              {/* Circle marker */}
              <div className="w-3 h-3 bg-white rounded-full mb-2"></div>
              {/* Vertical line going down */}
              <div className="w-px h-24 bg-gray-600"></div>
            </div>

            {/* Evolution Phase */}
            <div className="flex flex-col items-center relative z-10">
              {/* Vertical line going up */}
              <div className="w-px h-24 bg-gray-600 mb-2"></div>
              {/* Circle marker */}
              <div className="w-3 h-3 bg-white rounded-full mb-4"></div>
              <div className="text-left max-w-48">
                <h3 className="text-white text-lg font-light mb-3">Evolution</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Continuous intelligence upgrades via human-AI insight
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative max-w-md mx-auto">
            {/* Main vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-600 z-0"></div>

            <div className="space-y-12">
              {/* Ignition Phase */}
              <div className="flex items-start relative z-10">
                {/* Circle marker */}
                <div className="w-3 h-3 bg-white rounded-full mr-8 mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-light mb-3">Ignition</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Define target, configure system, prepare outreach
                  </p>
                </div>
              </div>

              {/* Acceleration Phase */}
              <div className="flex items-start relative z-10">
                {/* Circle marker */}
                <div className="w-3 h-3 bg-white rounded-full mr-8 mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-light mb-3">Acceleration</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Launch multi-channel contact and engagement
                  </p>
                </div>
              </div>

              {/* Optimization Phase */}
              <div className="flex items-start relative z-10">
                {/* Circle marker */}
                <div className="w-3 h-3 bg-white rounded-full mr-8 mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-light mb-3">Optimization</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Adapt messaging via behavioral feedback loops
                  </p>
                </div>
              </div>

              {/* Expansion Phase */}
              <div className="flex items-start relative z-10">
                {/* Circle marker */}
                <div className="w-3 h-3 bg-white rounded-full mr-8 mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-light mb-3">Expansion</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Automate service delivery and logic-based fulfillment
                  </p>
                </div>
              </div>

              {/* Evolution Phase */}
              <div className="flex items-start relative z-10">
                {/* Circle marker */}
                <div className="w-3 h-3 bg-white rounded-full mr-8 mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-light mb-3">Evolution</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Continuous intelligence upgrades via human-AI insight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthMethodPhases;