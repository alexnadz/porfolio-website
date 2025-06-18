export enum PersonalProjectStatus {
    COMPLETED = 'completed',
    IN_PROGRESS = 'in-progress',
    PLANNED = 'planned',
}

export type PersonalProject = {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    featured?: boolean;
    status: PersonalProjectStatus;
};
