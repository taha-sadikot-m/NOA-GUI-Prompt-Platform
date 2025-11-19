import React from 'react';
import SectionHeader from './SectionHeader';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      text: "A DevOps team stopped sharing prompts via Slack snippets. They now use NOA repositories to version control their 'Infrastructure as Code' generation prompts.",
    },
    {
      text: "A Content Agency used NOA's Multi-Model Visualization to compare GPT-4 vs Claude 3 for creative writing, realizing they could save 30% on API costs without losing quality.",
    },
    {
      text: "A Freelancer was stuck on a complex coding task. They entered their problem statement into NOA and were recommended a specialized prompt that solved it instantly.",
    },
  ];

  return (
    <section id="use-cases">
      <SectionHeader 
        title="Success Stories" 
        description="See how teams and individuals are moving from chaos to a structured prompt ecosystem." 
      />
      
      <div className="bg-positivus-dark rounded-[30px] md:rounded-[45px] p-8 md:p-12 lg:p-16 text-white overflow-hidden relative group">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-positivus-green opacity-5 blur-[100px] rounded-full pointer-events-none group-hover:opacity-10 transition-opacity duration-700"></div>

        <div className="flex flex-col lg:flex-row gap-8 lg:divide-x lg:divide-gray-700 divide-y lg:divide-y-0 divide-gray-700 relative z-10">
            {cases.map((item, index) => (
                <div key={index} className="flex flex-col gap-6 lg:px-8 first:pl-0 last:pr-0 pt-8 lg:pt-0 first:pt-0 transition-transform hover:-translate-y-1 duration-300">
                    <p className="text-base md:text-lg leading-relaxed text-gray-300 hover:text-white transition-colors">
                        {item.text}
                    </p>
                    <div className="flex items-center gap-2 text-positivus-green cursor-pointer hover:text-white transition-colors group/link mt-auto">
                        <span className="text-lg font-medium">Read full story</span>
                        <ArrowUpRight size={20} className="transition-transform group-hover/link:rotate-45"/>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;