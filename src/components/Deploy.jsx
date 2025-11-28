import React from 'react';
import { Award } from "lucide-react";

const AIProfessionals = () => {
  const professionals = [
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,

      title: "Professional Services & Consulting",
      description: "Streamline operations, complete administrative tasks, and optimize business processes with expert precision."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "Finance, Investment & Accounting",
      description: "Maintain accurate financial records, manage accounts payable/receivable, and ensure compliance with accounting standards."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,

      title: "Healthcare & Wellness",
      description: "Promote employee wellbeing, develop wellness programs, and provide health-related consultation services."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,

      title: "Technology & SaaS",
      description: "Deliver exceptional customer support, manage SaaS platforms, and enhance user experience across all touchpoints."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,

      title: "Real Estate & Property",
      description: "Manage property portfolios, handle real estate transactions, and provide comprehensive property management services."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,

      title: "Agencies & Marketing",
      description: "Execute comprehensive marketing campaigns, manage brand strategies, and drive measurable growth for your business."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "Education & Coaching",
      description: "Develop training programs, provide personalized coaching, and deliver educational content that drives professional growth."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,

      title: "E-Commerce & Products",
      description: "Optimize online stores, manage inventory, handle customer orders, and boost e-commerce performance across platforms."
    }
  ];

  return (
    <div className="min-h-screen bg-black from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready-to-Deploy AI Professionals
          </h1>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Expert AI professionals, trained and ready for deployment across a wide range of professional expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionals.map((professional, index) => (
            <div
              key={index}
              className="group relative bg-[linear-gradient(335.99deg,#252525_9.77%,#424242_89.74%)] backdrop-blur-sm border border-slate-700/50 rounded-4xl p-6 hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-[linear-gradient(335.99deg,#252525_9.77%,#424242_89.74%)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                  {professional.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                  {professional.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {professional.description}
                </p>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIProfessionals;
