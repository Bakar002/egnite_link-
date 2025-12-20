import React from 'react';
import plus from '../assets/images/plusicon.png';

const KeyOutcomeThemes = ({ title, themes }) => {
    return (
        <div className="min-h-screen bg-black text-white 
            p-4 sm:p-6 md:p-8  /* small screen padding fix */
        ">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h1 className="
                    text-2xl 
                    sm:text-3xl 
                    md:text-5xl   /* md & lg untouched */
                    font-bold text-center 
                    mb-10 sm:mb-12 md:mb-16
                ">
                    {title}
                </h1>

                {/* Grid Container */}
                <div className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-2   /* md & lg unchanged */
                    lg:grid-cols-3 
                    gap-6 sm:gap-7 md:gap-8
                ">
                    {themes.map((theme, index) => (
                        <div
                            key={index}
                            className="
                                bg-gray-700 
                                rounded-3xl 
                                p-5 sm:p-6 md:p-8   /* small screen padding */
                                hover:bg-gray-600 
                                border border-white/70 
                                transition-colors duration-300
                                hover:shadow-lg hover:shadow-cyan-400/20 hover:scale-[1.05] transition-transform duration-300
                            "
                        >
                            {/* Icon */}
                            <div className="mb-5 sm:mb-6 md:mb-6 flex justify-center">
                                <div className="
                                    w-12 h-12 
                                    sm:w-14 sm:h-14 
                                    md:w-16 md:h-16   /* md untouched */
                                    rounded-full 
                                    flex items-center justify-center
                                "
                                    style={{
                                        background: "linear-gradient(180deg, #04AEE1 0%, #01375F 100%)"
                                    }}
                                >
                                    <img src={plus} alt="" className="w-5 sm:w-6 md:w-auto" />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="
                                text-lg 
                                sm:text-xl 
                                md:text-xl      /* md & lg unchanged */
                                text-center 
                                font-semibold 
                                mb-3 sm:mb-4
                            ">
                                {theme.title}
                            </h3>

                            {/* Description */}
                            <p className="
                                text-gray-300 
                                text-xs 
                                sm:text-sm 
                                md:text-sm      /* md & lg unchanged */
                                leading-relaxed
                            ">
                                {theme.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyOutcomeThemes;
