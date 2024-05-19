export enum JobType {
  FULL_TIME = 'Full time',
  PART_TIME = 'Part time',
  CONTRACT = 'Contract',
}
export enum JobCategory {
  IT = 'Information & Communication Technology',
  FINANCE = 'Finance',
  ACCOUNTING = 'Accounting',
  ENGINEERING = 'Engineering',
  BANKING = 'Banking',
}

export interface JobLocation {
  state: JobState;
  // unable to get all the areas, will put string for now
  area?: string;
}

export enum JobState {
  KUALA_LUMPUR = 'Kuala Lumpur',
  PERAK = 'Perak',
  PERLIS = 'Perlis',
  MELAKA = 'Melaka',
  PENANG = 'Penang',
  SELANGOR = 'Selangor',
  PAHANG = 'Pahang',
  JOHOR = 'Johor',
  TERRENGGANU = 'Terengganu',
  KELANTAN = 'Kelantan',
  KEDAH = 'Kedah',
  SARAWAK = 'Sarawak',
  SABAH = 'Sabah',
  NEGERI_SEMBILAN = 'Negeri Sembilan',
}

export interface CompanyInfo {
  registrationNo: string;
  companyName: string;
}

export interface Description {
  mainDescription: string;
  bulletDescription?: string;
  jobDescription: string;
}

export interface JobList {
  id: number;
  jobTitle: string;
  maximumSalary?: number;
  minimumSalary?: number;
  category: JobCategory;
  jobType: JobType;
  description: Description;
  companyInfo: CompanyInfo;
  jobLocation: JobLocation;
  createdAt: string;
  keywords: string[];
}
