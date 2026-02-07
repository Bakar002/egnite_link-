import React from "react";

export default function CoreArchitecture() {
  const items = [
    {
      title: "AIDRIVE™",
      icon: "💠",
      points: [
        "AI marketing infrastructure for SEO, ads, social, and lead intake",
        "Consistent flow of qualified traffic and increased brand visibility",
      ],
    },
    {
      title: "AIFleet™",
      icon: "💠",
      points: [
        "B2B and fleet opportunity acquisition and qualification engine",
        "Expanded reach into corporate and bulk sales segments",
      ],
    },
    {
      title: "AIMotors™",
      icon: "💠",
      points: [
        "Sales performance, workflow automation, inventory, and analytics",
        "Streamlined processes and enhanced profitability",
      ],
    },
    {
      title: "CARLink Core GPT™",
      icon: "💠",
      points: [
        "Supervisory AI intelligence logic, decisioning, and adaptation",
        "Unified ecosystem with autonomous learning and execution",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-16 px-4">
      <h1 className="text-white text-3xl md:text-4xl font-semibold mb-12 text-center">
        Core Architecture
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#161616] rounded-xl p-6 border border-gray-800 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-cyan-400 text-3xl">{item.icon}</div>
              <h2 className="text-white text-xl font-semibold">{item.title}</h2>
            </div>

            <ul className="text-gray-300 space-y-2 text-sm">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 text-lg">■</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
