import React from 'react';
import { Brain, Zap, Shield, Eye } from 'lucide-react';

export default function CustomAiONCreation() {
  const features = [
    {
      icon: Brain,
      title: "Task specific voice and information",
      description: "Personalized AI assistant tailored to your specific needs and preferences"
    },
    {
      icon: Zap,
      title: "Trained on your data for peak performance",
      description: "Enhanced accuracy through custom training on your unique dataset"
    },
    {
      icon: Shield,
      title: "Implemented with advanced security features",
      description: "Enterprise-grade security protocols to protect your sensitive information"
    },
    {
      icon: Eye,
      title: "Detailed usage tracking with analytics",
      description: "Comprehensive insights into AI performance and user interactions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Custom AiON Creation
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Effortlessly build intelligent AI assistants customized to your specific needs 
            by integrating with your preferred tools
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Spacing */}
        <div className="mt-16"></div>
      </div>
    </div>
  );
}