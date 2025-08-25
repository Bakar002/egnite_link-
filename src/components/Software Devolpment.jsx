import React from 'react';
import img from '../assets/images/11.png';
export default function CustomSoftwareDevelopment() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <h1 className="text-5xl font-bold leading-tight">
                        Custom Software
                        <br />
                        Development
                    </h1>

                    <div className="space-y-4">
                        {/* Feature Items */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-300">Workflow architecture</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 4h4v4h-4V4zM4 4h4v4H4V4zM10 4h4v4h-4V4zM4 10h4v4H4v-4zM10 10h4v4h-4v-4zM16 10h4v4h-4v-4zM4 16h4v4H4v-4zM10 16h4v4h-4v-4zM16 16h4v4h-4v-4z" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-300">Client delivery model</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-1c0-1.1.9-2 2-2s2 .9 2 2v1h2v-1c0-1.1.9-2 2-2s2 .9 2 2v1h2v-1c0-1.1.9-2 2-2s2 .9 2 2v1h2v1H2v-1h2z" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-300">Team structure</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-300">Data priority and reporting systems</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                </svg>
                            </div>
                            <div className="text-lg text-gray-300">
                                <div>Integrations with your CRM, calendar,</div>
                                <div>platform, or payment stack</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Visual */}
                <img src={img} alt="" />
               
            </div>
        </div>
    );
}