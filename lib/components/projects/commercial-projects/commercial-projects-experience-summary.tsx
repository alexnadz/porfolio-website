import { EXPERIENCE_SUMMARY } from './commercial-projects.consts';
import { CommercialProjectsExperienceItem } from './commercial-projects-experience-item';

export const CommercialProjectsExperienceSummary = () => (
    <>
        <h3 className="text-xl font-semibold mt-12 mb-4">Experience Summary</h3>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
            <CommercialProjectsExperienceItem
                value={`${EXPERIENCE_SUMMARY.yearsOfExperience}+`}
                label="Years of Experience"
            />
            <CommercialProjectsExperienceItem
                value={`${EXPERIENCE_SUMMARY.projectsCompleted}+`}
                label="Projects Completed"
            />
            <CommercialProjectsExperienceItem
                value={EXPERIENCE_SUMMARY.industriesServed}
                label="Industries Served"
            />
            <CommercialProjectsExperienceItem
                value={EXPERIENCE_SUMMARY.teamSize}
                label="Team Size"
            />
        </div>
    </>
);
