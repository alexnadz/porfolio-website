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
    SiFigma,
    SiRedux,
    SiReactquery,
    SiJest,
    SiCypress,
    SiReacthookform,
    SiNestjs,
    SiPrisma,
    SiMongoose,
    SiTypeorm,
    SiFirebase,
    SiSupabase,
    SiGithub,
    SiGitlab,
} from '@icons-pack/react-simple-icons';
import { Waves } from 'lucide-react';
import { Skill, SkillCategory } from './skills.types';

export const CATEGORIES = [
    SkillCategory.FRONTEND,
    SkillCategory.BACKEND,
    SkillCategory.SERVICES,
    SkillCategory.OTHER,
];

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

    {
        name: 'Redux Toolkit',
        category: SkillCategory.FRONTEND,
        Icon: SiRedux,
    },
    {
        name: 'TanStack Query',
        category: SkillCategory.FRONTEND,
        Icon: SiReactquery,
    },
    {
        name: 'Jest',
        category: SkillCategory.FRONTEND,
        Icon: SiJest,
    },
    {
        name: 'Cypress',
        category: SkillCategory.FRONTEND,
        Icon: SiCypress,
    },
    {
        name: 'React Hook Form',
        category: SkillCategory.FRONTEND,
        Icon: SiReacthookform,
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
        name: 'NestJS',
        category: SkillCategory.BACKEND,
        Icon: SiNestjs,
    },
    {
        name: 'PrismaORM',
        category: SkillCategory.BACKEND,
        Icon: SiPrisma,
    },
    {
        name: 'TypeORM',
        category: SkillCategory.BACKEND,
        Icon: SiTypeorm,
    },
    {
        name: 'Mongoose',
        category: SkillCategory.BACKEND,
        Icon: SiMongoose,
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

    // Services
    {
        name: 'Firebase',
        category: SkillCategory.SERVICES,
        Icon: SiFirebase,
    },
    {
        name: 'Supabase',
        category: SkillCategory.SERVICES,
        Icon: SiSupabase,
    },
    {
        name: 'AWS',
        category: SkillCategory.SERVICES,
        Icon: SiAmazon,
    },

    // Other
    {
        name: 'Git',
        category: SkillCategory.OTHER,
        Icon: SiGit,
    },
    {
        name: 'Github',
        category: SkillCategory.OTHER,
        Icon: SiGithub,
    },
    {
        name: 'GitLab',
        category: SkillCategory.OTHER,
        Icon: SiGitlab,
    },
    {
        name: 'Docker',
        category: SkillCategory.OTHER,
        Icon: SiDocker,
    },
    {
        name: 'Figma',
        category: SkillCategory.OTHER,
        Icon: SiFigma,
    },
    {
        name: 'Windsurf',
        category: SkillCategory.OTHER,
        Icon: Waves,
    },
];
