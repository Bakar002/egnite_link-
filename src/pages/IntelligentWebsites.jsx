import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Brain, Network, Zap, Target, MessageSquare, Cpu, Globe, Sparkles, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const IntelligentWebsites = () => {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all elements with data-animate attribute after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      if (observerRef.current) {
        const elements = document.querySelectorAll("[data-animate]");
        elements.forEach((el) => {
          if (el.id) {
            observerRef.current.observe(el);
          }
        });
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.6); }
        }
      `}</style>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-[#000010]">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          {/* Hero Background Image - Image 1a */}
          <img 
            src="/1a.png" 
            alt="Intelligent Websites Hero Background" 
            className="w-full h-full object-cover opacity-40 animate-[fadeIn_2s_ease-in-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000cc] via-[#05002688] to-[#000000cc]" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] animate-[fadeIn_3s_ease-in-out]" style={{
            backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <main className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1 z-10 max-w-7xl mx-auto">
          {/* Animated Glow Effect Behind Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl -z-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 sm:mb-8 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent tracking-tight animate-[slideDown_1s_ease-out]">
              Intelligent Websites
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-5xl mb-4 sm:mb-6 font-light tracking-wide animate-[slideUp_1s_ease-out_0.2s_both]">
              Consulted, not browsed
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mb-8 sm:mb-12 leading-relaxed font-light animate-[slideUp_1s_ease-out_0.4s_both]">
              Web-native intelligence systems that represent your brand's knowledge, reasoning, and authority. Built to be consulted by humans and AI systems alike.
            </p>
            
            {/* Subtle CTA */}
            <div className="flex items-center justify-center gap-2 text-cyan-400 group cursor-pointer animate-[slideUp_1s_ease-out_0.6s_both] hover:gap-3 transition-all duration-300">
              <span className="text-sm sm:text-base font-medium group-hover:text-cyan-300 transition-colors">Explore the category</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
        </main>
      </section>

      {/* Category Definition Section */}
      <section className="relative bg-black py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div 
            data-animate="fade-up"
            className={`inline-block mb-8 transition-all duration-1000 ${isVisible['category-badge'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            id="category-badge"
          >
            <span className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300">
              Category Definition
            </span>
          </div>
          
          <h2 
            data-animate="fade-up"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 leading-tight transition-all duration-1000 delay-100 ${isVisible['category-heading'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            id="category-heading"
          >
            This is not a feature.<br className="hidden sm:block" /> This is not a chatbot.
          </h2>
          
          <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
            <p 
              data-animate="fade-up"
              className={`font-light transition-all duration-1000 delay-200 ${isVisible['category-p1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              id="category-p1"
            >
              Intelligent Websites are web-native intelligence systems. They are not traditional websites with AI features bolted on. They are not chatbots embedded in pages.
            </p>
            <p 
              data-animate="fade-up"
              className={`font-light transition-all duration-1000 delay-300 ${isVisible['category-p2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              id="category-p2"
            >
              They represent a brand's knowledge, reasoning, and authority as <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">infrastructure</span>—not as an add-on, but as the foundation itself.
            </p>
            <div 
              data-animate="fade-up"
              className={`pt-6 transition-all duration-1000 delay-400 ${isVisible['category-highlight'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              id="category-highlight"
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-bold hover:scale-105 transition-transform duration-300 inline-block">
                Intelligence is infrastructure, not a chatbot or feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Critical Distinction */}
      <section className="relative bg-[#000b13] py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              The Critical Distinction
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding what Intelligent Websites are—and what they are not
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* GPT Chatbots - What it's NOT */}
            <article 
              data-animate="slide-in-left"
              className={`relative group transition-all duration-1000 ${isVisible['comparison-left'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              id="comparison-left"
            >
              <div 
                className="relative rounded-3xl p-8 sm:p-10 md:p-12 border border-gray-700/50 h-full backdrop-blur-sm transition-all duration-500 hover:border-red-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(148.43deg,#1a1a1a_29.96%,#2a2a2a_81.02%)"
                }}
              >
                {/* Top Border Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/50 via-red-400/30 to-transparent rounded-t-3xl"></div>
                
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wider px-3 py-1 border border-red-400/30 rounded-full bg-red-400/5">
                    Not This
                  </span>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">GPT Chatbots</h3>
                  </div>
                  
                  <ul className="space-y-4 text-gray-300 text-base">
                    <li className="flex items-start gap-4 group/item">
                      <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>AI as a feature or add-on</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Conversational interface only</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Separate from website structure</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Human-to-AI communication only</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Not machine-legible to AI systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Intelligent Websites - What it IS */}
            <article 
              data-animate="slide-in-right"
              className={`relative group transition-all duration-1000 delay-200 ${isVisible['comparison-right'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              id="comparison-right"
            >
              <div 
                className="relative rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-cyan-500/50 h-full backdrop-blur-sm transition-all duration-500 hover:border-cyan-400 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)",
                  boxShadow: "0 0 60px rgba(34, 211, 238, 0.1)"
                }}
              >
                {/* Top Border Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-t-3xl"></div>
                
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider px-3 py-1 border border-cyan-400/50 rounded-full bg-cyan-400/10">
                    This Is It
                  </span>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/50 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Intelligent Websites</h3>
                  </div>
                  
                  <ul className="space-y-4 text-gray-200 text-base">
                    <li className="flex items-start gap-4 group/item">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Intelligence as infrastructure</strong> — the foundation, not a feature</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Web-native intelligence systems</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Built into the website's core architecture</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Speak to AI systems as first-class audiences</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Machine-legible authority and knowledge representation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-block p-5 sm:p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-blue-600/5">
              <p className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-bold">
                Intelligence is infrastructure, not a chatbot or feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison Image - Image 2b */}
      <section className="bg-[#000b13] py-12 px-4 sm:px-6 lg:px-8">
        <div 
          data-animate="fade-up"
          className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible['image-2b'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          id="image-2b"
        >
          <img 
            src="/2b.png" 
            alt="Chatbot vs Intelligent Website Comparison" 
            className="w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </section>

      {/* Brand Intelligence Representation */}
      <section className="relative bg-[#020304] py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-6">
              <span className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5">
                Brand Intelligence
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Brand Intelligence Representation
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              How your website becomes the authoritative source for your brand's knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Brain, title: "Canonical Knowledge Source", desc: "Your website becomes the definitive source of truth for your brand's knowledge, reasoning, and expertise—structured for both human understanding and AI consumption.", id: "brand-1" },
              { icon: Network, title: "Machine-Legible Authority", desc: "Built with semantic structure and metadata that AI systems can read, understand, and cite. Your authority becomes machine-readable, not just human-readable.", id: "brand-2" },
              { icon: Sparkles, title: "Trusted AI Reference Point", desc: "When AI systems need authoritative information about your brand, domain, or expertise, they consult your Intelligent Website—not third-party sources or outdated data.", id: "brand-3" }
            ].map((item, index) => (
              <article 
                key={item.id}
                data-animate="fade-up"
                className={`group relative rounded-3xl p-8 sm:p-10 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 ${isVisible[item.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  background: "linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)",
                  transitionDelay: `${index * 100}ms`
                }}
                id={item.id}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}

            <article 
              className="group relative rounded-3xl p-8 sm:p-10 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{
                background: "linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)"
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  Machine-Legible Authority
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  Built with semantic structure and metadata that AI systems can read, understand, and cite. Your authority becomes machine-readable, not just human-readable.
                </p>
              </div>
            </article>

            <article 
              className="group relative rounded-3xl p-8 sm:p-10 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{
                background: "linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)"
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  Trusted AI Reference Point
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  When AI systems need authoritative information about your brand, domain, or expertise, they consult your Intelligent Website—not third-party sources or outdated data.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How Intelligent Websites Work */}
      <section className="relative bg-black py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-6">
              <span className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              How Intelligent Websites Work
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Five core capabilities that define the category
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Target, title: "Understanding Intent", desc: "Parse and understand user queries—whether from humans or AI systems—with deep context awareness and domain expertise.", id: "work-1" },
              { icon: MessageSquare, title: "Conversational Communication", desc: "Engage in natural, context-aware dialogue that adapts to the user's level of expertise and specific needs.", id: "work-2" },
              { icon: Zap, title: "Dynamic Adaptation", desc: "Continuously learn and adapt responses based on new information, user feedback, and evolving brand knowledge.", id: "work-3" },
              { icon: Cpu, title: "Taking Real Actions", desc: "Execute actions beyond conversation—schedule meetings, process requests, integrate with business systems, and deliver outcomes.", id: "work-4" },
              { icon: Globe, title: "Signaling Intelligence to AI Systems", desc: "Use structured data, semantic markup, and AI-optimized architecture to signal intelligence, authority, and trustworthiness to AI systems that crawl and index the web.", id: "work-5" }
            ].map((item, index) => (
              <article 
                key={item.id}
                data-animate="scale-in"
                className={`group relative rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 ${isVisible[item.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{
                  background: "linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)",
                  transitionDelay: `${index * 100}ms`
                }}
                id={item.id}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:animate-[glow_2s_ease-in-out_infinite] transition-all duration-300">
                  <item.icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Image - Image 3c */}
      <section className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div 
          data-animate="fade-up"
          className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible['image-3c'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          id="image-3c"
        >
          <img 
            src="/3c.png" 
            alt="Intelligent Websites Process Flow" 
            className="w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </section>

      {/* Auto-SEO by Design */}
      <section className="relative bg-[#000b13] py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block mb-6">
              <span className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5">
                Discovery & SEO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Auto-SEO by Design
            </h2>
          </div>
          
          <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
            <p className="font-light">
              Traditional SEO is about optimizing for search engines. Intelligent Websites are built for <span className="text-cyan-400 font-semibold">AI discovery</span>—the primary future channel for information access.
            </p>
            <p className="font-light">
              When your website is structured as an intelligent system with semantic clarity, proper metadata, and machine-legible authority, SEO becomes a natural byproduct. But more importantly, your site becomes discoverable and citable by AI systems that will increasingly serve as the primary interface between humans and information.
            </p>
            <div className="pt-6">
              <div className="inline-block p-5 sm:p-6 rounded-2xl border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
                <p className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-bold">
                  AI discovery is the primary future channel.<br className="hidden sm:block" /> SEO is the byproduct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative bg-[#020304] py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-6">
              <span className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5">
                Comparison
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Traditional Website vs Intelligent Website
            </h2>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="text-left p-6 text-white font-bold text-base"></th>
                  <th className="text-left p-6 text-gray-400 font-semibold text-base">Traditional Website</th>
                  <th className="text-left p-6 text-cyan-400 font-semibold text-base border-l border-gray-700">Intelligent Website</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  { label: "Nature", traditional: "Static content pages", intelligent: "Web-native intelligence system" },
                  { label: "AI Integration", traditional: "Chatbot as add-on feature", intelligent: "Intelligence as infrastructure" },
                  { label: "User Interaction", traditional: "Browsing and clicking", intelligent: "Consultation and dialogue" },
                  { label: "AI System Access", traditional: "Not optimized for AI consumption", intelligent: "First-class AI audience support" },
                  { label: "Knowledge Representation", traditional: "Human-readable only", intelligent: "Machine-legible authority" },
                  { label: "Adaptability", traditional: "Manual updates required", intelligent: "Dynamic adaptation and learning" },
                  { label: "Discovery Channel", traditional: "Search engine optimization", intelligent: "AI discovery (SEO as byproduct)" },
                  { label: "Purpose", traditional: "Information display", intelligent: "Intelligence consultation" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
                    <td className="p-6 font-bold text-white text-base">{row.label}</td>
                    <td className="p-6 text-sm transition-colors hover:text-gray-200">{row.traditional}</td>
                    <td className="p-6 text-cyan-300 border-l border-gray-800 font-medium text-sm transition-colors hover:text-cyan-200">{row.intelligent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technology Attribution */}
      <section className="relative bg-black py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block mb-6">
              <span className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5">
                Technology Stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Technology Attribution
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              The architectural foundation that makes Intelligent Websites possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <article 
              className="group relative rounded-3xl p-8 sm:p-10 border-2 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{
                background: "linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)"
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-t-3xl"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Intelligence Layer</h3>
              <p className="text-cyan-400 font-bold text-lg mb-2">Powered by IntLive</p>
              <p className="text-gray-300 text-base leading-relaxed">
                The intelligence layer that enables understanding, reasoning, and conversational capabilities.
              </p>
            </article>

            <article 
              className="group relative rounded-3xl p-8 sm:p-10 border-2 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{
                background: "linear-gradient(148.43deg,#262628_29.96%,#4B4B4D_81.02%)"
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-t-3xl"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Infrastructure & Governance</h3>
              <p className="text-cyan-400 font-bold text-lg mb-2">Engineered by E-Gnite Link AI Systems</p>
              <p className="text-gray-300 text-base leading-relaxed">
                The architectural foundation, governance framework, and systems engineering that make Intelligent Websites possible.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Technology Architecture Image - Image 4d */}
      <section className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div 
          data-animate="fade-up"
          className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible['image-4d'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          id="image-4d"
        >
          <img 
            src="/4d.png" 
            alt="Intelligent Websites Architecture" 
            className="w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </section>

      {/* Final Locked Category Statement */}
      <section className="relative bg-[#000b13] py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div 
            data-animate="scale-in"
            className={`relative rounded-3xl p-10 sm:p-16 md:p-20 border-2 border-cyan-500/50 bg-gradient-to-br from-[#000b13] via-[#020304] to-[#000b13] backdrop-blur-sm transition-all duration-1000 hover:scale-[1.01] hover:shadow-[0_0_100px_rgba(34,211,238,0.3)] ${isVisible['final-statement'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{
              boxShadow: "0 0 80px rgba(34, 211, 238, 0.2), inset 0 0 60px rgba(34, 211, 238, 0.05)"
            }}
            id="final-statement"
          >
            {/* Animated Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 via-cyan-400 to-blue-500 rounded-t-3xl animate-[pulse_3s_ease-in-out_infinite]"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-cyan-400/50"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-cyan-400/50"></div>
            
            <div className="text-center space-y-8 sm:space-y-12">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider px-4 py-2 border border-cyan-400/50 rounded-full bg-cyan-400/10 inline-block mb-6">
                  Category Definition
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
                  The Canonical Statement
                </h2>
              </div>
              
              <div className="space-y-5 sm:space-y-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-5xl mx-auto">
                <p className="font-light">
                  <strong className="text-white font-bold">Intelligent Websites</strong> are web-native intelligence systems that represent a brand's knowledge, reasoning, and authority as infrastructure.
                </p>
                <p className="font-light">
                  They are built to be <strong className="text-cyan-400 font-bold">consulted, not browsed</strong>—by both humans and AI systems.
                </p>
                <p className="font-light">
                  Intelligence is not a feature or chatbot. <span className="text-white font-semibold">It is the foundation.</span>
                </p>
              </div>
              
              <div className="pt-6 sm:pt-8 border-t border-cyan-500/30">
                <p className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-bold tracking-tight">
                  This defines the category.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntelligentWebsites;
