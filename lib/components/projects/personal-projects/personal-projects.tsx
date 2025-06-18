import { PERSONAL_PROJECTS } from './personal-projects.consts';
import { PersonalProjectCard } from './personal-project-card';

export const PersonalProjects = () => (
    <section id="personal-projects" className="py-16">
        <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Personal Projects</h2>
            <p className="max-w-2xl mt-4 text-lg text-muted-foreground">
                Projects I've built in my free time
            </p>

            <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {PERSONAL_PROJECTS.map((project) => (
                    <PersonalProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    </section>
);
