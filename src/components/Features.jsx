import React from 'react';

const FeatureCard = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 ${className}`}>
      {/* Background overlay with blue glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/5"></div>
      
      {/* Icon container */}
      <div className="relative mb-6 h-32 w-full">
        {icon}
      </div>
      
      {/* Text content */}
      <div className="relative z-10">
        <p className="mb-2 text-sm text-gray-400 font-medium">{description}</p>
        <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
      </div>
      
      {/* Subtle border effect */}
      <div className="absolute inset-0 rounded-2xl border border-gray-700/50"></div>
    </div>
  );
};

const KeySystemFeatures = ({ features = defaultFeatures }) => {
  return (
    <div className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Key System Features</h1>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <FeatureCard
              key={index + 3}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Default features data with custom SVG icons matching the original design
const defaultFeatures = [
  {
    icon: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="relative">
          {/* Glowing orb effect */}
          <div className="w-20 h-20 bg-blue-500 rounded-full blur-xl opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-16 h-16 bg-blue-400 rounded-full blur-lg opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-12 h-12 bg-blue-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          {/* Hand silhouette */}
          <div className="relative z-10">
            <svg width="80" height="80" viewBox="0 0 80 80" className="text-gray-800">
              <path d="M20 50c0-15 10-25 20-25s20 10 20 25c0 10-5 20-15 25H35c-10-5-15-15-15-25z" fill="currentColor" opacity="0.8"/>
            </svg>
          </div>
        </div>
      </div>
    ),
    title: "AI-Powered Lead Generation",
    description: "No ads, no platforms"
  },
  {
    icon: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="relative">
          {/* Building/chart visualization */}
          <div className="flex items-end space-x-2">
            <div className="w-4 h-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"></div>
            <div className="w-4 h-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"></div>
            <div className="w-4 h-10 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"></div>
            <div className="w-4 h-14 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"></div>
            <div className="w-4 h-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"></div>
          </div>
          {/* Floating icons */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">@</span>
          </div>
          <div className="absolute -top-4 left-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">📱</span>
          </div>
          <div className="absolute -bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">🔗</span>
          </div>
        </div>
      </div>
    ),
    title: "Multi-Channel Outreach",
    description: "Email, SMS, LinkedIn, AI voice"
  },
  {
    icon: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="relative">
          {/* Interface mockup with icons */}
          <div className="grid grid-cols-3 gap-2">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full border border-blue-400 flex items-center justify-center">
              <span className="text-blue-400 text-sm">!</span>
            </div>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full border border-blue-400 flex items-center justify-center">
              <span className="text-blue-400 text-sm">↗</span>
            </div>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full border border-blue-400 flex items-center justify-center">
              <span className="text-blue-400 text-sm">✓</span>
            </div>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full border border-blue-400 flex items-center justify-center">
              <span className="text-blue-400 text-sm">◐</span>
            </div>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full border border-blue-400 flex items-center justify-center">
              <span className="text-blue-400 text-sm">💬</span>
            </div>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full border border-blue-400 flex items-center justify-center">
              <span className="text-blue-400 text-sm">♡</span>
            </div>
          </div>
          {/* Hand interaction */}
          <div className="absolute -bottom-4 -left-2 transform rotate-12">
            <div className="w-12 h-8 bg-gray-700 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    ),
    title: "Autonomous Nurturing",
    description: "Adaptive sequences based on behavior"
  },
  {
    icon: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="relative">
          {/* Circular network diagram */}
          <div className="relative w-20 h-20">
            {/* Central hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded border-2 border-blue-300 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded"></div>
            </div>
            {/* Surrounding nodes */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <div
                key={i}
                className="absolute w-6 h-6 bg-blue-400 rounded border border-blue-200 flex items-center justify-center"
                style={{
                  top: `${50 + 35 * Math.sin(angle * Math.PI / 180)}%`,
                  left: `${50 + 35 * Math.cos(angle * Math.PI / 180)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            ))}
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + 35 * Math.cos(angle * Math.PI / 180)}%`}
                  y2={`${50 + 35 * Math.sin(angle * Math.PI / 180)}%`}
                  stroke="rgb(59 130 246)"
                  strokeWidth="1"
                  opacity="0.5"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    ),
    title: "Operational Fulfillment",
    description: "Automated scheduling, service logic"
  },
  {
    icon: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="relative">
          {/* Brain with neural network */}
          <div className="relative w-20 h-16">
            {/* Brain outline */}
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full border border-blue-400/50"></div>
            {/* Neural nodes */}
            <div className="absolute inset-2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  style={{
                    top: `${20 + (i % 3) * 30}%`,
                    left: `${15 + (Math.floor(i / 3) % 4) * 20}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full opacity-40">
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1={`${20 + (i % 2) * 40}%`}
                  y1={`${30 + (i % 3) * 20}%`}
                  x2={`${40 + (i % 3) * 20}%`}
                  y2={`${50 + (i % 2) * 30}%`}
                  stroke="rgb(59 130 246)"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    ),
    title: "Human-AI Hybrid Logic",
    description: "Inserted where strategic value requires it"
  }
];

export default KeySystemFeatures;