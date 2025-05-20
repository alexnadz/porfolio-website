import { cn } from '@/lib/utils/class-name.utils';
import { AboutContent } from './about-content';

export const About = () => (
    <section id="about" className={cn('py-20 md:py-32', 'bg-background dark:bg-muted/50')}>
        <div className="container mx-auto px-4">
            <AboutContent />
        </div>
    </section>
);
