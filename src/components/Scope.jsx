import React from "react";

const dataTop = [
  {
    id: "01",
    title: "Digital Presence & Marketing Foundation",
    desc: "Establish digital visibility and attract leads. Immediate visibility and lead generation begin across digital channels.",
  },
  {
    id: "02",
    title: "Lead Management & Automation",
    desc: "Organize and automate the dealership's lead handling and CRM systems. Higher lead conversion through intelligent automation and faster response.",
  },
  {
    id: "03",
    title: "Data Intelligence & Predictive Marketing",
    desc: "Implement data-driven decision systems and dynamic marketing. Marketing evolves from static campaigns to adaptive intelligence.",
  },
];

const dataBottom = [
  {
    id: "02",
    title: "AI Integration & Operational Intelligence",
    desc: "Integrate AI into internal operations and automated processing. The dealership shifts to AI-managed operations and opportunity discovery.",
  },
  {
    id: "03",
    title: "AI Infrastructure & Autonomy",
    desc: "Complete transition to fully autonomous digital infrastructure. The dealership becomes a self-regulating digital enterprise.",
  },
];

export default function ScopeOfWork() {
  return (
    <div className="w-full min-h-screen bg-black text-white py-20 px-6">

      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-16">
        Scope of Work
      </h1>

      {/* Top Row (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {dataTop.map((item) => (
          <div
            key={item.id}
            className="bg-[#111418] rounded-2xl p-7 shadow-lg border border-white/50
            relative overflow-hidden w-full"
          >
            <div className="absolute top-5 left-5 bg-[#00AEEF] text-white px-4 py-1 rounded-lg text-sm font-semibold">
              {item.id}
            </div>

            <h2 className="text-xl font-semibold mt-10 mb-3">{item.title}</h2>
            <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row (2 Cards - Stack on Small/Medium, Side by Side on Large) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:max-w-[calc(2*380px+2rem)] lg:mx-auto">
        {dataBottom.map((item) => (
          <div
            key={item.id}
            className="bg-[#111418] rounded-2xl p-7 shadow-lg border border-white/50
            relative overflow-hidden w-full"
          >
            <div className="absolute top-5 left-5 bg-[#00AEEF] text-white px-4 py-1 rounded-lg text-sm font-semibold">
              {item.id}
            </div>

            <h2 className="text-xl font-semibold mt-10 mb-3">{item.title}</h2>
            <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}