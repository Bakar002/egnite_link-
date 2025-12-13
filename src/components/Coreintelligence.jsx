import React from 'react';
import { Zap } from 'lucide-react';

export default function CoreIntelligenceModules() {
  const modules = [
    {
      id: 1,
      title: "Lead Signal AI™",
      description: "Lead Signal AI™ quickly identifies the most engaged prospects based on their behavior."
    },
    {
      id: 2,
      title: "BehaviorSync AI™",
      description: "Analyze prospect behavior patterns and sync with your sales team insights."
    },
    {
      id: 3,
      title: "TriggerLogic™",
      description: "Smart triggers that activate at the perfect moment to maximize engagement."
    },
    {
      id: 4,
      title: "Priority Grid™",
      description: "Real-time leads, tasks and pipeline prioritization using advanced algorithms."
    },
    {
      id: 5,
      title: "Friction Blast AI™",
      description: "Flags, locates and eliminates obstacles within your lead funnel automatically."
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl font-semibold mb-4">
            Core Intelligence Modules
          </h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            Each Intelligence System™ is equipped to optimize specific
            dimensions of your business logic.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Row - 3 cards */}
          {modules.slice(0, 3).map((module) => (
            <div
              key={module.id}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-white text-center font-semibold text-lg mb-3">
                {module.title}
              </h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}

          {/* Bottom Row - 2 cards centered */}
          <div className="md:col-span-3 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
              {modules.slice(3, 5).map((module) => (
                <div
                  key={module.id}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex justify-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white text-center font-semibold text-lg mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 text-center text-sm leading-relaxed">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}