import { cn } from '@/lib/utils/class-name.utils';
import { SOCIAL_LINKS } from './contact.consts';

export const Contact = () => (
    <section id="contact" className={cn('py-20 md:py-32', 'bg-background/90 dark:bg-muted/50')}>
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="flex justify-center">
                <div className="space-y-8">
                    <p className="text-lg text-muted-foreground mb-12 text-center">
                        Feel free to reach out to me via email or social media
                    </p>
                    <div className="flex flex-col gap-6 max-w-md">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.ariaLabel}
                                className="flex items-center gap-6 p-6 rounded-lg bg-card hover:bg-card/90 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <link.Icon className="w-8 h-8 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-lg font-medium text-left w-full">
                                        {link.name}
                                    </span>
                                    <span className="text-muted-foreground mt-1 block text-left w-full">
                                        {link.href}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);
