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
      title: "Founders seeking permanent systems",
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
      title: "Agencies tired of \"trying everything\"",
      position: "bottom-right",
      delay: "800ms"
    }
  ];

  const getPositionClasses = (position) => {
    switch (position) {
      case "top":
        return "top-8 left-1/2 -translate-x-1/2";
      case "left":
        return "left-8 top-1/2 -translate-y-1/2";
      case "right":
        return "right-8 top-1/2 -translate-y-1/2";
      case "bottom-left":
        return "bottom-8 left-1/2 -translate-x-full -translate-x-4";
      case "bottom-right":
        return "bottom-8 left-1/2 translate-x-4";
      default:
        return "";
    }
  };

  const getLineClasses = (position) => {
    switch (position) {
      case "top":
        return "absolute top-1/2 left-1/2 w-0.5 h-12 sm:h-16 bg-gradient-to-t from-cyan-400/60 to-transparent -translate-x-0.5 -translate-y-full";
      case "left":
        return "absolute top-1/2 left-1/2 h-0.5 w-12 sm:w-16 bg-gradient-to-l from-cyan-400/60 to-transparent -translate-y-0.5 -translate-x-full";
      case "right":
        return "absolute top-1/2 right-1/2 h-0.5 w-12 sm:w-16 bg-gradient-to-r from-cyan-400/60 to-transparent -translate-y-0.5 translate-x-full";
      case "bottom-left":
        return "absolute bottom-1/2 left-2/3 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-cyan-400/60 to-transparent transform -translate-x-0.5 translate-y-full rotate-45 origin-top";
      case "bottom-right":
        return "absolute bottom-1/2 right-2/3 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-cyan-400/60 to-transparent transform -translate-x-0.5 translate-y-full -rotate-45 origin-top";
      default:
        return "";
    }
  };

  return (
    <div className=" bg-black flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px"
          }}
        ></div>
      </div>

      <div className="relative w-full max-w-6xl h-[32rem] sm:h-[28rem]">
        {/* Connecting Lines */}
        {audiences.map((audience) => (
          <div
            key={`line-${audience.id}`}
            className={`${getLineClasses(audience.position)} hidden sm:block`}
          ></div>
        ))}

        {/* Center Box with Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative">
            {/* Blue glow effect */}
            <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-60 rounded-3xl scale-150"></div>
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-40 rounded-3xl scale-125"></div>

            {/* Main container */}
            <div className="relative bg-gradient-to-b from-gray-800 via-gray-850 to-gray-900 rounded-2xl sm:rounded-3xl px-6 sm:px-12 py-6 sm:py-8 shadow-2xl border border-gray-700/50">
              <h2 className="text-2xl sm:text-4xl font-bold text-white text-center whitespace-nowrap">
                Who It's For
              </h2>
            </div>
          </div>
        </div>

        {/* Cards */}
        {audiences.map((audience) => (
          <div
            key={audience.id}
            className={`absolute ${getPositionClasses(
              audience.position
            )} animate-fade-in-up z-10 w-[85%] sm:w-auto`}
            style={{ animationDelay: audience.delay }}
          >
            <div
              className={`bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl border border-gray-600/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm 
              ${audience.position === "left" || audience.position === "right"
                  ? "px-4 sm:px-5 py-6 sm:py-8 w-full sm:w-72 h-28 sm:h-32"
                  : "px-4 sm:px-6 py-4 sm:py-5 w-full sm:w-80 h-20 sm:h-24"
                }`}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 h-full">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium flex-1">
                  {audience.title}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Additional background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-28 sm:w-40 h-28 sm:h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 sm:w-48 h-32 sm:h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-teal-500/5 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
