import { OnboardingData } from '../models/onboarding';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export async function submitOnboardingData(data: OnboardingData): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/v1/onboarding`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit onboarding data');
  }
} 