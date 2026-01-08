import React from 'react';
import { Zap } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="w-full" aria-label="Call to action">
      <div className="bg-positivus-dark rounded-[30px] md:rounded-[45px] p-8 md:p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-10 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
             <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(185,255,102,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(185,255,102,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="w-full lg:w-1/2 z-10 flex flex-col items-start gap-6 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight w-full">
            Fragmented Knowledge <br/> <span className="text-positivus-green">Ends Here.</span>
          </h3>
          <p className="text-base md:text-lg text-gray-300 max-w-md mx-auto lg:mx-0">
            Don't let your best prompts get lost in a notepad. Join the centralized ecosystem and master prompt engineering with the community.
          </p>
          <button aria-label="Join the NOA early user waitlist" className="bg-positivus-green text-positivus-dark font-bold text-lg px-8 py-4 rounded-xl hover:bg-white transition-all hover:scale-105 flex items-center justify-center gap-2 mx-auto lg:mx-0 w-full sm:w-auto">
            <Zap size={20} className="fill-current" aria-hidden="true" />
            Join Early User Waitlist
          </button>
        </div>

        <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end h-[300px] md:h-[350px]">
             {/* Visualization: Chaos to Order (Entropy Reduction) */}
             <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[500px]">
                 <defs>
                    <radialGradient id="funnel-glow" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="#B9FF66" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#B9FF66" stopOpacity="0"/>
                    </radialGradient>
                 </defs>

                 {/* The Funnel Zone */}
                 <path d="M50 50 L180 130 L180 170 L50 250" fill="url(#funnel-glow)" opacity="0.3" />
                 
                 {/* Chaotic Particles (Left Side) */}
                 <g>
                     <circle cx="60" cy="80" r="4" fill="white" opacity="0.6" className="animate-float" />
                     <circle cx="80" cy="200" r="6" fill="white" opacity="0.4" className="animate-float-delayed" />
                     <rect x="40" y="150" width="10" height="10" stroke="white" opacity="0.5" className="animate-spin-slow" />
                     <path d="M70 100 L90 120" stroke="white" strokeWidth="1" opacity="0.3" />
                     <circle cx="100" cy="60" r="3" fill="#B9FF66" opacity="0.7" />
                     <circle cx="120" cy="230" r="5" fill="#B9FF66" opacity="0.5" />
                 </g>

                 {/* The Core (Singularity) */}
                 <circle cx="200" cy="150" r="30" fill="#191A23" stroke="#B9FF66" strokeWidth="2" className="animate-pulse" />
                 <circle cx="200" cy="150" r="15" fill="#B9FF66" />

                 {/* Organized Beam (Right Side) */}
                 <g>
                     <path d="M230 150 H380" stroke="#B9FF66" strokeWidth="4" strokeOpacity="0.8" />
                     <path d="M230 140 H350" stroke="white" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="10 5" className="animate-pulse" />
                     <path d="M230 160 H350" stroke="white" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="10 5" className="animate-pulse" />
                     
                     {/* Moving Data Packets on the organized beam */}
                     <circle r="4" fill="white">
                        <animateMotion path="M230 150 H380" dur="1s" repeatCount="indefinite" />
                     </circle>
                 </g>

             </svg>
        </div>
      </div>
    </section>
  );
};

export default CTA;