import { cn } from '@/lib/utils/class-name.utils';
import { SKILLS, CATEGORIES } from './skills.consts';

export const Skills = () => (
    <section id="skills" className={cn('py-20 md:py-32', 'bg-background/90 dark:bg-muted/50')}>
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
            <div className="space-y-8">
                {CATEGORIES.map((category) => (
                    <div key={category}>
                        <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {SKILLS.filter((skill) => skill.category === category).map((skill) => (
                                <div
                                    key={skill.name}
                                    className="p-6 rounded-lg bg-card hover:bg-card/90 transition-colors"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <skill.Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{skill.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
