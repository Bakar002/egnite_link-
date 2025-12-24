import React from 'react';
import { Zap } from 'lucide-react';

export default function OperationalLogicLoop() {
  const cards = [
    {
      title: "AIDRIVE™",
      description: "Generates inbound digital traffic and manages multichannel visibility."
    },
    {
      title: "AIFleet™",
      description: "Detects and qualifies external commercial and B2B opportunities."
    },
    {
      title: "AIMotors™",
      description: "Oversees internal operations, automates sales workflow, and manages inventory intelligence."
    },
    {
      title: "CARLink Core GPT™",
      description: "Integrates and governs all subsystems, enabling real-time performance analysis."
    }
  ];

  return (
    <div className=" bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Title */}
        <h1 className="text-white text-4xl font-light text-center mb-16">
          Operational Logic Loop
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" from-zinc-800 to-zinc-900 rounded-3xl p-5 hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300 border border-zinc-700/50 hover:scale-105 hover:shadow-md transition-all duration-300 hover:shadow-blue-500/50"
              style={{
                background: "linear-gradient(335.99deg, #252525 9.77%, #424242 89.74%)"
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" fill="white" />
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-medium mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}