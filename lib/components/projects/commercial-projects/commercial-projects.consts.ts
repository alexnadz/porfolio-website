import {
    ExperienceSummary,
    ProjectQuality,
    ProjectSphere,
    ProjectTechnology,
} from './commercial-projects.types';

export const PROJECT_SPHERES: ProjectSphere[] = [
    {
        name: 'Education',
        description:
            'Digital platforms for schools, kindergartens, and educational institutions, supporting class management, parent communication, and early childhood learning activities.',
    },
    {
        name: 'Industry & Manufacturing',
        description:
            'Automation and monitoring systems for industrial operations, including production tracking, equipment integration, and process optimization.',
    },
    {
        name: 'Service Listings',
        description:
            'Platforms for promoting and managing service-based offerings, enabling customers to browse and inquire.',
    },
    {
        name: 'Media & Publishing',
        description:
            'Development of content-driven platforms such as blogs and article-based websites, featuring custom CMS solutions, SEO optimization, and user engagement tools.',
    },
];

export const PROJECT_TECHNOLOGIES: ProjectTechnology[] = [
    { name: 'React', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Antd', category: 'frontend' },
    { name: 'Redux Toolkit', category: 'frontend' },
    { name: 'TanStack Query', category: 'frontend' },
    { name: '...', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'NestJS', category: 'backend' },
    { name: 'REST API', category: 'backend' },
    { name: '...', category: 'backend' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Redis', category: 'database' },
    { name: 'Docker', category: 'devops' },
    { name: 'AWS', category: 'devops' },
    { name: 'CI/CD', category: 'devops' },
    { name: 'Jest', category: 'other' },
    { name: 'Cypress', category: 'other' },
];

export const PROJECT_QUALITIES: ProjectQuality[] = [
    {
        name: 'High Performance',
        description:
            'Optimized for speed and efficiency, handling large volumes of data and user interactions with minimal latency.',
    },
    {
        name: 'Scalable Architecture',
        description:
            'Designed to grow seamlessly with increasing users, data, and functionality without compromising performance.',
    },
    {
        name: 'Security Focused',
        description:
            'Implemented with robust security measures to protect sensitive data and prevent unauthorized access.',
    },
    {
        name: 'Responsive Design',
        description:
            'Provides optimal viewing and interaction experience across a wide range of devices and screen sizes.',
    },
    {
        name: 'Intuitive UX',
        description:
            'Features user-centered design that prioritizes ease of use, clarity, and efficient task completion.',
    },
];

export const EXPERIENCE_SUMMARY: ExperienceSummary = {
    yearsOfExperience: 4,
    projectsCompleted: 15,
    industriesServed: 6,
    teamSize: '1-10 members',
};
