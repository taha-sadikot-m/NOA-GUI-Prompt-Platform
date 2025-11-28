import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-positivus-dark overflow-x-hidden font-sans flex flex-col">
      <Header />
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 flex-grow pt-24 md:pt-32">
        <main className="space-y-20 md:space-y-28 lg:space-y-32 pb-20">
          <Hero />
          <Services />
          <CTA />
          <CaseStudies />
          <Process />
          <Pricing />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;