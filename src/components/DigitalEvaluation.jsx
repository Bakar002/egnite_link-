export default function REALTYLinkModel() {
  const cards = [
    {
      title: "Foundation &\nListing Essentials",
      description: "Establish digital order and listing consistency."
    },
    {
      title: "Essential Digital\nPresence",
      description: "Create brand identity and online authority."
    },
    {
      title: "Professional\nListing Mastery",
      description: "Integrate media, SEO, and AI-driven presentation."
    },
    {
      title: "Enterprise\nIntelligence Suite",
      description: "Centralize analytics and workflow automation."
    },
    {
      title: "REALTYLink\nIntelligence Integration",
      description: "Deploy internal AI logic for insight and decision-making."
    },
    {
      title: "REALTYLink\nSovereign System",
      description: "Achieve autonomous self-optimizing operations."
    }
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <h1 className="text-white text-2xl md:text-3xl font-medium text-center mb-12">
          The REALTYLink™ Digital Evolution Model
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" rounded-3xl p-8 border border-gray-700 shadow-2xl hover:shadow-gray-800/50 transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(335.99deg, #252525 9.77%, #424242 89.74%)"
              }}
            >
              <h2 className="text-white text-xl font-semibold mb-4 leading-tight whitespace-pre-line">
                {card.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}