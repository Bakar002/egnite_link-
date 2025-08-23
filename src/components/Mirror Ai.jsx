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

              

                
            </div>

            {/* Instructions */}
            {/* <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-sm max-w-xs">
                <h3 className="font-semibold mb-2 text-blue-300">Instructions:</h3>
                <p className="text-gray-200">Click on the circular icons to upload images for each level of the AI pyramid.</p>
            </div> */}
        </div>
    );
};

export default AIPyramid;