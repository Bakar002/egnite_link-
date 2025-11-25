import React from 'react';
import { Calendar, FileText, Target, Lightbulb, Server } from 'lucide-react';

const OutcomesOfDeployment = ({
  title = "Outcomes of Deployment",
  outcomes = [
    "Predictable, calendar-ready load flow",
    "Less manual work, zero follow-up fatigue",
    "Systematized fulfillment without headcount",
    "Intelligence-driven adaptation that compounds",
    "Scalable infrastructure you own — not rent"
  ]
}) => {
  const icons = [
    <Calendar className="w-6 h-6 " />,
    <FileText className="w-6 h-6" />,
    <Target className="w-6 h-6" />,
    <Lightbulb className="w-6 h-6" />,
    <Server className="w-6 h-6" />
  ];

  const outcomeData = outcomes.map((outcome, index) => ({
    icon: icons[index] || <Target className="w-6 h-6" />,
    title: outcome
  }));

  return (
    <div className="bg-black  flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
          {title}
        </h1>

        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {outcomeData.slice(0, 3).map((outcome, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-700 hover:bg-gray-700 hover:bg-opacity-80 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-gray-300 bg-gray-500 p-2 rounded-lg flex-shrink-0 mt-1">
                    {outcome.icon}
                  </div>
                  <p className="text-white text-xs sm:text-sm leading-relaxed">
                    {outcome.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 md:gap-6">
            {outcomeData.slice(3, 5).map((outcome, index) => (
              <div
                key={index + 3}
                className="bg-gray-800 bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-700 hover:bg-gray-700 hover:bg-opacity-80 transition-all duration-300 hover:scale-105 flex-1 sm:max-w-xs"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-gray-300 bg-gray-500 p-2 rounded-lg  flex-shrink-0 mt-1">
                    {outcome.icon}
                  </div>
                  <p className="text-white text-xs sm:text-sm leading-relaxed">
                    {outcome.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomesOfDeployment;