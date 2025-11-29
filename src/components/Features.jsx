import React from "react";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-64 sm:h-72 md:h-86 lg:w-auto lg:h-98">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className=" inset-0 w-full h-full   hover:scale-105 transition-transform duration-300"
        />
      )}

      {/* Overlay content */}
      <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(335.99deg,#252525_9.77%,#424242_89.74%)]  p-3 sm:p-4">
        {description && (
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 mb-1">
            {description}
          </p>
        )}
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Features = ({ title, description, features = [] }) => {
  return (
    <div className="min-h-screen bg-black py-10 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.slice(0, 5).map((feature, id) => (
            <FeatureCard
              key={id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Features;
