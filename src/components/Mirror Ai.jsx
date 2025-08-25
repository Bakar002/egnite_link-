import React, { useState } from 'react';
import { Brain, Users, Smile, Upload, X } from 'lucide-react';

const AIPyramid = ({ 
    topImage,
    customStaffTitle = "Custom AI Staff",
    customStaffDescription = "These are custom-trained agents, crafted to execute key roles inside your business.",
    aiCards = [
        {
            title: "Sales AI",
            description: "Answers objections, guides qualification, follows logic trees",
            icon: Brain
        },
        {
            title: "Support AI", 
            description: "Responds to tickets, FAQs, resolution logic",
            icon: Users
        },
        {
            title: "Onboarding AI",
            description: "Guides clients through multi-step processes", 
            icon: Smile
        },
        {
            title: "Fulfillment AI",
            description: "Coordinates delivery, updates, progress reports",
            icon: Upload
        },
        {
            title: "Fulfillment AI",
            description: "Coordinates delivery, updates, progress reports",
            icon: Upload
        }
    ],
    images: initialImages = {
        mirrorAI: null,
        customStaff: null,
        standardRoles: null
    }
}) => {
    const [images, setImages] = useState(initialImages);

    const handleImageUpload = (level, event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImages(prev => ({
                    ...prev,
                    [level]: e.target.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = (level) => {
        setImages(prev => ({
            ...prev,
            [level]: null
        }));
    };

    const ImageUploadArea = ({ level, image, icon: Icon, title }) => (
        <div className="relative mb-2">
            {image ? (
                <div className="relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/50"
                    />
                    <button
                        onClick={() => removeImage(level)}
                        className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                        <X className="w-3 h-3 text-white" />
                    </button>
                </div>
            ) : (
                <label className="cursor-pointer">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(level, e)}
                        className="hidden"
                    />
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/60 flex items-center justify-center hover:border-white/90 transition-colors group bg-white/10">
                        <Icon className="w-6 h-6 text-white/80 group-hover:text-white" />
                    </div>
                </label>
            )}
        </div>
    );

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-8">
            {/* Background exactly matching the image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 via-blue-900/20 to-teal-800/40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-gray-900/80"></div>
            </div>

            <div className="relative z-10">
                {/* Mirror AI - Top Level */}
                {topImage && <img src={topImage} alt="" />}

                {/* Custom Staff Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center mb-4">
                        <ImageUploadArea 
                            level="customStaff" 
                            image={images.customStaff} 
                            icon={Users}
                            title={customStaffTitle}
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">{customStaffTitle}</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                        {customStaffDescription}
                    </p>
                </div>

                {/* AI Cards Grid */}
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
                    {aiCards.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                            <div 
                                key={index}
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-500/30 rounded-full mb-4">
                                    <IconComponent className="w-6 h-6 text-teal-300" />
                                </div>
                                <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AIPyramid;