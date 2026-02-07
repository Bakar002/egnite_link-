import { Zap } from 'lucide-react';

export default function GrowthSystemsGrid() {
  const systems = [
    {
      name: "LeadLink AI™",
      description: "Contractors, commercial B2B → more qualified estimate calls"
    },
    {
      name: "E-Lead Engine™",
      description: "SaaS/startups → multi-channel lead engagement"
    },
    {
      name: "PropLink AI™",
      description: "Real estate → proactive prospecting & booking"
    },
    {
      name: "HighSell E-Link™",
      description: "B2B product sales → high-ticket deal flow"
    },
    {
      name: "Pulsell E-Link™",
      description: "Digital products → frictionless low-ticket sales"
    },
    {
      name: "DirectSell AI™",
      description: "Premium B2C wellness/home → cold data to sell"
    },
    {
      name: "ReachSell E-Link™",
      description: "Viral & micro-commerce → instant checkout outbound"
    },
    {
      name: "Lead Local AI™",
      description: "Local businesses → appointments + reactivation"
    },
    {
      name: "E-Gnite Core OS™",
      description: "Infrastructure orchestration → real-time logic scoring command"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The 9 Core Growth Systems
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Each one is a deployable product — industry-specific, built from
            <br className="hidden sm:block" />
            the Growth Method™
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 
              hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/70
              hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,174,225,0.25)]
              "
            >
              {/* Lightning Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              {/* System Name */}
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 text-white">
                {system.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center text-sm sm:text-base leading-relaxed">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
