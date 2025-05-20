import { cn } from '@/lib/utils/class-name.utils';
import { HeroContent } from './hero-content';

export const Hero = () => (
    <section
        id="hero"
        className={cn(
            'relative min-h-screen flex items-center justify-center',
            'bg-gradient-to-br from-primary/20 via-primary/10 to-background dark:from-primary/30 dark:via-primary/15 dark:to-muted/50',
            'before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/30 before:via-primary/15 before:to-background/10 before:pointer-events-none before:animate-gradient',
        )}
    >
        <div className="container mx-auto px-4 py-16">
            <HeroContent />
        </div>
    </section>
);
