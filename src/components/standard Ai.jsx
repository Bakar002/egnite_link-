import React from 'react';
import { Bot, Calendar, FileText, MessageCircle, BookOpen } from 'lucide-react';
import stai from '../assets/images/stai.png';

const AIRolesDesign = () => {
    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
            <div className="flex items-center justify-center min-h-screen p-8">
                <div className="flex items-center justify-between max-w-6xl w-full">

                    {/* Left Side - Robot Illustration */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative">
                            {/* Background Glow */}
                            <div className="absolute inset-0 blur-3xl rounded-full scale-150" style={{ background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(6, 182, 212, 0.1) 70%)' }}></div>

                            {/* Main Robot Container */}
                          <img src={stai} alt="" />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 pl-12">
                        <div className="text-white">
                            {/* Main Heading */}
                            <h1 className="text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>Standard AI Roles</h1>

                            {/* Sub Heading */}
                            <h2 className="text-2xl font-medium mb-8" style={{ color: '#cbd5e1' }}>Immediate Functionality</h2>

                            {/* Description */}
                            <p className="mb-12 text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
                                These pre-configured agents are available out of the box<br />
                                and deploy within any E-gnite system.
                            </p>

                            {/* Feature List */}
                            <div className="space-y-6">
                                {/* Feature 1 */}
                                <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                                    <div
                                        className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
                                            boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                                        }}
                                    >
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                    <span style={{ color: '#d1d5db' }} className="text-lg">Scheduling, intake logic, repetitive task automation</span>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                                    <div
                                        className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
                                            boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                                        }}
                                    >
                                        <FileText className="w-6 h-6 text-white" />
                                    </div>
                                    <span style={{ color: '#d1d5db' }} className="text-lg">Writes, formats, and personalizes content blocks</span>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                                    <div
                                        className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
                                            boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                                        }}
                                    >
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <span style={{ color: '#d1d5db' }} className="text-lg">General-purpose inquiry response and routing</span>
                                </div>

                                {/* Feature 4 */}
                                <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                                    <div
                                        className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
                                            boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                                        }}
                                    >
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <span style={{ color: '#d1d5db' }} className="text-lg">Manages booking conflicts, follow-up logic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIRolesDesign;