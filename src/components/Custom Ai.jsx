import { Award, Shield, UserCheck, Package, Truck } from "lucide-react";

export default function CustomAIStaff() {
    const aiStaffData = [
        {
            icon: Award,
            title: "Sales AI",
            description: "Answers objections, guides qualification, follows logic trees"
        },
        {
            icon: Shield,
            title: "Support AI",
            description: "Responds to tickets, FAQs, resolution logic"
        },
        {
            icon: UserCheck,
            title: "Onboarding AI",
            description: "Guides clients through multi-step processes"
        },
        {
            icon: Package,
            title: "Fulfillment AI",
            description: "Coordinates delivery, updates, progress reports"
        },
        {
            icon: Truck,
            title: "Fulfillment AI",
            description: "Coordinates delivery, updates, progress reports"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden" style={{
            backgroundImage: 'url("src/assets/images/111.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-400/20 transform rotate-45"></div>
                <div className="absolute top-40 right-20 w-24 h-24 border-2 border-blue-300/20 transform rotate-12"></div>
                <div className="absolute bottom-32 left-20 w-28 h-28 border-2 border-blue-500/20 transform -rotate-12"></div>
                <div className="absolute bottom-20 right-32 w-36 h-36 border-2 border-blue-400/20 transform rotate-45"></div>
            </div>

            {/* Blue overlay shapes on the sides */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-800/40 to-transparent"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-800/40 to-transparent"></div>

            {/* Main content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
                <div className="max-w-6xl w-full">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Custom AI Staff
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            These are custom-trained agents, crafted to execute key roles
                            inside your business.
                        </p>
                    </div>

                    {/* AI Staff Cards */}
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {aiStaffData.map((staff, index) => {
                                const IconComponent = staff.icon;
                                return (
                                    <div key={index} className="text-center group">
                                        {/* Icon */}
                                        <div className="w-16 h-16 mx-auto mb-6 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                                            <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                                            {staff.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                            {staff.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
        </div>
    );
}