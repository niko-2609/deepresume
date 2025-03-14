"use client";

import { useState } from 'react';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1); // Default to Pro plan (index 1)
  
  const plans = [
    {
      name: "Basic",
      price: "$0",
      description: "Perfect for getting started with AI resume building",
      features: [
        "1 Professional Resume Template",
        "Basic AI Content Suggestions",
        "ATS-Friendly Format",
        "PDF Export",
        "Real-time Preview",
        "Basic Support"
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$15",
      description: "Advanced features for job seekers who want to stand out",
      features: [
        "All Premium Templates",
        "Advanced AI Writing Assistant",
        "Unlimited Exports & Formats",
        "Keyword Optimization",
        "Multiple Resume Versions",
        "Cover Letter Generator",
        "Priority Email Support",
        "LinkedIn Profile Optimization"
      ],
      buttonText: "Upgrade to Pro",
      popular: true,
      badge: "Most Popular"
    },
    {
      name: "Team",
      price: "$49",
      description: "Perfect for career coaches and recruiting teams",
      features: [
        "Everything in Pro, plus:",
        "5 Team Member Accounts",
        "Custom Branding Options",
        "Team Analytics Dashboard",
        "API Access",
        "Bulk Resume Generation",
        "24/7 Priority Support",
        "Dedicated Account Manager"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your needs. All plans include our core AI-powered features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`relative rounded-2xl cursor-pointer
                ${selectedPlan === index 
                  ? 'bg-white ring-4 ring-blue-600 shadow-xl z-20 scale-[1.02]' 
                  : 'bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white hover:-translate-y-1'
                } 
                p-8 transition-all duration-150 ease-in-out
                ${selectedPlan === index ? '' : 'hover:shadow-lg'}
              `}
            >
              {/* Hover effect overlay - simplified */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent 
                opacity-0 hover:opacity-100 transition-opacity duration-150" 
              />
              
              {(plan.popular || selectedPlan === index) && (
                <span className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 
                  rounded-full text-sm font-medium shadow-md
                  transition-colors duration-150
                  ${selectedPlan === index 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-600 text-white'
                  }`}
                >
                  {plan.badge || 'Selected'}
                </span>
              )}
              
              <div className="mb-6 relative">
                <h3 className={`text-2xl font-bold transition-colors duration-150
                  ${selectedPlan === index ? 'text-blue-600' : 'text-gray-900'}`}
                >
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="ml-2 text-gray-500">/month</span>
                </div>
                <p className="mt-2 text-gray-500">{plan.description}</p>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group/item">
                      <svg
                        className={`h-6 w-6 mr-3 transition-transform duration-300 ease-out
                          group-hover/item:scale-110 group-hover/item:rotate-3 ${
                          selectedPlan === index ? 'text-blue-600' : 'text-green-500'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`relative w-full py-3 px-6 rounded-xl font-medium 
                  transition-all duration-150
                  ${selectedPlan === index
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                  }
                  active:scale-[0.98]
                `}
              >
                <span className="relative z-10">
                  {selectedPlan === index ? 'Selected Plan' : plan.buttonText}
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            All plans include a 14-day money-back guarantee
          </p>
          <div className="mt-6 flex justify-center space-x-8">
            <div className="flex items-center group hover:-translate-y-1 transition-transform duration-300">
              <svg className="h-5 w-5 text-green-500 mr-2 transition-transform duration-300 group-hover:scale-110" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                />
              </svg>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Secure Payment
              </span>
            </div>
            <div className="flex items-center group hover:-translate-y-1 transition-transform duration-300">
              <svg className="h-5 w-5 text-green-500 mr-2 transition-transform duration-300 group-hover:scale-110" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                />
              </svg>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                SSL Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 