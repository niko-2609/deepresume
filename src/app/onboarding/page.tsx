"use client";

import FormOnboarding from "@/features/onboarding/components/Onboarding";


export default function Onboarding() {

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

          <FormOnboarding />
        </div>
      </div>
    </div>
  );
}