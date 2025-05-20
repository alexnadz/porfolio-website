import { cn } from '@/lib/utils/class-name.utils';
import { Skill } from './skills.types';
import { motion } from 'framer-motion';

type SkillsListProps = {
    skills: Skill[];
    title: string;
};

export const SkillsList = ({ skills, title }: SkillsListProps) => (
    <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-5">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
            ))}
        </div>
    </div>
);

type SkillItemProps = {
    skill: Skill;
};

export const SkillItem = ({ skill }: SkillItemProps) => (
    <motion.div
        className="p-6 rounded-lg bg-card hover:bg-card/90 transition-colors"
        whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
    >
        <div className="flex items-center gap-4 mb-4">
            <motion.div
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                }}
            >
                <skill.Icon className="w-6 h-6 text-primary" />
            </motion.div>
            <div>
                <h4 className="font-medium">{skill.name}</h4>
            </div>
        </div>
    </motion.div>
);
