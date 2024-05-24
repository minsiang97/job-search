import { JobState } from 'screens/JobSearch/types';

export interface WorkingExperience {
  title: string;
  companyName: string;
  isCurrentEmployment: boolean;
  startDate: Date;
  endDate?: Date | null;
  summary?: string;
}

export interface User {
  name: string;
  location: JobState;
  summary: string;
  workingExperience: WorkingExperience[];
  skills?: string[];
  languages?: string[];
  resume?: string;
}
