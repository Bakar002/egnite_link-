import React from 'react';
import { Network, Shield, TrendingUp, Settings, RefreshCw } from 'lucide-react';

export default function ROITimeline() {
    const timelineData = [
        {
            period: "Week 1-2",
            title: "System architecture mapped; integrations scoped",
            icon: Network,
            position: "top"
        },
        {
            period: "Week 3-4",
            title: "AI Workforce roles trained and deployed",
            icon: Shield,
            position: "bottom"
        },
        {
            period: "Month 2",
            title: "Lead flow begins; fulfillment sequences active",
            icon: TrendingUp,
            position: "top"
        },
        {
            period: "Month 3-4",
            title: "Mirror AI + Intelligence Systems optimize and refine",
            icon: Settings,
            position: "bottom"
        },
        {
            period: "Month 6+",
            title: "40%-80% operational automation achieved",
            icon: RefreshCw,
            position: "top"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center p-8">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        ROI Realization Timeline
                    </h1>
                </div>

                {/* Timeline */}
                <div className="relative py-24">
                    {/* Main horizontal line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 transform -translate-y-1/2 shadow-lg shadow-cyan-300/50"></div>

                    {/* Timeline items */}
                    <div className="flex justify-between items-center relative z-10">
                        {timelineData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center relative">
                                {/* Content above or below based on position */}
                                <div className={`flex flex-col items-center ${item.position === 'bottom' ? 'order-2 mt-20' : 'order-1 mb-20'}`}>
                                    {/* Period */}
                                    <div className="text-cyan-300 font-semibold text-lg mb-4">
                                        {item.period}
                                    </div>
                                    {/* Description */}
                                    <div className="text-white text-center max-w-48 text-sm leading-relaxed">
                                        {item.title}
                                    </div>
                                </div>

                                {/* Icon circle */}
                                <div className={`${item.position === 'bottom' ? 'order-1' : 'order-2'} relative`}>
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 border-3 border-cyan-300 flex items-center justify-center shadow-xl shadow-cyan-300/40 hover:shadow-cyan-300/60 transition-all duration-300 hover:scale-110">
                                        <item.icon className="w-8 h-8 text-cyan-300" strokeWidth={2} />
                                    </div>
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-cyan-300/25 blur-md animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}