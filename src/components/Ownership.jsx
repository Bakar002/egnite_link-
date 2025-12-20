import React from 'react';

export default function OwnershipLicensing({ title = "Ownership & Licensing", cards = [] }) {
     const defaultCards = [
    {
      id: 1,
      title: "AOAI Access™",
      description: "Secure access management with enterprise-grade authentication and authorization protocols for seamless integration.",
      iconColor: "bg-teal-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      )
    },
    {
      id: 2,
      title: "AOAI License™",
      description: "Comprehensive licensing framework ensuring compliance and proper usage rights across all deployment scenarios.",
      iconColor: "bg-blue-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      )
    },
    {
      id: 3,
      title: "AOAI Secure™",
      description: "Advanced security protocols with end-to-end encryption and multi-layer protection for sensitive data handling.",
      iconColor: "bg-purple-500",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      )
    }
  ];
    const cardsData = cards.length > 0 ? cards : defaultCards;


  return (
    <div className="bg-black  flex items-center justify-center">
      <div className="lg:max-w-5xl  w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-semibold mb-2">
            {title}
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardsData.map((card) => (
            <div
  key={card.id}
  className="
    bg-[linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)]
    rounded-4xl
    p-3
    border border-white/60
    transition-all duration-300 ease-out
    hover:-translate-y-2
    hover:scale-[1.03]
    hover:border-white
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
    cursor-pointer
  "
>
            
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`w-12 h-12 ${card.iconColor} rounded-full flex items-center justify-center mb-6`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-white text-xl font-medium mb-3">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}