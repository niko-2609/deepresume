'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BasicInfo from './BasicInfo';
import WorkHistory from './WorkHistory';
import Education from './Education';
import OnboardingProgress from './OnboardingProgress';
import { submitOnboardingData } from '../services/onboarding-service';
import { OnboardingData } from '../models/onboarding';

interface BasicInfoData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  summary: string;
}

interface WorkExperienceData {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface EducationData {
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

const STEPS = ['Basic Info', 'Work History', 'Education'];

export default function Onboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<OnboardingData>>({});

  const handleBasicInfoSubmit = (basicInfo: BasicInfoData) => {
    setFormData(prev => ({
      ...prev,
      user: {
        fullName: basicInfo.fullName,
        email: basicInfo.email,
        phone: basicInfo.phone,
        location: basicInfo.location,
        title: basicInfo.title,
        summary: basicInfo.summary
      }
    }));
    setCurrentStep(1);
  };

  const handleWorkHistorySubmit = (workHistory: WorkExperienceData[]) => {
    setFormData(prev => ({
      ...prev,
      workExperience: workHistory.map(exp => ({
        company: exp.company,
        position: exp.title,
        location: exp.location,
        startDate: new Date(exp.startDate),
        endDate: exp.current ? undefined : new Date(exp.endDate),
        isCurrent: exp.current,
        description: exp.description
      }))
    }));
    setCurrentStep(2);
  };

  const handleEducationSubmit = async (education: EducationData[]) => {
    try {
      setIsSubmitting(true);
      const finalData = {
        ...formData,
        education: education.map(edu => ({
          school: edu.school,
          degree: edu.degree,
          field: edu.field,
          location: edu.location,
          startDate: new Date(edu.startDate),
          endDate: edu.current ? undefined : new Date(edu.endDate),
          isCurrent: edu.current,
          description: edu.description
        }))
      } as OnboardingData;

      await submitOnboardingData(finalData);
      router.push('/generate');
    } catch (error) {
      console.error('Failed to submit onboarding data:', error);
      alert('Failed to submit onboarding data. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-12">
        <OnboardingProgress currentStep={currentStep} steps={STEPS} />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {STEPS[currentStep]}
          </h1>
          <p className="mt-2 text-gray-600">
            {currentStep === 0 && "Let's start with your basic information"}
            {currentStep === 1 && 'Tell us about your work experience'}
            {currentStep === 2 && 'Share your educational background'}
          </p>
        </div>

        {currentStep === 0 && (
          <BasicInfo
            onNext={handleBasicInfoSubmit}
          />
        )}

        {currentStep === 1 && (
          <WorkHistory
            onNext={handleWorkHistorySubmit}
            onBack={handleBack}
          />
        )}

        {currentStep === 2 && (
          <Education
            onNext={handleEducationSubmit}
            onBack={handleBack}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </div>
  );
} 