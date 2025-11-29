import React from 'react';
import roi from '../assets/images/Roi.png';

export default function ROITimeline() {
    const timelineData = [
        {
            period: "Week 1–2",
            title: "System architecture mapped; integrations scoped",
            position: "top"
        },
        {
            period: "Week 3–4",
            title: "AI Workforce roles trained and deployed",
            position: "bottom"
        },
        {
            period: "Month 2",
            title: "Lead flow begins; fulfillment sequences active",
            position: "top"
        },
        {
            period: "Month 3–4",
            title: "Mirror AI + Intelligence Systems optimize and refine",
            position: "bottom"
        },
        {
            period: "Month 6+",
            title: "40%–80% operational automation achieved",
            position: "top"
        }
    ];

    return (
        <div className="min-h-screen bg-[#000010] flex items-center justify-center p-8">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        ROI Realization Timeline
                    </h1>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Main image with icons */}
                    <div className="relative w-full">
                        <img src={roi} alt="ROI Timeline" className="w-full " />
                    </div>

                    {/* Timeline items positioned above and below */}
                    <div className="absolute inset-0 flex justify-between items-center px-[8%]">
                        {timelineData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center relative" style={{ width: '16%' }}>
                                {/* Content positioned above or below */}
                                {item.position === 'top' ? (
                                    <div className="absolute bottom-[60%] flex flex-col items-center w-full">
                                        <div className="text-cyan-300 font-semibold text-sm mb-1 mx-auto">
                                            {item.period}
                                        </div>
                                        <div className="text-white text-center text-xs leading-relaxed mb-12">
                                            {item.title}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="absolute top-[60%] flex flex-col items-center w-full">
                                        <div className="text-cyan-300 font-semibold text-sm mt-15  whitespace-nowrap">
                                            {item.period}
                                        </div>
                                        <div className="text-white text-center text-xs leading-relaxed">
                                            {item.title}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}