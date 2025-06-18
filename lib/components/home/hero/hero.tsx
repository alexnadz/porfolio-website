import { cn } from '@/lib/utils/class-name.utils';
import { HeroContent } from './hero-content';

export const Hero = () => (
    <section
        id="hero"
        className={cn(
            'relative min-h-screen flex items-center justify-center overflow-hidden',
            'bg-gradient-to-br from-primary/20 via-primary/10 to-background',
            'dark:bg-gradient-to-br dark:from-[hsl(var(--glow-dark))] dark:via-[hsl(var(--glow-purple))/10] dark:to-background',
            'before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/30 before:via-primary/15 before:to-background/10 before:pointer-events-none before:animate-gradient',
        )}
    >
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[hsl(var(--glow-pink))] rounded-full filter blur-[120px] opacity-40 animate-orb"></div>
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-[hsl(var(--glow-blue))] rounded-full filter blur-[130px] opacity-40 animate-orb animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[hsl(var(--glow-purple))] rounded-full filter blur-[150px] opacity-30 animate-orb animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[hsl(var(--glow-glow))] rounded-full filter blur-[100px] opacity-35 animate-orb animation-delay-3000"></div>
        <div className="absolute inset-0 bg-[url('/hexagon-pattern.svg')] bg-repeat opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="container relative mx-auto px-4 py-16 z-10">
            <HeroContent />
        </div>
    </section>
);
