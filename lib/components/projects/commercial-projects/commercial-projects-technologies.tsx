import { PROJECT_TECHNOLOGIES } from './commercial-projects.consts';
import { CommercialProjectsTechnologyGroup } from './commercial-projects-technology-group';

export const CommercialProjectsTechnologies = () => (
    <>
        <h3 className="text-xl font-semibold mt-12 mb-4">Technologies Used</h3>
        <div className="w-full">
            <CommercialProjectsTechnologyGroup
                title="Frontend"
                technologies={PROJECT_TECHNOLOGIES}
                category="frontend"
            />

            <CommercialProjectsTechnologyGroup
                title="Backend"
                technologies={PROJECT_TECHNOLOGIES}
                category="backend"
            />

            <CommercialProjectsTechnologyGroup
                title="DevOps"
                technologies={PROJECT_TECHNOLOGIES}
                category="devops"
            />

            <CommercialProjectsTechnologyGroup
                title="Other"
                technologies={PROJECT_TECHNOLOGIES}
                category="other"
            />
        </div>
    </>
);
