export type ProjectSphere = {
    name: string;
    description: string;
};

export type ProjectTechnology = {
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
};

export type ProjectQuality = {
    name: string;
    description: string;
};

export type ExperienceSummary = {
    yearsOfExperience: number;
    projectsCompleted: number;
    industriesServed: number;
    teamSize: string;
};
