export interface WorkExperience {
  company: string;
  position: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  description: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location: string;
  title: string;
  summary: string;
}

export interface OnboardingData {
  user: UserProfile;
  workExperience: WorkExperience[];
  education: Education[];
} 