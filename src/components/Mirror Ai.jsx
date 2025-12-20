import React from 'react';
import { Brain, Users, Shield } from 'lucide-react';

export default function AIPyramid() {
  const cards = [
    {
      icon: Brain,
      title: 'Mirror AI',
      description: 'Brand Executive Intelligence align strategy, time and logic',
      iconBg: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Custom AI Staff',
      description: 'Trained AI agents crafted for specific roles in your business',
      iconBg: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Standard Modes',
      description: 'Pre-configured agents ready to deploy instantly',
      iconBg: 'bg-blue-500',
    }
  ];

  return (
    <div className="pt-3 bg-black flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative  rounded-2xl border border-zinc-700/50 p-6 sm:p-8 flex flex-col items-center text-center
              transition-all duration-300 ease-out
              hover:border-blue-500/60
              hover:shadow-2xl hover:shadow-blue-500/20
              hover:-translate-y-2 hover:scale-[1.03]"style={{
    background: "linear-gradient(148.43deg, #262628 29.96%, #4B4B4D 81.02%)",
  }}
            >
              {/* Badge */}
              {card.badge && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              )}

              {/* Icon Circle */}
              <div className={`${card.iconBg} rounded-full p-4 mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                <card.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>

              {/* Title */}
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-blue-400">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
