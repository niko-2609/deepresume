"use client";

import FormOnboarding from "@/features/onboarding/components/Onboarding";

// import { useState } from 'react';
// import BasicInfo from '@/features/onboarding/components/BasicInfo';
// import WorkHistory from '@/features/onboarding/components/WorkHistory'
// import Education from '@/features/onboarding/components/Education';
// import OnboardingProgress from '@/features/onboarding/components/OnboardingProgress';

export default function Onboarding() {
  // const [step, setStep] = useState(0);
  // const steps = ['Basic Info', 'Work History', 'Education'];

  // const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  // const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create Your Profile</h1>
            <p className="mt-2 text-gray-600">
              Let&apos;s get started by setting up your professional profile
            </p>
          </div>

          {/* Progress Bar */}
          {/* <OnboardingProgress currentStep={step} steps={steps} /> */}

          {/* Form Steps */}
          {/* <div className="mt-8">
            {step === 0 && <BasicInfo onNext={nextStep} />}
            {step === 1 && <WorkHistory onNext={nextStep} onBack={prevStep} />}
            {step === 2 && <Education onNext={nextStep} onBack={prevStep} />}
          </div> */}

          <FormOnboarding />
        </div>
      </div>
    </div>
  );
}