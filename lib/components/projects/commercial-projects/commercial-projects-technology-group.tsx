import { Badge } from '@/lib/ui/badge';
import { ProjectTechnology } from './commercial-projects.types';

type CommercialProjectsTechnologyGroupProps = {
    title: string;
    technologies: ProjectTechnology[];
    category: string;
};

export const CommercialProjectsTechnologyGroup = ({
    title,
    technologies,
    category,
}: CommercialProjectsTechnologyGroupProps) => (
    <div className="mb-6">
        <h4 className="text-base font-medium mb-3">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {technologies
                .filter((tech) => tech.category === category)
                .map((tech) => (
                    <Badge key={tech.name} variant="secondary" className="text-xs py-1">
                        {tech.name}
                    </Badge>
                ))}
        </div>
    </div>
);
