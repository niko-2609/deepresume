import React from 'react';

interface OnboardingProgressProps {
  currentStep: number;
  steps: string[];
}

export default function OnboardingProgress({ currentStep, steps }: OnboardingProgressProps) {
  return (
    <div className="relative">
      {/* Progress Line */}
      <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
        <div
          className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="relative z-10 flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                index <= currentStep
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-gray-300 bg-white text-gray-500'
              }`}
            >
              {index < currentStep ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={`mt-2 text-sm font-medium ${
                index <= currentStep ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 