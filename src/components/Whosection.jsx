import { User } from "lucide-react";

export default function WhoItsFor() {
  const audiences = [
    {
      id: 1,
      title: "Local professionals tired of inconsistent clients",
      position: "top",
      delay: "0ms"
    },
    {
      id: 2,
      title: "Founders scaling permanent systems",
      position: "left",
      delay: "200ms"
    },
    {
      id: 3,
      title: "B2B operators replacing cold outreach",
      position: "right",
      delay: "400ms"
    },
    {
      id: 4,
      title: "SaaS, fitness, or tech teams scaling lean",
      position: "bottom-left",
      delay: "600ms"
    },
    {
      id: 5,
      title: "Agencies tired of 'trying everything'",
      position: "bottom-right",
      delay: "800ms"
    }
  ];

  const getPositionClasses = (position) => {
    switch (position) {
      case "top":
        return "top-0 left-1/2 transform -translate-x-1/2 -translate-y-4";
      case "left":
        return "left-0 top-1/2 transform -translate-x-4 -translate-y-1/2";
      case "right":
        return "right-0 top-1/2 transform translate-x-4 -translate-y-1/2";
      case "bottom-left":
        return "bottom-0 left-1/4 transform -translate-x-4 translate-y-4";
      case "bottom-right":
        return "bottom-0 right-1/4 transform translate-x-4 translate-y-4";
      default:
        return "";
    }
  };

  const getConnectorClasses = (position) => {
    switch (position) {
      case "top":
        return "absolute top-1/2 left-1/2 w-px h-20 bg-gradient-to-t from-cyan-400 to-transparent transform -translate-x-0.5 -translate-y-full";
      case "left":
        return "absolute top-1/2 left-1/2 w-20 h-px bg-gradient-to-l from-cyan-400 to-transparent transform -translate-y-0.5 -translate-x-full";
      case "right":
        return "absolute top-1/2 right-1/2 w-20 h-px bg-gradient-to-r from-cyan-400 to-transparent transform -translate-y-0.5 translate-x-full";
      case "bottom-left":
        return "absolute bottom-1/2 left-3/4 w-16 h-16 border-l border-b border-cyan-400 transform translate-y-1/2 -translate-x-1/2 rounded-bl-lg opacity-60";
      case "bottom-right":
        return "absolute bottom-1/2 right-3/4 w-16 h-16 border-r border-b border-cyan-400 transform translate-y-1/2 translate-x-1/2 rounded-br-lg opacity-60";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8">
      <div className="relative w-full max-w-4xl h-96">
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl px-8 py-6 border border-slate-600 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-2xl"></div>
              <h2 className="text-2xl font-bold text-white text-center whitespace-nowrap">
                Who It's For
              </h2>
            </div>
          </div>
        </div>

        {/* Audience Cards */}
        {audiences.map((audience) => (
          <div key={audience.id} className="absolute">
            {/* Connector Line */}
            <div className={getConnectorClasses(audience.position)}></div>
            
            {/* Audience Card */}
            <div 
              className={`${getPositionClasses(audience.position)} animate-fade-in-up`}
              style={{ animationDelay: audience.delay }}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110"></div>
                <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-4 border border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 max-w-xs">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {audience.title}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Ambient background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}