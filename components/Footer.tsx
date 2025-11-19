import React from 'react';
import { Linkedin, Facebook, Twitter, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-positivus-dark text-white mt-auto">
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
        
        {/* Top Row: Logo & Nav */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-2xl font-bold">
             <div className="w-7 h-7 bg-white text-positivus-dark flex items-center justify-center rounded-full">
                <Sparkles className="w-4 h-4 fill-current" />
             </div>
             <span>NOA</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
             {['Features', 'Use Cases', 'How it Works'].map(item => (
                 <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-').replace('how-it-works', 'process')}`} className="underline decoration-1 underline-offset-4 hover:text-positivus-green transition-colors text-sm md:text-base">
                     {item}
                 </a>
             ))}
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 bg-white text-positivus-dark rounded-full flex items-center justify-center hover:bg-positivus-green transition-colors">
                <Linkedin size={18} fill="currentColor" strokeWidth={0}/>
            </a>
            <a href="#" className="w-8 h-8 bg-white text-positivus-dark rounded-full flex items-center justify-center hover:bg-positivus-green transition-colors">
                <Facebook size={18} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" className="w-8 h-8 bg-white text-positivus-dark rounded-full flex items-center justify-center hover:bg-positivus-green transition-colors">
                 <Twitter size={18} fill="currentColor" strokeWidth={0} />
            </a>
          </div>
        </div>

        {/* Middle Row: Contact Info */}
        <div className="flex flex-col items-center lg:items-start gap-6 border-b border-gray-600 pb-12 mb-12">
             <div className="bg-positivus-green text-black px-2 rounded-md w-fit font-medium">Contact us:</div>
             <div className="flex flex-col gap-2 text-base font-light text-gray-300 text-center lg:text-left">
                <p>Email: hello@noa-ai.com</p>
                <p>Phone: 555-123-4567</p>
                <p>Address: 88 Tech Boulevard <br className="hidden md:block"/> Innovation Valley, CA 90210</p>
             </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-gray-400">
            <p>© 2024 NOA. All Rights Reserved.</p>
            <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;