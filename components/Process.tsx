import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { Plus, Minus } from 'lucide-react';

const Process: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const processes = [
    {
      title: "Define Your Problem",
      content: "Simply enter your problem statement or goal. You don't need to be a prompt expert—just tell NOA what you're trying to achieve, like 'I need to summarize legal docs' or 'Generate python unit tests'."
    },
    {
      title: "Get Recommendations",
      content: "NOA's intelligent engine scans thousands of successful patterns to recommend the best prompt structures for your specific problem, saving you hours of trial and error."
    },
    {
      title: "Visualize Multi-Model Results",
      content: "Run your prompt across GPT-4, Claude, and Llama simultaneously in a split-screen view. Compare output quality, speed, and cost in real-time to pick the winner."
    },
    {
      title: "Create Repository",
      content: "Save your winning prompt as a reusable template. Organize your prompts into repositories, tag them, and version control your best engineering work."
    },
    {
      title: "Share & Collaborate",
      content: "Contribute to the ecosystem. Share your repository with the community or your team. Help others solve similar problems and gain reputation as a top engineer."
    },
    {
      title: "Use Community Prompts",
      content: "Don't reinvent the wheel. Search the community database for verified prompt templates from other experts and clone them directly into your workspace."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="process">
      <SectionHeader 
        title="How NOA Works" 
        description="From a vague problem to a perfectly engineered prompt in minutes." 
      />

      <div className="flex flex-col gap-6 relative">
        {/* Vertical Connector Line */}
        <div className="absolute left-6 md:left-12 top-6 bottom-6 w-0.5 bg-gray-200 -z-10 hidden md:block"></div>

        {processes.map((process, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border border-black rounded-[45px] p-8 md:px-12 md:py-10 transition-all duration-500 shadow-card hover:shadow-lg ${isOpen ? 'bg-positivus-green scale-[1.02]' : 'bg-positivus-gray hover:bg-gray-100'}`}
            >
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className={`text-3xl md:text-6xl font-medium transition-colors ${isOpen ? 'text-black' : 'text-gray-400'}`}>
                    {`0${index + 1}`}
                  </span>
                  <h3 className="text-lg md:text-3xl font-medium">
                    {process.title}
                  </h3>
                </div>
                <div className={`border border-black rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-positivus-gray' : 'bg-white'}`}>
                   {isOpen ? <Minus className="w-4 h-4 md:w-6 md:h-6" /> : <Plus className="w-4 h-4 md:w-6 md:h-6" />}
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 mt-8 border-t border-black pt-8' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg">
                    {process.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;