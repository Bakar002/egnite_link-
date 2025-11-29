import { Zap } from "lucide-react";

export default function StrategicOutcomes() {
  const outcomes = [
    {
      title: "From Chaos to Systems",
      description: "Manual processes, human bottlenecks, and disjointed tools replaced by unified intelligent infrastructure."
    },
    {
      title: "From Traffic to Targeting",
      description: "No need for funnels or platforms. AI systems initiate contact with qualified prospects — proactively and independently."
    },
    {
      title: "From Staff to Intelligence",
      description: "Repetitive labor and role confusion eliminated — replaced with autonomous AI roles that fulfill, respond, and adapt."
    },
    {
      title: "From Noise to Signal",
      description: "Distraction and guesswork replaced by real-time insights, lead scoring, and adaptive workflow logic — all inside one system"
    }
  ];

  return (
    <div className="bg-[#000b13] min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <h2 className="text-white text-2xl font-semibold text-center mb-12">
          See Strategic Outcomes
        </h2>
        
        {/* Grid of Cards */}
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className=" bg-[linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)] rounded-2xl lg:place-items-center p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Icon */}
              <div className=" bg-[linear-gradient(180deg,#04AEE1_0%,#01375F_100%)] w-12 h-12 rounded-full flex items-center justify-center mb-4">
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