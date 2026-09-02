export type Language = 'id' | 'en';
export type Theme = 'dark' | 'light';

export interface Project {
  slug: string;
  name: {
    id: string;
    en: string;
  };
  type: {
    id: string;
    en: string;
  };
  category: 'web' | 'system' | 'management' | 'dashboard';
  year: string;
  description: {
    id: string;
    en: string;
  };
  impact: {
    id: string;
    en: string;
  };
  stack: string[];
  demo: string;
  featured?: boolean;
  coverImage: string;
  slides: string[];
  features?: {
    id: string[];
    en: string[];
  };
}

export interface Experience {
  id: string;
  company: string;
  role: {
    id: string;
    en: string;
  };
  period: {
    id: string;
    en: string;
  };
  type: {
    id: string;
    en: string;
  };
  detail: {
    id: string;
    en: string;
  };
  highlights: {
    id: string[];
    en: string[];
  };
  photos: string[];
  documents: {
    title: {
      id: string;
      en: string;
    };
    file: string;
    preview?: string;
  }[];
}

export interface Organization {
  id: string;
  organization: string;
  role: {
    id: string;
    en: string;
  };
  period: {
    id: string;
    en: string;
  };
  summary: {
    id: string;
    en: string;
  };
  narrative: {
    id: string;
    en: string;
  };
  photos: string[];
  folder: string;
}

export interface Achievement {
  id: string;
  title: {
    id: string;
    en: string;
  };
  institution: string;
  year: string;
  description: {
    id: string;
    en: string;
  };
  file: string;
  preview: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  type: 'IT Support' | 'Human Resources' | 'Data Administration' | 'Digital Marketing' | 'Leadership & Project' | 'Language' | 'Research & Innovation';
  modules: {
    id: string;
    en: string;
  };
  file: string;
  preview?: string;
}

export interface SkillCategory {
  name: {
    id: string;
    en: string;
  };
  skills: {
    name: string;
    icon?: string;
    iconSrc?: string;
    color?: string;
  }[];
}

export interface PortfolioData {
  name: string;
  role: {
    id: string;
    en: string;
  };
  email: string;
  linkedin: string;
  whatsapp: string;
  github: string;
  location: {
    id: string;
    en: string;
  };
  education: {
    id: string;
    en: string;
  };
  gpa: string;
  summary: {
    id: string;
    en: string;
  };
  about: {
    id: string;
    en: string;
  };
  interests: {
    id: string[];
    en: string[];
  };
  pillars: {
    title: {
      id: string;
      en: string;
    };
    desc: {
      id: string;
      en: string;
    };
    iconName: string;
  }[];
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  organizations: Organization[];
  achievements: Achievement[];
  certificates: Certificate[];
}
