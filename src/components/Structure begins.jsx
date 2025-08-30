import React from 'react';

const Structure = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)',
      color: 'white',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Animated Background Dots */}
      <div className="position-absolute w-100 h-100">
        {/* Large Network Visualization */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          opacity: 0.6
        }}>
          {/* Central Hub */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
            animation: 'pulse 3s infinite'
          }}></div>
          
          {/* Surrounding Nodes */}
          {[
            { top: '20%', left: '30%', color: '#ff6b9d', size: '25px' },
            { top: '25%', left: '70%', color: '#f9ca24', size: '20px' },
            { top: '70%', left: '25%', color: '#6c5ce7', size: '30px' },
            { top: '75%', left: '75%', color: '#00d4ff', size: '22px' },
            { top: '10%', left: '50%', color: '#ff9ff3', size: '18px' },
            { top: '90%', left: '50%', color: '#54a0ff', size: '24px' },
          ].map((node, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: node.top,
                left: node.left,
                width: node.size,
                height: node.size,
                borderRadius: '50%',
                background: `linear-gradient(45deg, ${node.color}, ${node.color}88)`,
                boxShadow: `0 0 20px ${node.color}66`,
                animation: `float ${3 + index * 0.5}s ease-in-out infinite alternate`,
                animationDelay: `${index * 0.2}s`
              }}
            ></div>
          ))}
          
          {/* Connection Lines */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#6c5ce7', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <line x1="250" y1="250" x2="150" y2="100" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.7">
              <animate attributeName="stroke-dasharray" values="0,300;150,150;300,0" dur="4s" repeatCount="indefinite"/>
            </line>
            <line x1="250" y1="250" x2="350" y2="125" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.7">
              <animate attributeName="stroke-dasharray" values="0,300;150,150;300,0" dur="4s" repeatCount="indefinite" begin="0.5s"/>
            </line>
            <line x1="250" y1="250" x2="125" y2="350" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.7">
              <animate attributeName="stroke-dasharray" values="0,300;150,150;300,0" dur="4s" repeatCount="indefinite" begin="1s"/>
            </line>
            <line x1="250" y1="250" x2="375" y2="375" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.7">
              <animate attributeName="stroke-dasharray" values="0,300;150,150;300,0" dur="4s" repeatCount="indefinite" begin="1.5s"/>
            </line>
          </svg>
        </div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: ['#00d4ff', '#ff6b9d', '#f9ca24', '#6c5ce7'][i % 4],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.6
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6 col-md-8 position-relative" style={{ zIndex: 10 }}>
            <div className="px-4 px-md-5">
              {/* Main Heading */}
              <h1 className="display-3 fw-bold mb-4" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}>
                Structure Begins With<br />
                <span style={{
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Smart Advisors
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="lead mb-4" style={{
                color: '#8b949e',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.6',
                maxWidth: '500px'
              }}>
                Launch your business with our comprehensive startup kit and get 
                expert guidance every step of the way.
              </p>
              
              {/* CTA Button */}
              <button 
                className="btn btn-lg px-5 py-3 fw-semibold position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.3)';
                }}
              >
                Explore Our Startup Kit
                <span className="ms-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        .btn:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem !important;
          }
          
          .lead {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Structure;