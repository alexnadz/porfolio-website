import { Metadata } from 'next';
import { ProjectTabs } from '@/lib/components/projects/project-tabs';

export const metadata: Metadata = {
    title: 'Projects | Alex Nadz',
    description: 'Explore my commercial and personal projects',
    alternates: {
        canonical: '/projects',
    },
    openGraph: {
        title: 'Projects | Alex Nadz',
        description:
            'Explore my commercial and personal projects. From web applications to open-source contributions.',
        url: '/projects',
        siteName: 'Alex Nadz',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects | Alex Nadz',
        description: 'Explore my commercial and personal projects',
    },
};

const ProjectsPage = () => (
    <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Projects</h1>
                <p className="text-xl text-muted-foreground">
                    A collection of my work and side projects
                </p>
            </div>

            <ProjectTabs />
        </div>
    </main>
);

export default ProjectsPage;
