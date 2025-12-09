import React from 'react';
import c1 from '../assets/images/Frame 2147228902 (1).png';
import c4 from '../assets/images/image 108.png';
import c5 from '../assets/images/image 106.png';
import c6 from '../assets/images/image 107.png';
import c7 from '../assets/images/homecard.png';
import c8 from '../assets/images/homecard8.png';
import fan from '../assets/images/image 104.png'
import ai from '../assets/images/image 105.png'
import { Link } from 'react-router-dom';

const SixDivisionsComponent = ({
  data = {
    mainTitle: "Nine Divisions. One Growth Engine",
    subtitle: "E-Gnite Link AI Systems™ is not a platform. It is a sovereign infrastructure — composed of six interdependent divisions, each engineered to perform a specific function in your business growth architecture.",
    cards: [
      {
        id: 1,
        image: c1,
        title: "Growth Method™",
        route: "/growth-method",

        description: "Your foundational operating system. Intelligent lead generation, fulfillment automation, and outreach logic — orchestrated with precision."
      },
      {
        id: 2,
        image: fan,
        title: "Prointellect Systems™",
        route: "/prointellect",

        description: "Advanced AI professionals (legal, financial, medical, strategic) deployed as internal advisors — or trained exclusively to your business."
      },
      {
        id: 3,
        image: ai,
        title: "AI Workforce™",
        route: "/ai-workforce",

        description: "Tiered AI labor — from prebuilt assistants to Mirror AI™ brand intelligence. Fulfillment, support, operations, and client handling — done."
      },
      {
        id: 4,
        image: c4,
        title: " AI Influencers™",
        route: "/aion-faces",

        description: "Brand-facing AI ambassadors — designed to speak, represent, and sell on camera. Prebuilt and custom AI models ready to promote at scale."
      },
      {
        id: 5,
        image: c6,
        title: "Intelligence Systems™",
        route: "/intelligence-systems",

        description: "Optimization layer. Real-time reporting, behavioral analysis, pipeline scoring, and system-wide adjustments powered by AI cognition."
      },
      {
        id: 6,
        image: c5,
        title: "Systems Engineering™",
        route: "/systems-engineering",

        description: "Full-stack software and AI automation development. Build custom tools, APIs, and autonomous infrastructure beyond templates."
      },
      {
        id: 7,
        image: c7,
        title: " CARLink Core Systems™",
        route: "/core-system",

        description: "A transformative framework that unifies marketing, acquisition, and operational logic into one self-improving intelligent system."
      },
      {
        id: 8,
        image: c6,
        title: "REALTYLink Core Systems™",
        route: "/realty-link",

        description: "Through automation, analytics, and adaptive logic, every listing, transaction, and decision operates as part of one continuous digital architecture."
      },
      {
        id: 9,
        image: c8,
        title: "BizLink Core Systems™",
        route: "/biz-link",
        description: "BizLink replaces fragmented tools and departments with a single logic-based infrastructure that connects data, automation, and intelligence across the entire enterprise."
      },

    ]
  }
}) => {
  return (
    <div className="min-h-screen via-slate-800 to-slate-900 px-4 sm:px-6 md:px-8 py-4 sm:py-12 md:py-0" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight break-words">
            {data.mainTitle}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto break-words">
            {data.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {data.cards.map((card, index) => (
            <Link key={card.id} to={card.route} className="group relative block">
              <div className="relative bg-[linear-gradient(335.99deg,#252525_9.77%,#424242_89.74%)] backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 h-full hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 space-y-3 sm:space-y-4">

                  <div className="relative w-full h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-white font-bold text-lg group-hover:text-blue-300 transition">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition">
                    {card.description}
                  </p>

                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default SixDivisionsComponent;