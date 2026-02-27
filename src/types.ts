export interface ResumeData {
  name: string;
  title: string;
  avatar: string;
  info: {
    gender?: string;
    age?: string;
    hometown?: string;
    phone: string;
    email: string;
    targetCity: string;
    experience: string;
  };
  social: {
    github: string;
  };
  advantages: string[];
  education: {
    school: string;
    major: string;
    degree: string;
    period: string;
  }[];
  workExperience: {
    company: string;
    title: string;
    period: string;
    description: string[];
  }[];
  projects: {
    name: string;
    role?: string;
    period?: string;
    description?: string;
    techStack?: string[];
    difficulties: string[];
    highlights?: string[];
    url?: string;
    github?: string;
    achievements?: string;
  }[];
  awards: string[];
}
