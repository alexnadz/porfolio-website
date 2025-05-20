import { cn } from '@/lib/utils/class-name.utils';
import { SOCIAL_LINKS } from './contact.consts';
import { SocialLinksList } from './social-links-list';

export const Contact = () => (
    <section id="contact" className={cn('py-20 md:py-32', 'bg-background/90 dark:bg-muted/50')}>
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="flex justify-center">
                <div className="space-y-8">
                    <p className="text-lg text-muted-foreground mb-12 text-center">
                        Feel free to reach out to me via email or social media
                    </p>
                    <SocialLinksList links={SOCIAL_LINKS} />
                </div>
            </div>
        </div>
    </section>
);
