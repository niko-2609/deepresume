"use client";

import React, { useState } from 'react';

interface EducationProps {
  onNext: () => void;
  onBack: () => void;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export default function Education({ onNext, onBack }: EducationProps) {
  const [educations, setEducations] = useState<Education[]>([
    {
      id: '1',
      school: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }
  ]);

  const addEducation = () => {
    setEducations(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        school: '',
        degree: '',
        field: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }
    ]);
  };

  const removeEducation = (id: string) => {
    setEducations(prev => prev.filter(edu => edu.id !== id));
  };

  const updateEducation = (id: string, field: keyof Education, value: string | boolean) => {
    setEducations(prev =>
      prev.map(edu =>
        edu.id === id
          ? { ...edu, [field]: value }
          : edu
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save data to backend
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {educations.map((education) => (
        <div
          key={education.id}
          className="relative bg-gray-50 p-6 rounded-lg border border-gray-200"
        >
          {educations.length > 1 && (
            <button
              type="button"
              onClick={() => removeEducation(education.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* School Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                School Name
              </label>
              <input
                type="text"
                value={education.school}
                onChange={(e) => updateEducation(education.id, 'school', e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Degree */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Degree
              </label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Bachelor's, Master's, etc."
              />
            </div>

            {/* Field of Study */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Field of Study
              </label>
              <input
                type="text"
                value={education.field}
                onChange={(e) => updateEducation(education.id, 'field', e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                value={education.location}
                onChange={(e) => updateEducation(education.id, 'location', e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input
                  type="month"
                  value={education.startDate}
                  onChange={(e) => updateEducation(education.id, 'startDate', e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <input
                  type="month"
                  value={education.endDate}
                  onChange={(e) => updateEducation(education.id, 'endDate', e.target.value)}
                  disabled={education.current}
                  required={!education.current}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
                />
              </div>
            </div>

            {/* Current Education Checkbox */}
            <div className="col-span-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={education.current}
                  onChange={(e) => updateEducation(education.id, 'current', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">I'm currently studying here</span>
              </label>
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={education.description}
                onChange={(e) => updateEducation(education.id, 'description', e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Describe your academic achievements, activities, etc..."
              />
              <button
                type="button"
                className="mt-2 text-sm text-blue-600 hover:text-blue-700"
                onClick={() => {
                  // TODO: Implement AI description generation
                  console.log('Generate description with AI');
                }}
              >
                Generate with AI
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Add Education Button */}
      <button
        type="button"
        onClick={addEducation}
        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Another Education
      </button>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Continue
        </button>
      </div>
    </form>
  );
} 