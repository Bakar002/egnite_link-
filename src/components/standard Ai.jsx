import React from 'react';
import { Bot, Calendar, FileText, MessageCircle, BookOpen } from 'lucide-react';
import stai1 from '../assets/images/image-removebg-preview 2 copy.png';

const AIRolesDesign = ({
    title,
    subtitle,
    description,
    features,
    props
}) => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
            <div className="flex items-center justify-center min-h-screen p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl w-full gap-12">

                    {/* Left Side - Robot Illustration */}
                    <div className="flex-1 flex justify-center items-center w-full">
                        <div className="relative w-full max-w-[220px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                            {/* Background Glow */}
                            <div
                                className="absolute inset-0 blur-3xl rounded-full scale-150"
                                style={{
                                    background:
                                        'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(6, 182, 212, 0.1) 70%)',
                                }}
                            ></div>

                            {/* Main Robot Container */}
                            <img src={props} alt="" className="w-full  h-auto   lg:mt-30 " />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 lg:pl-8 xl:pl-12 text-center lg:text-left w-full">
                        <div className="text-white">
                            {/* Main Heading */}
                            <h1
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                                style={{ color: '#ffffff' }}
                            >
                                {title}
                            </h1>

                            {/* Sub Heading */}
                            <h2
                                className="text-lg sm:text-xl md:text-2xl font-medium mb-6 lg:mb-8"
                                style={{ color: '#cbd5e1' }}
                            >
                                {subtitle}
                            </h2>

                            {/* Description */}
                            <p
                                className="mb-6 sm:mb-8 lg:mb-12 text-sm sm:text-base md:text-lg leading-relaxed"
                                style={{ color: '#94a3b8' }}
                            >
                                {description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        {index < description.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>

                            {/* Feature List */}
                            <div className="space-y-3 sm:space-y-4 md:space-y-6">
                                {features.map((feature, index) => {
                                    const IconComponent = feature.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 sm:space-x-4 group hover:bg-white/5 p-2 sm:p-3 rounded-lg transition-all duration-300"
                                        >
                                            <div
                                                className="p-2 sm:p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                                                style={{
                                                    background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
                                                    boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)',
                                                }}
                                            >
                                                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                            </div>
                                            <span
                                                style={{ color: '#d1d5db' }}
                                                className="text-sm sm:text-base md:text-lg"
                                            >
                                                {feature.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIRolesDesign;
