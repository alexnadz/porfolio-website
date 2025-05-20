import { cn } from '@/lib/utils/class-name.utils';
import { SKILLS, CATEGORIES } from './skills.consts';
import { SkillsList } from './skills-list';

export const Skills = () => (
    <section id="skills" className={cn('py-20 md:py-32', 'bg-background/90 dark:bg-muted/50')}>
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
            {CATEGORIES.map((category) => (
                <SkillsList
                    key={category}
                    title={category}
                    skills={SKILLS.filter((skill) => skill.category === category)}
                />
            ))}
        </div>
    </section>
);
