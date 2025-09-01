import React from 'react';

const KeyOutcomeThemes = () => {
    const themes = [
        {
            title: "Lead Flow",
            description: "Predictable, automated prospecting across channels"
        },
        {
            title: "Client Conversion",
            description: "Smart follow-up sequences improve conversion rates"
        },
        {
            title: "Operational Bandwidth",
            description: "AI Workforce handles daily tasks, messages, onboarding"
        },
        {
            title: "Strategic Decisions",
            description: "Mirror AI & PointIntellect provide real-time advisory intelligence"
        },
        {
            title: "Fulfillment",
            description: "Deliverables, scheduling, and client experience become streamlined"
        },
        {
            title: "Growth Velocity",
            description: "From inconsistent activity to always-on business motion"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Key Outcome Themes
                </h1>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {themes.map((theme, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 rounded-3xl p-8 hover:bg-gray-600 transition-colors duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4 6h2v2H4V6zm0 5h2v2H4v-2zm0 5h2v2H4v-2zm16-8V6H8.023v2H18.8zm0 5v-2H8.023v2H18.8zm0 5v-2H8.023v2H18.8z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-4 text-white">
                                {theme.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {theme.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyOutcomeThemes;