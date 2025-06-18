import type { Metadata } from 'next';
import { CommercialProjects } from '@/lib/components/projects/commercial-projects/commercial-projects';
import { PersonalProjects } from '@/lib/components/projects/personal-projects/personal-projects';

export const metadata: Metadata = {
    title: 'Alex | Projects',
    description:
        'Explore my commercial and personal projects. From web applications to open-source contributions.',
    alternates: {
        canonical: '/projects',
    },
    openGraph: {
        title: 'Alex | Projects Portfolio',
        description:
            'Explore my commercial and personal projects. From web applications to open-source contributions.',
        url: '/projects',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Alex - Software Developer Portfolio',
            },
        ],
    },
};

const ProjectsPage = () => (
    <div className="container px-4 mx-auto scroll-smooth">
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                My Projects
            </h1>
            <p className="max-w-2xl mt-4 text-xl text-muted-foreground">
                A showcase of my work, including both commercial and personal projects
            </p>
        </div>

        <CommercialProjects />
        <PersonalProjects />
    </div>
);

export default ProjectsPage;
