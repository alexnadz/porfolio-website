import { BadgeVariant } from '@/lib/ui/badge';
import { PersonalProjectStatus } from './personal-projects.types';

export const STATUS_VARIANT_MAP: Record<PersonalProjectStatus, BadgeVariant> = {
    [PersonalProjectStatus.COMPLETED]: 'default',
    [PersonalProjectStatus.IN_PROGRESS]: 'secondary',
    [PersonalProjectStatus.PLANNED]: 'outline',
};

export const STATUS_LABEL_MAP: Record<PersonalProjectStatus, string> = {
    [PersonalProjectStatus.COMPLETED]: 'Completed',
    [PersonalProjectStatus.IN_PROGRESS]: 'In Progress',
    [PersonalProjectStatus.PLANNED]: 'Planned',
};
