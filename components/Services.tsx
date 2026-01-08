import React from 'react';
import SectionHeader from './SectionHeader';
import { ArrowUpRight } from 'lucide-react';

// Definitions for types to keep code clean
type ServiceCardProps = {
  title: string[];
  theme: 'gray' | 'green' | 'black';
  imageComponent: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, theme, imageComponent }) => {
  const bgClass =
    theme === 'gray' ? 'bg-positivus-gray' :
    theme === 'green' ? 'bg-positivus-green' : 'bg-positivus-dark';

  const titleBgClass =
    theme === 'gray' ? 'bg-positivus-green' :
    theme === 'green' ? 'bg-white' : 'bg-white';

  const arrowBgClass =
    theme === 'black' ? 'bg-white text-black' : 'bg-positivus-dark text-positivus-green';
  
  const textColor = theme === 'black' ? 'text-white' : 'text-black';

  return (
    <div className={`${bgClass} rounded-[30px] md:rounded-[45px] p-6 md:p-8 lg:p-12 border border-black shadow-card flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between items-center gap-8 md:gap-6 lg:gap-0 h-full min-h-[320px] transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 group overflow-hidden`}>
      <div className="flex flex-col justify-between h-full w-full sm:w-1/2 lg:w-full xl:w-1/2 gap-6 md:gap-4 xl:gap-0 z-10">
        <div>
          {title.map((line, i) => (
            <span key={i} className={`block w-fit ${titleBgClass} text-xl md:text-2xl font-medium px-2 rounded leading-tight text-black mb-1`}>
              {line}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 cursor-pointer group/btn">
            <div className={`w-10 h-10 rounded-full ${arrowBgClass} flex items-center justify-center transition-transform group-hover/btn:rotate-45 shrink-0`}>
                <ArrowUpRight size={20} />
            </div>
            <span className={`text-lg ${textColor} group-hover/btn:underline underline-offset-4`}>Learn more</span>
        </div>
      </div>
      
      <div className="w-full sm:w-1/2 lg:w-full xl:w-1/2 flex justify-center items-center xl:justify-end h-48 md:h-auto">
        <div className="w-full h-full max-h-[200px] aspect-square object-contain transition-transform duration-500 group-hover:scale-110">
            {imageComponent}
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  
  const RecommendationIcon = (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" role="img" aria-label="AI recommendation engine converting chaotic inputs into precise prompts">
        {/* Concept: Signal from Noise - Chaos entering a processor and becoming a clean laser beam */}
        <defs>
            <linearGradient id="laser-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B9FF66" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#B9FF66" stopOpacity="1"/>
            </linearGradient>
        </defs>

        {/* The Processor Box */}
        <rect x="70" y="60" width="60" height="80" rx="10" fill="#191A23" stroke="black" strokeWidth="2" />
        <circle cx="100" cy="100" r="15" fill="#333" className="animate-pulse" />
        <circle cx="100" cy="100" r="8" fill="#B9FF66" />

        {/* Input: Chaos (Animated Wave) */}
        <path d="M0 80 Q10 60 20 80 T40 80 T60 80" stroke="black" strokeWidth="2" fill="none" className="animate-float" />
        <path d="M0 100 Q15 120 30 100 T60 100" stroke="black" strokeWidth="2" fill="none" className="animate-float-delayed" />
        <path d="M0 120 Q10 130 20 110 T50 120" stroke="black" strokeWidth="2" fill="none" className="animate-float" style={{animationDuration: '4s'}} />

        {/* Output: Engineered Precision (Laser Beam) */}
        <path d="M130 100 H200" stroke="url(#laser-grad)" strokeWidth="4" className="animate-pulse-slow" />
        <path d="M130 100 H200" stroke="#B9FF66" strokeWidth="1" strokeDasharray="10 5" />
        
        {/* Target Hit */}
        <circle cx="190" cy="100" r="5" fill="#B9FF66">
             <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
  );

  const VisualizationIcon = (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" role="img" aria-label="Multi-model visualization dashboard displaying prompt results across different AI platforms">
        {/* Concept: Holo-Deck / Multi-Screen Perspective */}
        
        {/* Central Projector Base */}
        <ellipse cx="100" cy="170" rx="40" ry="10" fill="#191A23" opacity="0.2" />
        <path d="M80 160 L120 160 L110 150 L90 150 Z" fill="#191A23" />
        
        {/* Screen 1 (Left - Code) */}
        <g className="animate-float">
            <path d="M20 60 L70 50 V110 L20 120 Z" fill="white" stroke="black" strokeWidth="1.5" opacity="0.9" />
            <line x1="30" y1="70" x2="60" y2="65" stroke="#191A23" strokeWidth="2" />
            <line x1="30" y1="80" x2="50" y2="76" stroke="#191A23" strokeWidth="2" />
            <line x1="30" y1="90" x2="65" y2="85" stroke="#191A23" strokeWidth="2" />
        </g>

        {/* Screen 2 (Center - Main Result) */}
        <g className="animate-float-delayed">
            <rect x="75" y="40" width="50" height="70" fill="#B9FF66" stroke="black" strokeWidth="1.5" />
            <circle cx="100" cy="75" r="15" fill="none" stroke="#191A23" strokeWidth="2" />
            <path d="M100 60 V90 M85 75 H115" stroke="#191A23" strokeWidth="1" />
        </g>

        {/* Screen 3 (Right - Graph) */}
        <g className="animate-float" style={{animationDuration: '5s'}}>
            <path d="M180 60 L130 50 V110 L180 120 Z" fill="white" stroke="black" strokeWidth="1.5" opacity="0.9" />
            <path d="M140 100 L150 90 L160 95 L170 80" stroke="#191A23" strokeWidth="2" fill="none" />
        </g>

        {/* Projection Beams */}
        <path d="M100 150 L50 120" stroke="#B9FF66" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />
        <path d="M100 150 L100 110" stroke="#B9FF66" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />
        <path d="M100 150 L150 120" stroke="#B9FF66" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />
    </svg>
  );

  const RepositoryIcon = (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" role="img" aria-label="Centralized prompt repository with organized storage and quick access">
         {/* Concept: The Data Core - Stacked Servers for Dark Mode */}
         
         {/* Shadow Glow */}
         <ellipse cx="100" cy="175" rx="60" ry="20" fill="#B9FF66" opacity="0.1" className="animate-pulse-slow" />

         {/* Server Stack Body */}
         {/* Changed stroke to white for visibility on black background */}
         <path d="M60 40 L140 40 L140 160 L60 160 Z" fill="#2A2B36" stroke="white" strokeWidth="2" />
         
         {/* Top Cap */}
         <path d="M60 40 L100 20 L140 40" fill="#191A23" stroke="white" strokeWidth="2" />

         {/* Slots */}
         <rect x="70" y="55" width="60" height="10" rx="2" fill="#191A23" stroke="#555" strokeWidth="0.5"/>
         <rect x="70" y="75" width="60" height="10" rx="2" fill="#191A23" stroke="#555" strokeWidth="0.5"/>
         <rect x="70" y="135" width="60" height="10" rx="2" fill="#191A23" stroke="#555" strokeWidth="0.5"/>

         {/* Active Drawer Sliding Out - High Contrast */}
         <g className="animate-float">
             <rect x="55" y="95" width="90" height="14" rx="2" fill="#B9FF66" stroke="white" strokeWidth="2" className="shadow-lg" />
             {/* Data lines on drawer */}
             <rect x="75" y="100" width="5" height="4" fill="#191A23" />
             <rect x="85" y="100" width="5" height="4" fill="#191A23" />
             <rect x="110" y="102" width="20" height="2" fill="#191A23" opacity="0.8" />
         </g>

         {/* Side Lights */}
         <circle cx="130" cy="60" r="2" fill="#FF5555" className="animate-pulse" />
         <circle cx="130" cy="80" r="2" fill="#FF5555" className="animate-pulse" style={{animationDelay: '0.5s'}} />
         <circle cx="130" cy="102" r="2" fill="white" />
         <circle cx="130" cy="140" r="2" fill="#FF5555" className="animate-pulse" />
      </svg>
  );

  const SharingIcon = (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" role="img" aria-label="Community sharing network connecting users, teams, and the world">
        {/* Concept: The Synaptic Web - Nodes exchanging energy */}
        
        {/* Central Hub */}
        <circle cx="100" cy="100" r="25" fill="#191A23" stroke="black" strokeWidth="2" className="animate-pulse" />
        <circle cx="100" cy="100" r="10" fill="#B9FF66" />

        {/* Satellite Nodes */}
        <g className="animate-spin-slower" style={{transformOrigin: '100px 100px'}}>
            {/* Node 1 */}
            <circle cx="100" cy="30" r="12" fill="white" stroke="black" strokeWidth="2" />
            <text x="100" y="34" fontSize="8" textAnchor="middle">USER</text>
            
            {/* Node 2 */}
            <circle cx="170" cy="140" r="12" fill="white" stroke="black" strokeWidth="2" />
            <text x="170" y="144" fontSize="8" textAnchor="middle">TEAM</text>
            
            {/* Node 3 */}
            <circle cx="30" cy="140" r="12" fill="white" stroke="black" strokeWidth="2" />
            <text x="30" y="144" fontSize="8" textAnchor="middle">WORLD</text>
        </g>

        {/* Connections & Data Packets */}
        <path d="M100 75 V42" stroke="black" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="100" cy="60" r="3" fill="#B9FF66">
            <animate attributeName="cy" values="75;42" dur="1s" repeatCount="indefinite" />
        </circle>

        <path d="M118 112 L160 130" stroke="black" strokeWidth="1" strokeDasharray="4 2" />
         <circle cx="118" cy="112" r="3" fill="#B9FF66">
            <animate attributeName="cx" values="118;160" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="112;130" dur="1.5s" repeatCount="indefinite" />
        </circle>

        <path d="M82 112 L40 130" stroke="black" strokeWidth="1" strokeDasharray="4 2" />
         <circle cx="82" cy="112" r="3" fill="#B9FF66">
            <animate attributeName="cx" values="82;40" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="112;130" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </svg>
  );

  const TemplateIcon = (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" role="img" aria-label="Prompt template system transforming wireframes into production-ready prompts">
        {/* Concept: The Replicator - Wireframe becoming solid */}
        
        <defs>
            <mask id="scan-mask">
                <rect x="0" y="0" width="200" height="200" fill="white" />
                <rect x="0" y="100" width="200" height="100" fill="black">
                    <animate attributeName="y" values="200;50;200" dur="4s" repeatCount="indefinite" />
                </rect>
            </mask>
        </defs>

        {/* Base Platform */}
        <ellipse cx="100" cy="160" rx="60" ry="20" fill="#191A23" stroke="black" />
        
        {/* Wireframe Top (The Ghost) */}
        <path d="M60 70 L100 50 L140 70 L140 130 L100 150 L60 130 Z" fill="none" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M100 50 V150 M60 70 L100 90 L140 70" stroke="black" strokeWidth="1" strokeDasharray="4 4" />

        {/* Solid Bottom (The Reality) */}
        <g mask="url(#scan-mask)">
             <path d="M60 70 L100 50 L140 70 L140 130 L100 150 L60 130 Z" fill="#B9FF66" stroke="black" strokeWidth="2" />
             <path d="M100 50 V150 M60 70 L100 90 L140 70" stroke="black" strokeWidth="2" opacity="0.2" />
        </g>

        {/* Scanning Laser Line */}
        <line x1="40" y1="100" x2="160" y2="100" stroke="#191A23" strokeWidth="2">
            <animate attributeName="y1" values="160;60;160" dur="4s" repeatCount="indefinite" />
            <animate attributeName="y2" values="160;60;160" dur="4s" repeatCount="indefinite" />
        </line>
      </svg>
  );

  const EcosystemIcon = (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" role="img" aria-label="Complete prompt engineering ecosystem with interconnected modules for repository, visualization, and AI">
         {/* Concept: The Connected Hub - Everything physically linked and rotating together */}
         <defs>
            <filter id="eco-glow" x="-20%" y="-20%" width="140%" height="140%">
               <feGaussianBlur stdDeviation="2" result="blur" />
               <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
         </defs>

         {/* Background Static Ring (Reference Frame) */}
         <circle cx="100" cy="100" r="75" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 4" opacity="0.2" />

         {/* Central Static Hub */}
         <circle cx="100" cy="100" r="22" fill="#191A23" stroke="#B9FF66" strokeWidth="2" />
         <circle cx="100" cy="100" r="10" fill="#B9FF66" className="animate-pulse" />

         {/* The Rotating Connected System */}
         <g className="animate-spin-slower" style={{transformOrigin: '100px 100px'}}>
             
             {/* Outer Ring */}
             <circle cx="100" cy="100" r="65" stroke="white" strokeWidth="2" fill="none" opacity="0.8"/>
             
             {/* Connecting Spokes (The Pipes) */}
             <line x1="100" y1="100" x2="100" y2="35" stroke="white" strokeWidth="2" />
             <line x1="100" y1="100" x2="156" y2="132" stroke="white" strokeWidth="2" />
             <line x1="100" y1="100" x2="44" y2="132" stroke="white" strokeWidth="2" />

             {/* Module 1: Top (Repo) */}
             <g transform="translate(100, 35)">
                 <circle r="14" fill="#191A23" stroke="#B9FF66" strokeWidth="2" />
                 <rect x="-5" y="-5" width="10" height="10" rx="2" fill="white" />
             </g>

             {/* Module 2: Bot Right (Visualize) */}
             <g transform="translate(156, 132)">
                 <circle r="14" fill="#191A23" stroke="#B9FF66" strokeWidth="2" />
                 <path d="M-4 0 L4 0 M0 -4 V4" stroke="white" strokeWidth="2" />
             </g>

             {/* Module 3: Bot Left (AI) */}
             <g transform="translate(44, 132)">
                 <circle r="14" fill="#191A23" stroke="#B9FF66" strokeWidth="2" />
                 <path d="M-4 -2 L0 3 L4 -2" stroke="white" strokeWidth="2" fill="none" />
             </g>

             {/* Data Packets Traveling along the spokes (Inside the rotating group, so they stay on lines) */}
             <circle r="3" fill="#B9FF66" filter="url(#eco-glow)">
                <animate attributeName="cy" from="100" to="35" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cx" from="100" to="100" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
             </circle>

             <circle r="3" fill="#B9FF66" filter="url(#eco-glow)">
                <animate attributeName="cy" from="100" to="132" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="cx" from="100" to="156" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
             </circle>

             <circle r="3" fill="#B9FF66" filter="url(#eco-glow)">
                <animate attributeName="cy" from="100" to="132" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="cx" from="100" to="44" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" />
             </circle>
         </g>
      </svg>
  );


  return (
    <section id="features" aria-labelledby="features-heading">
      <SectionHeader 
        title="One Unified Ecosystem" 
        description="Distributed prompt knowledge is a thing of the past. NOA combines discovery, management, visualization, and community into one powerful platform." 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ServiceCard title={['AI Problem', 'Recommendations']} theme="gray" imageComponent={RecommendationIcon} />
        <ServiceCard title={['Multi-Model', 'Visualization']} theme="green" imageComponent={VisualizationIcon} />
        <ServiceCard title={['Centralized', 'Repositories']} theme="black" imageComponent={RepositoryIcon} />
        <ServiceCard title={['Community', 'Sharing']} theme="gray" imageComponent={SharingIcon} />
        <ServiceCard title={['Prompt', 'Templates']} theme="green" imageComponent={TemplateIcon} />
        <ServiceCard title={['The Complete', 'Ecosystem']} theme="black" imageComponent={EcosystemIcon} />
      </div>
    </section>
  );
};

export default Services;