import React, { useState } from 'react';

const EmpowerBusinessComponent = ({ 
  data = {
    title: "Empower Your Business with E-Gnite",
    cards: [
      {
        id: 1,
        title: "Learn Advanced AI/ML",
        description: "\"I have been thoroughly impressed with the level of service and expertise provided by Gnite. Their team went above and beyond to understand my specific business needs and provided tailored solutions that have significantly improved my operations. The professionalism and dedication they bring to the table makes them my go-to choice for all AI initiatives.\"",
        author: "Jason Richardson",
        rating: 5,
        avatar: "JR"
      },
      {
        id: 2,
        title: "Advanced Analytics Solutions",
        description: "\"Working with E-Gnite has been a game-changer for our business. Their advanced analytics solutions have provided us with insights we never thought possible. The team's expertise in machine learning and data science has helped us optimize our processes and increase our revenue by 40%.\"",
        author: "Sarah Mitchell", 
        rating: 5,
        avatar: "SM"
      },
      {
        id: 3,
        title: "AI Automation Systems",
        description: "\"The automation systems implemented by E-Gnite have revolutionized our workflow. What used to take hours now takes minutes. Their intelligent automation solutions are robust, reliable, and have delivered exceptional ROI. I highly recommend their services to any business looking to scale.\"",
        author: "David Chen",
        rating: 5,
        avatar: "DC"
      },
      {
        id: 4,
        title: "Custom AI Development",
        description: "\"E-Gnite's custom AI development services exceeded our expectations. They built a solution perfectly tailored to our industry needs. The support throughout the project was outstanding, and the results speak for themselves. Our efficiency has increased by 60% since implementation.\"",
        author: "Maria Rodriguez",
        rating: 5,
        avatar: "MR"
      },
      {
        id: 5,
        title: "Machine Learning Integration",
        description: "\"The machine learning models developed by E-Gnite have transformed how we analyze our data. Their deep understanding of our business requirements and technical expertise resulted in solutions that deliver real value. The ROI has been phenomenal.\"",
        author: "Michael Thompson",
        rating: 5,
        avatar: "MT"
      }
    ]
  }
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(data.cards.length / cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCurrentCards = () => {
    const startIndex = currentSlide * cardsPerView;
    return data.cards.slice(startIndex, startIndex + cardsPerView);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen  from-slate-900 via-slate-800 to-slate-900 py-16 px-8" style={{backgroundColor:'#000000'}}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            {data.title}
          </h1>
        </div>
        
        {/* Slider Container */}
        <div className="relative overflow-hidden">
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {getCurrentCards().map((card, index) => (
              <div key={`${currentSlide}-${index}`} className="group relative animate-in slide-in-from-right duration-500">
                
                {/* Card Container */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:bg-slate-800/70 hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    
                    {/* Top Icon with LinkedIn style */}
                    <div className="mb-6 flex justify-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        in
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 space-y-4 text-left">
                      
                      {/* Description/Testimonial */}
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {card.description}
                      </p>
                    </div>
                    
                    {/* Bottom Author Section */}
                    <div className="mt-6 pt-4 border-t border-slate-700/50 group-hover:border-cyan-500/20 transition-colors duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
                            {card.avatar}
                          </div>
                          <div>
                            <p className="text-white font-semibold text-sm">{card.author}</p>
                            <div className="flex items-center gap-1">
                              {renderStars(card.rating)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 hover:border-cyan-500/50 rounded-full flex items-center justify-center text-white hover:text-cyan-300 transition-all duration-300 hover:scale-110 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 hover:border-cyan-500/50 rounded-full flex items-center justify-center text-white hover:text-cyan-300 transition-all duration-300 hover:scale-110 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
        
        {/* Slider Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-cyan-300/50 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default EmpowerBusinessComponent;