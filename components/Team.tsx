import React from 'react';
import SectionHeader from './SectionHeader';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  desc: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, desc, image }) => (
  <div className="border border-black rounded-[45px] p-8 shadow-card bg-white relative group hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-start gap-5 mb-6 pb-6 border-b border-black relative">
       {/* Image container with abstract shape background */}
      <div className="relative">
          <div className="absolute -top-2 -right-2 bg-positivus-green w-full h-full rounded-[20px] transform rotate-6 -z-10 group-hover:rotate-12 transition-transform duration-300"></div> 
          <img src={image} alt={name} className="w-24 h-24 rounded-[20px] object-cover border border-black bg-gray-200 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500" />
      </div>
      
      <div className="flex-1 flex flex-col justify-end h-24 pb-1">
        <h4 className="text-xl font-medium">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>

      <div className="absolute top-0 right-0 w-8 h-8 bg-black rounded-full flex items-center justify-center text-positivus-green cursor-pointer hover:scale-110 transition-transform">
        <Linkedin size={16} fill="currentColor" />
      </div>
    </div>
    <p className="text-base text-gray-700 group-hover:text-black transition-colors">
      {desc}
    </p>
  </div>
);

const Team: React.FC = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      desc: "Former AI Researcher at DeepMind. 10+ years in machine learning and NLP.",
      image: "https://picsum.photos/200?random=1"
    },
    {
      name: "Jane Doe",
      role: "Head of Product",
      desc: "7+ years scaling SaaS platforms. Passionate about making AI accessible to everyone.",
      image: "https://picsum.photos/200?random=2"
    },
    {
      name: "Michael Brown",
      role: "Lead Prompt Engineer",
      desc: "Expert in LLM fine-tuning and prompt optimization. Creator of the viral 'Master-Prompt' library.",
      image: "https://picsum.photos/200?random=3"
    },
    {
      name: "Emily Johnson",
      role: "Senior AI Developer",
      desc: "Specializes in API integrations and scalable architecture for high-concurrency AI applications.",
      image: "https://picsum.photos/200?random=4"
    },
    {
      name: "Brian Williams",
      role: "Community Manager",
      desc: "Building the largest community of prompt engineers. 4+ years in tech community building.",
      image: "https://picsum.photos/200?random=5"
    },
    {
      name: "Sarah Kim",
      role: "Content Strategist",
      desc: "Educating the world on Generative AI. Skilled in creating tutorials and documentation.",
      image: "https://picsum.photos/200?random=6"
    }
  ];

  return (
    <section id="team">
      <SectionHeader 
        title="Team" 
        description="Meet the minds building the future of prompt engineering." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>

      <div className="flex justify-end">
        <button className="px-10 py-4 bg-positivus-dark text-white rounded-xl w-full md:w-auto hover:bg-gray-800 transition-all hover:shadow-lg hover:scale-105">
            See all team
        </button>
      </div>
    </section>
  );
};

export default Team;