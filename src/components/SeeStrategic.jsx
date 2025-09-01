import { Zap } from "lucide-react";

export default function StrategicOutcomes() {
  const outcomes = [
    {
      title: "From Chaos to Systems",
      description: "Move from messy, dysfunctional business and personal lives to organized systems with predictable outcomes."
    },
    {
      title: "From Traffic to Targeting",
      description: "Convert the heavy volume of inbound & outbound potential related leads into a more efficient & cost effective process."
    },
    {
      title: "From Staff to Intelligence",
      description: "Develop human capital intelligence to replace an individual based process with an autonomous one that builds capacious structures."
    },
    {
      title: "From Noise to Signal",
      description: "Eliminate the noise from data, communications, lead scoring and acquisition relationships—to direct new product creation."
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <h2 className="text-white text-2xl font-semibold text-center mb-12">
          See Strategic Outcomes
        </h2>
        
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-white text-lg font-semibold mb-3">
                {outcome.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}