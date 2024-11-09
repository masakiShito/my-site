export interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
}

export interface Skill {
    name: string;
    level: number;
}

export type Page = 'Home' | 'About' | 'Projects' | 'Skills';