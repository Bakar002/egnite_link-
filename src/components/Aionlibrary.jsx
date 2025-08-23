import React from 'react';

const AionModelLibrary = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 text-white">
            Prebuilt AiON Model Library
          </h1>
          <p className="text-gray-400 text-base">
            5 GenAI maintains a suite of high-performance AI processors,<br/>
            ready-to-deploy for industry-specific needs.
          </p>
        </div>

        {/* Models Grid */}
        <div className="space-y-6">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* AiON Pro */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-200 cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                </div>
                <div className="text-blue-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AiON Pro™</h3>
              <p className="text-sm text-gray-400">AGI-complete GenAI Agent</p>
            </div>

            {/* AiON Core */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-200 cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-400 rounded"></div>
                </div>
                <div className="text-green-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AiON Core™</h3>
              <p className="text-sm text-gray-400">Multimodal GenAI for collaboration</p>
            </div>

            {/* AiON Commerce */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-200 cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-400 rounded"></div>
                </div>
                <div className="text-purple-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"/>
                  </svg>
                  </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AiON Commerce™</h3>
              <p className="text-sm text-gray-400">Commerce-enabled voice agents</p>
            </div>
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
              {/* AiON News */}
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-200 cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-400 rounded"></div>
                  </div>
                  <div className="text-orange-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AiON News™</h3>
                <p className="text-sm text-gray-400">News-focused AI hybrid agents</p>
              </div>

              {/* AiON Civic */}
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-200 cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyan-400 rounded"></div>
                  </div>
                  <div className="text-cyan-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AiON Civic™</h3>
                <p className="text-sm text-gray-400">Government healthcare, transport</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AionModelLibrary;