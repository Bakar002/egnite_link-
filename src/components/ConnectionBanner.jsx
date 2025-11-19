export default function ConnectionBanner() {
  return (
    <div className="bg-black flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="relative w-full max-w-4xl rounded-lg overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #000010 0.35%, #0377A5 160.25%)"
        }}>

        {/* Decorative circles */}
        <div className="absolute top-2 sm:top-4 left-4 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 border-4 border-white/20 rounded-full"></div>
        <div className="absolute top-3 sm:top-6 left-6 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 border-4 border-white/10 rounded-full"></div>

        <div className="absolute bottom-4 sm:bottom-8 right-6 sm:right-12 w-16 h-16 sm:w-20 sm:h-20 border-4 border-white/20 rounded-full"></div>
        <div className="absolute bottom-5 sm:bottom-10 right-8 sm:right-14 w-12 h-12 sm:w-16 sm:h-16 border-4 border-white/10 rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 py-8 sm:py-12 px-4 sm:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-6">
            Connection Is Power.
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Every problem, everyiment, and every human decision becomes more solvable when linked to the whole.
            #LearnLive exists to ensure that connection — permanent, intelligent, and self-adapting.
          </p>
        </div>
      </div>
    </div>
  );
}
