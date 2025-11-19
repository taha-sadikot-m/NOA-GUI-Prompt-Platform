import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const brands = [
    { name: 'OpenAI', opacity: 'opacity-60' },
    { name: 'Midjourney', opacity: 'opacity-50' },
    { name: 'Anthropic', opacity: 'opacity-70' },
    { name: 'Stability AI', opacity: 'opacity-60' },
    { name: 'Cohere', opacity: 'opacity-50' },
    { name: 'DeepMind', opacity: 'opacity-60' },
  ];

  return (
    <section className="flex flex-col gap-12 lg:gap-24 pt-4 md:pt-12 relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-positivus-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-10 w-48 h-48 md:w-72 md:h-72 bg-gray-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-[48%] flex flex-col items-start gap-6 md:gap-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-positivus-gray border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="w-2 h-2 rounded-full bg-positivus-green animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium">Join the Early User Waitlist</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-positivus-dark">
            Stop Searching. <br />
            Start <span className="bg-positivus-green px-2 rounded-lg inline-block transform -rotate-1 mt-2 md:mt-0 border border-black">Engineering.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
            Prompt knowledge is scattered everywhere. NOA brings it all together. Create repositories, visualize multi-model results, and find the perfect prompt for your exact problem statement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-positivus-dark text-white rounded-xl text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-positivus-dark/20 w-full sm:w-auto border border-transparent hover:border-positivus-green">
              Join Waitlist
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </button>
            <button className="px-8 py-4 bg-white border border-black text-positivus-dark rounded-xl text-lg hover:bg-gray-50 transition-all flex items-center justify-center w-full sm:w-auto shadow-sm">
              How it Works
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
            <div className="flex -space-x-2">
               {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden shadow-sm">
                       <img src={`https://picsum.photos/seed/${i + 10}/100`} alt="user" className="w-full h-full object-cover"/>
                   </div>
               ))}
            </div>
            <p className="font-medium"><span className="text-black font-bold">2,000+</span> engineers joined</p>
          </div>
        </div>

        {/* Mind Blowing Visualization - The Orchestrator */}
        <div className="w-full lg:w-[52%] flex justify-center items-center relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 800 800" className="w-full h-full max-w-[700px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                         <linearGradient id="core-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#191A23" />
                            <stop offset="100%" stopColor="#2D2E36" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Background Mesh Grid */}
                    <g opacity="0.1">
                         <path d="M0 400 H800" stroke="#191A23" strokeWidth="1" />
                         <path d="M400 0 V800" stroke="#191A23" strokeWidth="1" />
                         <circle cx="400" cy="400" r="200" stroke="#191A23" strokeWidth="1" strokeDasharray="10 10" />
                         <circle cx="400" cy="400" r="350" stroke="#191A23" strokeWidth="1" strokeDasharray="20 20" />
                    </g>

                    {/* Orbiting Elements - Distributed Knowledge */}
                    <g className="animate-spin-slower" style={{transformOrigin: '400px 400px'}}>
                         {/* Outer Ring Elements */}
                         <g transform="translate(400, 50)">
                              <rect x="-20" y="-20" width="40" height="40" rx="8" fill="white" stroke="#191A23" strokeWidth="2" />
                              <text x="0" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#191A23">DATA</text>
                         </g>
                         <g transform="translate(400, 750) rotate(180)">
                              <path d="M0 -20 L20 10 L-20 10 Z" fill="#B9FF66" stroke="#191A23" strokeWidth="2" />
                         </g>
                         <g transform="translate(50, 400) rotate(-90)">
                              <circle cx="0" cy="0" r="20" fill="#191A23" />
                              <circle cx="0" cy="0" r="10" fill="#B9FF66" className="animate-pulse" />
                         </g>
                         <g transform="translate(750, 400) rotate(90)">
                              <rect x="-15" y="-25" width="30" height="50" rx="5" fill="white" stroke="#191A23" strokeWidth="2" />
                              <line x1="-10" y1="-10" x2="10" y2="-10" stroke="#191A23" strokeWidth="2" />
                              <line x1="-10" y1="0" x2="10" y2="0" stroke="#191A23" strokeWidth="2" />
                              <line x1="-10" y1="10" x2="10" y2="10" stroke="#191A23" strokeWidth="2" />
                         </g>
                    </g>

                    {/* Inner Ring - Connections */}
                    <g className="animate-spin-reverse" style={{transformOrigin: '400px 400px'}}>
                        <circle cx="400" cy="400" r="250" stroke="#191A23" strokeWidth="1" opacity="0.2" />
                        <circle cx="650" cy="400" r="6" fill="#B9FF66" />
                        <circle cx="150" cy="400" r="6" fill="#B9FF66" />
                        <circle cx="400" cy="150" r="6" fill="#B9FF66" />
                    </g>

                    {/* Central Core - The Platform */}
                    <g className="animate-float">
                        {/* Core Hexagon */}
                        <path d="M400 280 L504 340 V460 L400 520 L296 460 V340 Z" fill="url(#core-grad)" stroke="#B9FF66" strokeWidth="3" className="shadow-2xl" />
                        
                        {/* Inner Tech details */}
                        <path d="M400 310 L470 350 V430 L400 470 L330 430 V350 Z" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
                        
                        {/* Central Logo/Symbol */}
                        <circle cx="400" cy="400" r="40" fill="#B9FF66" className="animate-pulse" />
                        <path d="M385 400 L400 380 L415 400 M400 415 V385" stroke="#191A23" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </g>

                    {/* Connecting Beams - Collecting the distributed knowledge */}
                    <g>
                        <path d="M400 100 L400 280" stroke="#191A23" strokeWidth="2" strokeDasharray="10 10" className="animate-pulse" />
                        <path d="M400 700 L400 520" stroke="#191A23" strokeWidth="2" strokeDasharray="10 10" className="animate-pulse" />
                        <path d="M100 400 L296 400" stroke="#191A23" strokeWidth="2" strokeDasharray="10 10" className="animate-pulse" />
                        <path d="M700 400 L504 400" stroke="#191A23" strokeWidth="2" strokeDasharray="10 10" className="animate-pulse" />
                    </g>

                    {/* Floating Output Cards (Results) */}
                    <g className="animate-float-delayed">
                         <rect x="550" y="250" width="140" height="100" rx="10" fill="white" stroke="#191A23" strokeWidth="2" className="shadow-xl" />
                         <text x="570" y="280" fontSize="12" fontFamily="monospace" fill="#555">Result: Success</text>
                         <rect x="570" y="295" width="80" height="8" rx="4" fill="#B9FF66" />
                         <rect x="570" y="315" width="100" height="8" rx="4" fill="#E5E5E5" />
                         <rect x="570" y="330" width="60" height="8" rx="4" fill="#E5E5E5" />
                    </g>

                    <g className="animate-float" style={{animationDelay: '1s'}}>
                         <rect x="120" y="500" width="160" height="110" rx="10" fill="#191A23" stroke="#B9FF66" strokeWidth="2" className="shadow-xl" />
                         <text x="140" y="530" fontSize="12" fontFamily="monospace" fill="#B9FF66">{`> prompt_v2`}</text>
                         <text x="140" y="550" fontSize="12" fontFamily="monospace" fill="white">Optimized.</text>
                         <path d="M140 570 H260" stroke="#555" strokeWidth="1" />
                         <circle cx="250" cy="590" r="10" fill="#B9FF66" />
                         <path d="M245 590 L250 595 L255 585" stroke="#191A23" strokeWidth="2" />
                    </g>

                </svg>
            </div>
        </div>
      </div>

      {/* Brand Logos Strip - Context Switch */}
      <div className="w-full overflow-hidden py-8 border-t border-b border-gray-100 bg-gray-50/50">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 px-4 text-center">
            <span className="text-gray-500 font-medium tracking-wide uppercase text-sm">Works seamlessly with</span>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                {brands.map((brand, idx) => (
                <div key={idx} className={`flex items-center justify-center`}>
                    <span className="text-xl lg:text-2xl font-bold font-sans text-positivus-dark">{brand.name}</span>
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;