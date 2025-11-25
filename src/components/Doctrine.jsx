import React from 'react';
import iconsbg from '../assets/images/badgeicon.png';
import doct from '../assets/images/doctorieimg.png';

const Doctrine = ({
    title,
    subtitle,
    description,
    features,
}) => {
    return (
        <div className="bg-black overflow-x-hidden" >
            <div className="flex items-center justify-center py-12 sm:py-16 lg:py-20 p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl w-full gap-12">

                    {/* Left Side - Content */}
                    <div className="flex-1 lg:pr-8 xl:pr-12 text-center lg:text-left w-full order-2 lg:order-1">
                        <div className="text-white">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
                                {title}
                            </h1>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 lg:mb-8" style={{ color: '#cbd5e1' }}>
                                {subtitle}
                            </h2>
                            <p className="mb-6 sm:mb-8 lg:mb-12 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
                                {description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        {index < description.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>

                            {/* Feature List */}
                            <div className="space-y-3 sm:space-y-4 md:-space-y-2">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 sm:space-x-3 group hover:bg-white/5 p-2 sm:p-1.4 rounded-lg transition-all duration-300"
                                    >
                                        <div
                                            className="p-2 sm:p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                                        >
                                            <img src={iconsbg} alt="icon" className="w-15 h-15" />
                                        </div>
                                        <span style={{ color: '#d1d5db' }} className="text-sm sm:text-base md:text-lg">
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Robot Illustration */}
                    <div className="flex-1 flex justify-center items-center w-full order-1 lg:order-2">
                        <div className="relative w-full max-w-[220px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                            <div
                                className="absolute flex inset-0 blur-3xl rounded-full scale-150"
                                style={{
                                    background:
                                        'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(6, 182, 212, 0.1) 70%)',
                                }}
                            ></div>
                            <div className='flex justify-end items-end'>
                                <img src={doct} alt="" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Doctrine;