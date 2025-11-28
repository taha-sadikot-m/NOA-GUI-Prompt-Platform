import React from 'react';
import SectionHeader from './SectionHeader';
import { Check, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/month',
      description: 'Perfect for individuals exploring prompt engineering.',
      features: [
        'Access to basic prompt library',
        '50 AI generations per day',
        'Community support',
        'Basic prompt templates',
        '1 User'
      ],
      buttonText: 'Get Started',
      isPopular: false,
      variant: 'light'
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For professionals and creators scaling their workflow.',
      features: [
        'Unlimited prompt library access',
        'Unlimited AI generations',
        'Priority email support',
        'Advanced prompt optimization',
        'Team collaboration (up to 5 users)',
        'API Access'
      ],
      buttonText: 'Start Free Trial',
      isPopular: true,
      variant: 'dark'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations.',
      features: [
        'Custom prompt engineering workshops',
        'Dedicated account manager',
        'SSO & Advanced Security',
        'Custom model fine-tuning',
        'Unlimited users',
        'SLA Guarantees'
      ],
      buttonText: 'Contact Sales',
      isPopular: false,
      variant: 'light'
    }
  ];

  return (
    <section className="w-full" id="pricing">
      <SectionHeader 
        title="Pricing" 
        description="Choose the perfect plan for your prompt engineering needs. Transparent pricing, no hidden fees." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`rounded-[45px] p-8 md:p-10 border border-positivus-dark transition-all duration-300 hover:shadow-[0_5px_0_0_#191A23] flex flex-col h-full ${
              plan.variant === 'dark' 
                ? 'bg-positivus-dark text-white' 
                : 'bg-positivus-gray text-positivus-dark'
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className={`text-2xl font-medium mb-2 ${plan.variant === 'dark' ? 'text-white' : 'text-positivus-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.variant === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>
              {plan.isPopular && (
                <span className="bg-positivus-green text-positivus-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Popular
                </span>
              )}
            </div>

            <div className="mb-8">
              <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
              <span className={`text-lg ${plan.variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.period}
              </span>
            </div>

            <div className="flex-grow mb-8">
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 rounded-full p-0.5 ${
                      plan.variant === 'dark' ? 'bg-positivus-green text-positivus-dark' : 'bg-positivus-dark text-positivus-green'
                    }`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className={`text-base ${plan.variant === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className={`w-full py-4 rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-2 group ${
              plan.variant === 'dark'
                ? 'bg-positivus-green text-positivus-dark hover:bg-white'
                : 'bg-positivus-dark text-white hover:bg-gray-800'
            }`}>
              {plan.buttonText}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
