import React from 'react';
import c1 from '../assets/images/deployment c1.png';
import c2 from '../assets/images/Img copy 2.png';
import c3 from '../assets/images/deployment c2.png';
import c5 from '../assets/images/c5 copy.png';
import c6 from '../assets/images/c5 (2).png';
export default function DeploymentUseCases() {
  const useCases = [
    {
      id: 1,
      title: "Outbound Video Sales",
      description: "Personalized AI-Driven sales pitches",
      image: c1
    },
    {
      id: 2,
      title: "Explainers & Product Demos",
      description: "Lifelike guides simplify onboarding critical info",
      image: c2
    },
    {
      id: 3,
      title: "Social Video Presence",
      description: "Scale influencer content across platform",
      image: c3
    },
    {
      id: 4,
      title: "Internal Training",
      description: "Multilingual, on-demand corporate tutorials",
      image: c5
    },
    {
      id: 5,
      title: "Evergreen Funnels",
      description: "Nurture leads with auto-generated content",
      image: c6
    }
  ];

  return (
    <div className="bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Deployment Use Cases
          </h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 mx-10 mb-8">
          {/* Left Side - 2 Cards */}
          <div className="space-y-8">
            {useCases.slice(0, 2).map((useCase) => (
              <div
                key={useCase.id}
                className="group relative  backdrop-blur-sm rounded-2xl overflow-hidden  "
              >
                <div className="p-6">
                  <div className="relative h-80 mb-4 rounded-xl overflow-hidden">
                    <img
                      src={useCase.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  </div>

                  <p className="text-blue-200/80 text-sm">
                    {useCase.description}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {useCase.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - 2 Cards */}
          <div className="space-y-8">
            {useCases.slice(2, 4).map((useCase) => (
              <div
                key={useCase.id}
                className="group relative backdrop-blur-sm rounded-2xl overflow-hidden "
              >
                <div className="p-6">
                  <div className="relative h-80 mb-4 rounded-xl overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  </div>
                 
                  <p className="text-blue-200/80 text-sm">
                    {useCase.description}
                  </p>
                   <h3 className="text-xl font-bold text-white mb-2">
                    {useCase.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Card - 5th Card */}
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2">
            <div className="group relative  backdrop-blur-sm rounded-2xl overflow-hidden ">
              <div className="p-6">
                <div className="relative h-80 mb-4 rounded-xl overflow-hidden">
                  <img
                    src={useCases[4].image}
                    alt={useCases[4].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                </div>
               
                <p className="text-blue-200/80 text-sm text-center">
                  {useCases[4].description}
                </p>
                 <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {useCases[4].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}