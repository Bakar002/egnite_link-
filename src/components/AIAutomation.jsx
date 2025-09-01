import React from 'react';

const AIAutomationComponent = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Strategic Use Cases</h1>
         
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">40% drop in lead conversion rate</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Flagged → Funnel audit triggered
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">New campaign gains traction</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mirror AI notified to initiate expansion sequence
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Certain offers are accepted 3x faster</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Priority Grid adjusts sequence to front-load those offers
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Calendar gaps detected next week</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Behavioral retargeting auto-triggered
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIAutomationComponent;