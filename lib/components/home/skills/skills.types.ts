import { IconType } from '@icons-pack/react-simple-icons';

export enum SkillCategory {
    FRONTEND = 'frontend',
    BACKEND = 'backend',
    OTHER = 'other',
}

export type Skill = {
    name: string;
    category: SkillCategory;
    Icon: IconType;
};
