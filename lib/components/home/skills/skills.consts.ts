import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiGit,
    SiDocker,
    SiAmazon,
} from '@icons-pack/react-simple-icons';
import { Skill, SkillCategory } from './skills.types';

export const CATEGORIES = [SkillCategory.FRONTEND, SkillCategory.BACKEND, SkillCategory.OTHER];

export const SKILLS: Skill[] = [
    // Frontend
    {
        name: 'JavaScript',
        category: SkillCategory.FRONTEND,
        Icon: SiJavascript,
    },
    {
        name: 'TypeScript',
        category: SkillCategory.FRONTEND,
        Icon: SiTypescript,
    },
    {
        name: 'React',
        category: SkillCategory.FRONTEND,
        Icon: SiReact,
    },
    {
        name: 'Next.js',
        category: SkillCategory.FRONTEND,
        Icon: SiNextdotjs,
    },
    {
        name: 'Tailwind CSS',
        category: SkillCategory.FRONTEND,
        Icon: SiTailwindcss,
    },

    // Backend
    {
        name: 'Node.js',
        category: SkillCategory.BACKEND,
        Icon: SiNodedotjs,
    },
    {
        name: 'Express',
        category: SkillCategory.BACKEND,
        Icon: SiExpress,
    },
    {
        name: 'MongoDB',
        category: SkillCategory.BACKEND,
        Icon: SiMongodb,
    },
    {
        name: 'PostgreSQL',
        category: SkillCategory.BACKEND,
        Icon: SiPostgresql,
    },

    // Other
    {
        name: 'Git',
        category: SkillCategory.OTHER,
        Icon: SiGit,
    },
    {
        name: 'Docker',
        category: SkillCategory.OTHER,
        Icon: SiDocker,
    },
    {
        name: 'AWS',
        category: SkillCategory.OTHER,
        Icon: SiAmazon,
    },
];
