import React from "react";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-72">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay content */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
        {description && (
          <p className="text-xs text-gray-300 mb-1">{description}</p>
        )}
        <h3 className="text-lg font-semibold text-white leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Features = ({ title, description, features = [] }) => {
  return (
    <div className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          {description && (
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
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
