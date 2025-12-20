import React from "react";
import { Zap } from "lucide-react";

const AIAutomationComponent = () => {
  const cards = [
    {
      title: "40% Drop In Lead Conversion Rate",
      desc: "Flagged → Funnel audit triggered",
    },
    {
      title: "New Campaign Gains Traction",
      desc: "Mirror AI notified to initiate expansion sequence",
    },
    {
      title: "Certain Offers Are Accepted 3x Faster",
      desc: "Priority Grid adjusts sequence to front-load those offers",
    },
    {
      title: "Calendar Gaps Detected Next Week",
      desc: "Behavioral retargeting auto-triggered",
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-14">
          Strategic Use Cases
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="
                bg-[linear-gradient(145deg,#1f1f1f,#0f0f0f)]
                rounded-2xl
                p-6
                border border-white/10
                transition-all duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
                cursor-pointer
              "
            >
              {/* Icon */}
              <div className="w-11 h-11 mb-5 rounded-full bg-blue-600/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAutomationComponent;
