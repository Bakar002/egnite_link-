import React from 'react';

export default function Cards() {
  const cards = [
    {
      title: "AIDRIVE™",
      icon: "J",
      features: [
        "AI marketing of medicines for SEO, ads, social, and body india",
        "Consistent flow of qualified traffic and increased brand visibility"
      ],
      position: "left"
    },
    {
      title: "AIFleet™",
      icon: "J",
      features: [
        "Bot and fleet repository adaptation into qualification engine",
        "Expanded reach into corporate and bank sales channels"
      ],
      position: "right"
    },
    {
      title: "AIMotors™",
      icon: "J",
      features: [
        "Sales performance, workflow automation, inventory, and analytics",
        "Streamlined processes and enhanced productivity"
      ],
      position: "left"
    },
    {
      title: "CARLink Core GPT™",
      icon: "J",
      features: [
        "Synchrony of intelligentSync, dispatching, and clustering",
        "Unified ecosystem with autonomous learning and execution"
      ],
      position: "right"
    }
  ];

  return (
    <div className=" bg-black flex items-start justify-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-white text-5xl font-semibold text-center ">
          Core Architecture
        </h1>
        
        <div className="lg:p-10 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex   ${card.position === 'right' ? 'justify-end' : 'justify-start'} hover:scale-105 transition-transform duration-300 `}
            >
              <div className="relative bg-gray-800 rounded-2xl p-6 mt-5 mx-8 w-full max-w-lg shadow-xl">
                {/* Icon Badge */}
                
                
                {/* Card Title */}
                <h2 className="text-white text-xl font-semibold mb-4">
                  {card.title}
                </h2>
                
                {/* Features List */}
                <div className="space-y-3">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}