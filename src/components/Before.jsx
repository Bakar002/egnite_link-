import React from 'react';

const BusinessTransformation = () => {
    const transformations = [
        {
            category: "Lead Generation",
            before: "Manual outreach, paid ads, referrals",
            after: "24/7 AI prospecting across platforms"
        },
        {
            category: "Client Comms",
            before: "Delays, inbox overwhelm, inconsistent tone",
            after: "AI-managed messaging, follow-up, onboarding"
        },
        {
            category: "DecisionMaking",
            before: "Owner-dependent, slow, biased",
            after: "Mirror AI + PointIntellect drive fast, aligned logic"
        },
        {
            category: "Fulfillment",
            before: "Labor-heavy, deadline slippage",
            after: "Automated execution & client visibility"
        },
        {
            category: "Growth Capacity",
            before: "Bottlenecked by team size",
            after: "Scaled by systems, not headcount"
        },
        {
            category: "Time Use",
            before: "Reactive firefighting",
            after: "Strategic focus, deep work, and oversight"
        }
    ];

    const CircleIcon = () => (
        <div className="w-8 h-8 rounded-full border-2 border-cyan-400 flex items-center justify-center flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
        </div>
    );

    const Arrow = () => (
        <div className="flex items-center justify-center px-4">
            <div className="w-20 h-px bg-cyan-400 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-l-[6px] border-l-cyan-400 border-t-[3px] border-b-[3px] border-t-transparent border-b-transparent"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Before vs After:
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Business Transformation Scenarios
                    </h2>
                </div>

                {/* Main Content Card */}
                <div className="bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700">
                    {/* Column Headers */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-white">Before E-Gnite</h3>
                        </div>
                        <div className="hidden md:block"></div>
                        <div className="text-center md:text-right">
                            <h3 className="text-3xl font-bold text-white">After E-Gnite</h3>
                        </div>
                    </div>

                    {/* Transformation Items */}
                    <div className="space-y-8">
                        {transformations.map((item, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                {/* Before Section */}
                                <div className="flex items-start gap-4">
                                    <CircleIcon />
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{item.category}</h4>
                                        <p className="text-gray-300 text-base leading-relaxed">{item.before}</p>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="hidden md:flex justify-center">
                                    <Arrow />
                                </div>
                                <div className="md:hidden flex justify-center py-4">
                                    <div className="h-px w-16 bg-cyan-400 relative">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                            <div className="w-0 h-0 border-l-[6px] border-l-cyan-400 border-t-[3px] border-b-[3px] border-t-transparent border-b-transparent"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* After Section */}
                                <div className="text-right md:text-left">
                                    <p className="text-gray-300 text-base leading-relaxed pr-12 md:pr-0">{item.after}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessTransformation;