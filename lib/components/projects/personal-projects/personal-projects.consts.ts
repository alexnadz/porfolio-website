import { PersonalProject, PersonalProjectStatus } from './personal-projects.types';

export const PERSONAL_PROJECTS: PersonalProject[] = [
    {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        description:
            'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, animations, and a clean, accessible design.',
        image: '/images/projects/portfolio-website.png',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shadcn UI'],
        githubUrl: 'https://github.com/alexnadz/portfolio-website',
        demoUrl: 'https://porfolio-website-three-inky.vercel.app/',
        featured: true,
        status: PersonalProjectStatus.COMPLETED,
    },
    {
        id: 'search-job-app',
        title: 'Search Job App',
        description:
            'A full-stack job search app with user authentication, job posting, and search functionality.',
        image: '/images/projects/in-development.jpg',
        technologies: [
            'Next.js',
            'Node.js',
            'TypeScript',
            'Tailwind CSS',
            'Supabase',
            'Shadcn UI',
            'PostgreSQL',
        ],
        githubUrl: 'https://github.com/alexnadz/job-hunter',
        demoUrl: 'https://job-hunter-drab.vercel.app/',
        status: PersonalProjectStatus.IN_PROGRESS,
    },
];
