import biz from '../assets/images/bizlink2nd.png';

export default function BizLinkHero() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image with Button Overlay */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Image Container */}
              <div className="relative z-10">
                <img
                  src={biz}
                  alt="BizLink Core Systems"
                  className="w-full h-auto "
                />
              </div>

              {/* Button Overlay - Positioned at bottom of image */}

            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-9 lg:pl-4 mt-8 lg:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              What Is BizLink Core Systems™
            </h1>

            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              BizLink Core Systems™, the Business Logic Division of E-Gate
              Link-xl-Systems™ created for next organizations through all the
              Digital Evolution Process™ — a five-phase transformation that
              converts traditional enterprises into intelligent, self-improving
              digital ecosystems. BizLink deploys Engineered tools and
              departments with a single Logic-based infrastructure that
              connects data, automation, and intelligence across the entire
              enterprise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}