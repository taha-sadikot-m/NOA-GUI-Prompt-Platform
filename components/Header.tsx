import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated nav items to match actual page sections
  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'How it Works', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Offset for fixed header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-5 md:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-2xl font-bold tracking-tight cursor-pointer group">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-positivus-dark text-positivus-green flex items-center justify-center rounded-full group-hover:rotate-12 transition-transform">
               <Sparkles className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            </div>
            <span>NOA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-lg font-normal hover:text-positivus-green transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-positivus-green after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact-us"
              onClick={(e) => scrollToSection(e, '#contact-us')}
              className="px-6 py-3 border border-positivus-dark rounded-xl hover:bg-positivus-dark hover:text-white transition-all duration-300 active:scale-95"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-positivus-dark hover:bg-gray-100 rounded-lg transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white shadow-xl z-50 p-6 flex flex-col gap-6 border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-center py-2 hover:bg-gray-50 rounded-lg"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact-us"
              onClick={(e) => scrollToSection(e, '#contact-us')}
              className="px-6 py-3 bg-positivus-dark text-white rounded-xl hover:bg-gray-800 w-full text-center"
            >
              Join Waitlist
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;