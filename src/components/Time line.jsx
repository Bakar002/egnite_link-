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
        <div className="min-h-screen bg-[#010212] flex items-center justify-center p-8 
                        hidden md:flex">
            {/* ↑ ONLY CHANGE: 'hidden md:flex' */}

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

                    {/* Timeline items */}
                    <div className="absolute inset-0 flex justify-between items-center px-[8%]">
                        {timelineData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center relative" style={{ width: '16%' }}>
                                {item.position === 'top' ? (
                                    <div className="absolute bottom-[60%] flex flex-col items-center w-full">
                                        <div className="text-cyan-300 font-semibold text-sm mb-1 mx-auto">
                                            {item.period}
                                        </div>
                                        <div className="text-white text-center md:text-[10px] text-xs leading-relaxed lg:mb-12 md:mb-7">
                                            {item.title}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="absolute top-[60%] flex flex-col items-center w-full">
                                        <div className="text-cyan-300 font-semibold text-sm md:text-[10px] lg:mt-15 md:mt-9 whitespace-nowrap">
                                            {item.period}
                                        </div>
                                        <div className="text-white text-center text-xs md:text-[10px] leading-relaxed">
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
