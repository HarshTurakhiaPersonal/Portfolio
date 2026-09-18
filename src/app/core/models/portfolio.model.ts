export interface MainInfo {
  name: string;
  shortDesc: string;
  titles: string[];
  heroImage: string;
  techStackImages: string[];
}

export interface AboutInfo {
  aboutImage: string;
  aboutImageCaption: string;
  title: string;
  about: string;
  resumeUrl: string;
  callUrl: string;
}

export interface Social {
  icon: string;
  label: string;
  link: string;
}

export interface Skill {
  name: string;
  image: string;
  category: string;
  link?: string;
}

export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  name: string;
  order: number;
  image: string;
  techstack: string;
  tags: string[];
  category: string;
  highlight?: string;
  desc1: string;
  desc2: string;
  links: ProjectLink;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location?: string;
  desc: string[];
}

export interface Education {
  institute: string;
  degree: string;
  duration: string;
  desc: string[];
}

export interface PortfolioData {
  main: MainInfo;
  about: AboutInfo;
  socials: Social[];
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
}
