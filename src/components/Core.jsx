import React from 'react';

const CoreDoctrineComponent = ({
  data = {
    title: "Core Doctrine: Three Foundational Beliefs",
    beliefs: [
      {
        id: 1,
        icon: "brain",
        title: "Systems Must Operate Independently",
        description: "Autonomous systems that function without constant human intervention"
      },
      {
        id: 2,
        icon: "replace",
        title: "Intelligence Must Replace Instruction",
        description: "Smart adaptive solutions over rigid command-based approaches"
      },
      {
        id: 3,
        icon: "strategy",
        title: "Infrastructure Must Outlive Strategy",
        description: "Building lasting foundations that transcend temporary tactical approaches"
      }
    ]
  }
}) => {

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'brain':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'replace':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      case 'strategy':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      default:
        return (
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" style={{ backgroundColor: '#000000' }}></div>
        );
    }
  };

  return (
    <div className="min-h-screen from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-4xl mx-auto w-full">
        {/* Main Content Container */}
        <div className="relative">
          {/* Background Glow Effects */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>

          {/* Title */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {data.title}
            </h1>
          </div>

          {/* Cards Container - Triangular Layout */}
          <div className="relative z-10">

            {/* Top Row - Two Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 max-w-3xl mx-auto px-4 sm:px-0">

              {/* Card 1 - Systems Must Operate Independently */}
              <div className="group relative">
                <div className="relative bg-[linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)] backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-slate-800/70 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex items-start gap-3 sm:gap-4">

                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getIcon(data.beliefs[0]?.icon || 'brain')}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
                      <h3 className="text-white font-bold text-sm sm:text-base group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                        {data.beliefs[0]?.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {data.beliefs[0]?.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Card 2 - Intelligence Must Replace Instruction */}
              <div className="group relative">
                <div className="relative bg-[linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)] backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-slate-800/70 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex items-start gap-3 sm:gap-4">

                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getIcon(data.beliefs[1]?.icon || 'replace')}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
                      <h3 className="text-white font-bold text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                        {data.beliefs[1]?.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {data.beliefs[1]?.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Bottom Row - One Centered Card */}
            <div className="flex justify-center px-4 sm:px-0">
              <div className="w-full max-w-sm sm:max-w-md">

                {/* Card 3 - Infrastructure Must Outlive Strategy */}
                <div className="group relative">
                  <div className="relative bg-[linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)] backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-slate-800/70 hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10">

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex items-start gap-3 sm:gap-4">

                      {/* Icon Container */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getIcon(data.beliefs[2]?.icon || 'strategy')}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
                        <h3 className="text-white font-bold text-sm sm:text-base group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                          {data.beliefs[2]?.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {data.beliefs[2]?.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom glow line */}
                    <div className="absolute bottom-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-12 sm:bottom-20 left-12 sm:left-20 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-300/50 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default CoreDoctrineComponent;