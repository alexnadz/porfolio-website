import { CommercialProjectsExperienceSummary } from './commercial-projects-experience-summary';
import { CommercialProjectsTechnologies } from './commercial-projects-technologies';
import { CommercialProjectsQualities } from './commercial-projects-qualities';
import { CommercialProjectsSpheres } from './commercial-projects-spheres';

export const CommercialProjects = () => (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Commercial Projects</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                Due to confidentiality agreements, specific details of commercial projects cannot be
                shared. Below is a summary of my professional experience and the types of projects
                I've worked on.
            </p>

            <CommercialProjectsExperienceSummary />
            <CommercialProjectsSpheres />
            <CommercialProjectsTechnologies />
            <CommercialProjectsQualities />
        </div>
    </section>
);
