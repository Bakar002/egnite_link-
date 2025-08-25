import React from 'react';

export default function CustomSoftwareDevelopment() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Custom Software
                        <br />
                        Development
                    </h1>

                    <div className="space-y-4">
                        {/* Feature Items */}
                        <div className="flex items-center space-x-4 justify-center lg:justify-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <span className="text-base sm:text-lg text-gray-300">Workflow architecture</span>
                        </div>

                        <div className="flex items-center space-x-4 justify-center lg:justify-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 4h4v4h-4V4zM4 4h4v4H4V4zM10 4h4v4h-4V4zM4 10h4v4H4v-4zM10 10h4v4h-4v-4zM16 10h4v4h-4v-4zM4 16h4v4H4v-4zM10 16h4v4h-4v-4zM16 16h4v4h-4v-4z" />
                                </svg>
                            </div>
                            <span className="text-base sm:text-lg text-gray-300">Client delivery model</span>
                        </div>

                        <div className="flex items-center space-x-4 justify-center lg:justify-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2-2zM4 18v-1c0-1.1.9-2 2-2s2 .9 2 2v1h2v-1c0-1.1.9-2 2-2s2 .9 2 2v1h2v-1c0-1.1.9-2 2-2s2 .9 2 2v1h2v1H2v-1h2z" />
                                </svg>
                            </div>
                            <span className="text-base sm:text-lg text-gray-300">Team structure</span>
                        </div>

                        <div className="flex items-center space-x-4 justify-center lg:justify-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                                </svg>
                            </div>
                            <span className="text-base sm:text-lg text-gray-300">Data priority and reporting systems</span>
                        </div>

                        <div className="flex items-center space-x-4 justify-center lg:justify-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                </svg>
                            </div>
                            <div className="text-base sm:text-lg text-gray-300">
                                <div>Integrations with your CRM, calendar,</div>
                                <div>platform, or payment stack</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative mt-8 lg:mt-0">
                    <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                        {/* Background Decorative Elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-4 left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full"></div>
                            <div className="absolute top-12 right-8 w-1 h-1 bg-white/40 rounded-full"></div>
                            <div className="absolute bottom-16 left-8 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/30 rounded-full"></div>
                            <div className="absolute bottom-8 right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full"></div>
                        </div>

                        {/* Central Laptop */}
                        <div className="relative z-10 flex justify-center items-center h-48 sm:h-64">
                            <div className="bg-slate-800 rounded-lg p-3 sm:p-4 transform -rotate-12 shadow-2xl">
                                <div className="bg-black rounded-sm w-28 h-16 sm:w-40 sm:h-24 p-1 sm:p-2">
                                    <div className="grid grid-cols-3 gap-0.5 sm:gap-1 h-full">
                                        <div className="bg-pink-500 rounded-sm"></div>
                                        <div className="bg-cyan-400 rounded-sm"></div>
                                        <div className="bg-purple-500 rounded-sm"></div>
                                        <div className="bg-blue-500 rounded-sm col-span-2"></div>
                                        <div className="bg-green-400 rounded-sm"></div>
                                    </div>
                                    <div className="mt-0.5 sm:mt-1 flex space-x-0.5 sm:space-x-1">
                                        <div className="flex-1 bg-gradient-to-t from-purple-400 to-transparent h-2 sm:h-3 rounded-sm"></div>
                                        <div className="flex-1 bg-gradient-to-t from-cyan-400 to-transparent h-3 sm:h-4 rounded-sm"></div>
                                        <div className="flex-1 bg-gradient-to-t from-pink-400 to-transparent h-1.5 sm:h-2 rounded-sm"></div>
                                    </div>
                                </div>
                                <div className="bg-slate-600 rounded-b-lg h-1.5 sm:h-2 mt-1"></div>
                            </div>
                        </div>

                        {/* Floating Icons */}
                        <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            </svg>
                        </div>

                        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                            </svg>
                        </div>

                        <div className="absolute top-1/2 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-300 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
