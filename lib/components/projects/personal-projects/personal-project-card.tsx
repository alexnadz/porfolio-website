import { PersonalProject, PersonalProjectStatus } from './personal-projects.types';
import { STATUS_VARIANT_MAP, STATUS_LABEL_MAP } from './personal-project-card.consts';
import { Badge } from '@/lib/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { PersonalProjectLink } from './personal-project-link';

type PersonalProjectCardProps = {
    project: PersonalProject;
};

export const PersonalProjectCard = ({ project }: PersonalProjectCardProps) => (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-md hover:border-primary/50 dark:hover:shadow-primary/5">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
            <div className="absolute top-2 right-2 z-10">
                <Badge
                    variant={STATUS_VARIANT_MAP[project.status]}
                    className={`text-xs ${project.status === PersonalProjectStatus.PLANNED ? 'border-primary/50 text-primary' : ''}`}
                >
                    {STATUS_LABEL_MAP[project.status]}
                </Badge>
            </div>

            {/* Placeholder for when images are available */}
            <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
                {project.title} Screenshot
            </div>
            {/* Uncomment when images are available */}
            {/* <Image 
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover"
            /> */}
        </div>

        <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                    </Badge>
                ))}
            </div>

            <div className="mt-auto flex gap-4">
                {project.githubUrl && (
                    <PersonalProjectLink href={project.githubUrl} Icon={Github}>
                        Source Code
                    </PersonalProjectLink>
                )}

                {project.demoUrl && (
                    <PersonalProjectLink href={project.demoUrl} Icon={ExternalLink}>
                        Live Demo
                    </PersonalProjectLink>
                )}
            </div>
        </div>
    </div>
);
