'use client';

import { cn } from '@/lib/utils/class-name.utils';
import { SKILLS, CATEGORIES } from './skills.consts';
import { SkillsList } from './skills-list';
import { motion } from 'framer-motion';

export const Skills = () => (
    <section id="skills" className={cn('py-20 md:py-32', 'bg-muted/50 dark:bg-muted/90')}>
        <div className="container mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
            >
                My Skills
            </motion.h2>
            {CATEGORIES.map((category, index) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: 'easeOut',
                    }}
                >
                    <SkillsList
                        title={category}
                        skills={SKILLS.filter((skill) => skill.category === category)}
                    />
                </motion.div>
            ))}
        </div>
    </section>
);
