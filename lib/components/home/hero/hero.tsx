import { cn } from '@/lib/utils/class-name.utils';

export const Hero = () => (
    <section
        id="hero"
        className={cn(
            'relative min-h-screen flex items-center justify-center',
            'bg-gradient-to-br from-background to-muted/50 dark:from-muted/50 dark:to-background',
            'before:absolute before:inset-0 before:bg-gradient-to-br before:from-muted/50 before:to-background/10',
        )}
    >
        <div className="container mx-auto px-4 py-16">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="block text-primary">Hi there!</span>
                    <span className="block">I'm a Software Developer</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    Crafting beautiful and functional web experiences
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all">
                        Get in Touch
                    </button>
                    <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-all">
                        View Projects
                    </button>
                </div>
            </div>
        </div>
    </section>
);
