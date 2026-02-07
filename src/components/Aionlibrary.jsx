import React from 'react';
import icon from '../assets/images/Icon.png';

const AionModelLibrary = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 text-white">
            Prebuilt AiON Model Library
          </h1>
          <p className="text-gray-400 text-base">
            E-Gnite maintains a vault of high-performance AI presenters, ready to deploy for industryspecific needs.
          </p>
        </div>

        {/* Models Grid */}
        <div className="space-y-6">

          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-6 lg:max-w-4xl">

            {/* AiON Pro */}
            <div className="bg-[linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)]
                            backdrop-blur border border-gray-700 rounded-xl p-6
                            transition-all duration-300 ease-out cursor-pointer
                            hover:-translate-y-2 hover:scale-[1.03]
                            hover:border-cyan-400 hover:shadow-[0_10px_40px_rgba(0,174,225,0.25)]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white mb-2">AiON Pro™</h3>
                <img src={icon} alt="" />
              </div>
              <p className="text-sm text-gray-400">B2B, consulting, SaaS, legal</p>
            </div>

            {/* AiON Core */}
            <div className="bg-[linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)]
                            backdrop-blur border border-gray-700 rounded-xl p-6
                            transition-all duration-300 ease-out cursor-pointer
                            hover:-translate-y-2 hover:scale-[1.03]
                            hover:border-cyan-400 hover:shadow-[0_10px_40px_rgba(0,174,225,0.25)]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white mb-2">AiON Core™</h3>
                <img src={icon} alt="" />
              </div>
              <p className="text-sm text-gray-400">Wellness, coaching, education</p>
            </div>

            {/* AiON Commerce */}
            <div className="bg-[linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)]
                            backdrop-blur border border-gray-700 rounded-xl p-6
                            transition-all duration-300 ease-out cursor-pointer
                            hover:-translate-y-2 hover:scale-[1.03]
                            hover:border-cyan-400 hover:shadow-[0_10px_40px_rgba(0,174,225,0.25)]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white mb-2">AiON Commerce™</h3>
                <img src={icon} alt="" />
              </div>
              <p className="text-sm text-gray-400">Consumer product storytelling</p>
            </div>
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-13 max-w-2xl w-full">

              {/* AiON Nova */}
              <div className="bg-[linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)]
                              backdrop-blur border border-gray-700 rounded-xl p-6
                              transition-all duration-300 ease-out cursor-pointer
                              hover:-translate-y-2 hover:scale-[1.03]
                              hover:border-cyan-400 hover:shadow-[0_10px_40px_rgba(0,174,225,0.25)]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white mb-2">AiON Nova™</h3>
                  <img src={icon} alt="" />
                </div>
                <p className="text-sm text-gray-400">Tech-forward, futuristic brands</p>
              </div>

              {/* AiON Civic */}
              <div className="bg-[linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)]
                              backdrop-blur border border-gray-700 rounded-xl p-6
                              transition-all duration-300 ease-out cursor-pointer
                              hover:-translate-y-2 hover:scale-[1.03]
                              hover:border-cyan-400 hover:shadow-[0_10px_40px_rgba(0,174,225,0.25)]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white mb-2">AiON Civic™</h3>
                  <img src={icon} alt="" />
                </div>
                <p className="text-sm text-gray-400">Government, healthcare, nonprofit</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AionModelLibrary;
