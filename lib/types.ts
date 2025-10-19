// ==============================================
// TYPE DEFINITIONS
// ==============================================
// These define the structure of our data
// TypeScript will warn us if we try to use data incorrectly

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  profileImage: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter?: string;  // ? means optional
  portfolio?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  tools: string[];
  aiml: string[];
  other: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;  // Made optional since not all projects have it
  technologies: string[];
  image: string;
  video?: string;  // Optional video URL for hover effect
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
  highlights: string[];
  category: string;
}

