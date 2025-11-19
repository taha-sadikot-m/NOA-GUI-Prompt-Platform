import React from 'react';
import SectionHeader from './SectionHeader';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="w-full" id="contact-us">
        <SectionHeader 
            title="Get Early Access"
            description="Be the first to experience the new prompt engineering ecosystem. Join the waitlist today."
        />
      <div className="bg-positivus-gray rounded-[30px] md:rounded-[45px] p-6 md:p-10 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-10 border border-transparent hover:border-positivus-green transition-colors duration-500">
        
        {/* Form Section */}
        <div className="w-full lg:w-1/2 z-10 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-medium mb-4">Join the revolution</h3>
            <p className="text-gray-600 text-lg">
                We are rolling out access to NOA in batches. Enter your email to secure your spot in line and get exclusive updates.
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium ml-1">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="name@company.com" 
                className="px-4 py-4 md:px-6 md:py-5 rounded-xl border border-black bg-white focus:outline-none focus:ring-2 focus:ring-positivus-green transition-all focus:scale-[1.01] text-lg" 
              />
            </div>

            <button className="bg-positivus-dark text-white py-4 md:py-5 rounded-xl hover:bg-gray-800 transition-all hover:shadow-lg hover:scale-[1.02] w-full mt-2 text-lg font-bold flex items-center justify-center gap-3 group">
              Join Waitlist
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-500 text-center md:text-left ml-1">
                Join 2,000+ engineers already on the list. No spam, ever.
            </p>
          </form>
        </div>

        {/* Visualization Section: The Floating Monolith (Exclusive Access) */}
        <div className="w-full lg:w-1/2 relative min-h-[300px] md:min-h-[400px] lg:min-h-full flex items-center justify-center">
             <div className="w-full h-full absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[450px]">
                    <defs>
                        <filter id="mono-glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="15" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <linearGradient id="mono-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2D2E36"/>
                            <stop offset="100%" stopColor="#000000"/>
                        </linearGradient>
                        <linearGradient id="beam-grad" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="0%" stopColor="#B9FF66" stopOpacity="0" />
                             <stop offset="50%" stopColor="#B9FF66" stopOpacity="0.2" />
                             <stop offset="100%" stopColor="#B9FF66" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Magnetic Field Rings */}
                    <g className="animate-spin-slower" style={{transformOrigin: '200px 200px'}}>
                        <ellipse cx="200" cy="200" rx="160" ry="60" stroke="#191A23" strokeWidth="1" strokeDasharray="10 10" opacity="0.2" />
                        <circle cx="360" cy="200" r="4" fill="#191A23" />
                    </g>
                    <g className="animate-spin-reverse" style={{transformOrigin: '200px 200px', animationDuration: '25s'}}>
                        <ellipse cx="200" cy="200" rx="140" ry="140" stroke="#191A23" strokeWidth="1" strokeDasharray="4 20" opacity="0.1" transform="rotate(45 200 200)" />
                    </g>

                    {/* Levitation Base Shadow */}
                    <ellipse cx="200" cy="320" rx="60" ry="10" fill="black" opacity="0.1">
                        <animate attributeName="rx" values="60;50;60" dur="6s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="6s" repeatCount="indefinite" />
                    </ellipse>

                    {/* The Monolith */}
                    <g className="animate-float">
                        {/* Monolith Body */}
                        <path d="M160 100 L240 80 L240 280 L160 300 Z" fill="url(#mono-grad)" stroke="#191A23" strokeWidth="2" />
                        <path d="M160 100 L130 120 L130 320 L160 300" fill="#191A23" stroke="#191A23" strokeWidth="2" />
                        <path d="M160 100 L240 80 M130 120 L160 100" stroke="white" strokeWidth="0.5" opacity="0.2" />

                        {/* Glowing Power Vein (The Crack) */}
                        <path d="M180 150 L200 180 L190 220 L210 250" stroke="#B9FF66" strokeWidth="2" filter="url(#mono-glow)" opacity="0.8">
                             <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                        </path>

                        {/* Status Light */}
                        <circle cx="200" cy="120" r="3" fill="#B9FF66" className="animate-pulse" />
                        
                        {/* Lock Icon floating in front */}
                        <circle cx="200" cy="200" r="25" fill="#191A23" stroke="#B9FF66" strokeWidth="2" />
                        <path d="M192 205 H208 V195 C208 190.582 204.418 187 200 187 C195.582 187 192 190.582 192 195 V205 Z" stroke="white" strokeWidth="2" />
                        <rect x="190" y="205" width="20" height="15" rx="2" fill="white" />
                    </g>

                    {/* Scanning Beam */}
                    <rect x="120" y="80" width="160" height="240" fill="url(#beam-grad)" opacity="0.5">
                        <animate attributeName="y" values="60;100;60" dur="4s" repeatCount="indefinite" />
                    </rect>

                    {/* Floating Particles (Waitlist Users) */}
                    <circle cx="100" cy="150" r="4" fill="#191A23" className="animate-float" style={{animationDelay: '1s'}} />
                    <circle cx="300" cy="250" r="6" fill="#191A23" className="animate-float-delayed" />
                    <rect x="280" y="100" width="8" height="8" stroke="#191A23" className="animate-spin-slow" />
                </svg>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;