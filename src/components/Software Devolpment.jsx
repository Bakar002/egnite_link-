import React from 'react';
import img from '../assets/images/11.png';

export default function CustomSoftwareDevelopment() {
    return (
        <div className=" bg-black text-white flex items-center justify-center p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
            <div className="max-w-7xl w-full grid grid-cols-1 xl:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 text-center xl:text-left order-2 xl:order-1">
                    <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight px-2 sm:px-4 xl:px-0">
                        <span className="block">Custom Software</span>
                        <span className="block">Development</span>
                    </h1>

                    <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-4 xl:px-0">
                        {/* Feature Items - All properly aligned */}
                        <div className="flex items-center space-x-3 xs:space-x-4  sm:space-x-4  md:space-x-5 justify-start">
                            <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25">
                                <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <span className="text-xs xs:text-sm text-start sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 font-medium leading-relaxed flex-1">
                                Workflow architecture
                            </span>
                        </div>

                        <div className="flex items-center space-x-3 xs:space-x-4 sm:space-x-4 md:space-x-5 justify-start">
                            <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25">
                                <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 4h4v4h-4V4zM4 4h4v4H4V4zM10 4h4v4h-4V4zM4 10h4v4H4v-4zM10 10h4v4h-4v-4zM16 10h4v4h-4v-4zM4 16h4v4H4v-4zM10 16h4v4h-4v-4zM16 16h4v4h-4v-4z" />
                                </svg>
                            </div>
                            <span className="text-xs xs:text-sm text-start sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 font-medium leading-relaxed flex-1">
                                Client delivery model
                            </span>
                        </div>

                        <div className="flex items-center space-x-3 xs:space-x-4 sm:space-x-4 md:space-x-5 justify-start">
                            <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25">
                                <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-1c0-1.1.9-2 2-2s2 .9 2 2v1h2v-1c0-1.1.9-2 2-2s2 .9 2 2v1h2v-1c0-1.1.9-2 2-2s2 .9 2 2v1h2v1H2v-1h2z" />
                                </svg>
                            </div>
                            <span className="text-xs xs:text-sm text-start sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 font-medium leading-relaxed flex-1">
                                Team structure
                            </span>
                        </div>

                        <div className="flex items-center space-x-3 xs:space-x-4 sm:space-x-4 md:space-x-5 justify-start">
                            <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25">
                                <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                                </svg>
                            </div>
                            <span className="text-xs xs:text-sm text-start sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 font-medium leading-relaxed flex-1">
                                Data priority and reporting systems
                            </span>
                        </div>

                        <div className="flex items-center space-x-3 xs:space-x-4 sm:space-x-4 md:space-x-5 justify-start">
                            <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25">
                                <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                </svg>
                            </div>
                            <div className="text-xs xs:text-sm text-start sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 font-medium leading-relaxed flex-1">
                                Integrations with your CRM, calendar, platform, or payment stack
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="flex justify-center  xl:justify-end order-1 xl:order-2">
                    <div className="relative group">
                        <img 
                            src={img} 
                            alt="Software Development" 
                            className="w-48 xs:w-70  sm:w-64 md:w-80 lg:w-96 xl:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl -z-10 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}