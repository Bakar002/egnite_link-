import React from 'react';
import { Calendar, FileText, Target, Lightbulb, Server } from 'lucide-react';

const OutcomesOfDeployment = () => {
  const outcomes = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Predictable, calendar-ready load flow"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Less manual work, zero follow-up fatigue"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Systematized fulfillment without headcount"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Intelligence-driven adaptation that compounds"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Scalable infrastructure you own — not rent"
    }
  ];

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-white text-4xl font-bold text-center mb-12">
          Outcomes of Deployment
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-80 rounded-lg p-6 border border-gray-700 hover:bg-gray-700 hover:bg-opacity-80 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="text-gray-300 flex-shrink-0 mt-1">
                  {outcome.icon}
                </div>
                <p className="text-white text-sm leading-relaxed">
                  {outcome.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutcomesOfDeployment;