import React from 'react';

const AIAutomationComponent = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Automation Engineering</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Streamlined work processes, efficient business operations, and increased productivity through intelligent automation solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automate repetitive tasks and workflows to increase efficiency and reduce manual errors in your business operations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Analytics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leverage AI-powered analytics to gain valuable insights from your data and make informed business decisions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Intelligent Integration</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Seamlessly connect different systems and platforms to create a unified, intelligent workflow ecosystem.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Continuously monitor and optimize your automated processes to ensure maximum efficiency and performance.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIAutomationComponent;