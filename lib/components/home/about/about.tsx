import Image from 'next/image';
import { cn } from '@/lib/utils/class-name.utils';

import { AboutDescription } from './about-description';

export const About = () => (
    <section id="about" className={cn('py-20 md:py-32', 'bg-background/90 dark:bg-muted/50')}>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <AboutDescription />
                <div className="relative aspect-square w-full max-w-[400px] mx-auto">
                    <Image
                        src="/placeholder-image.jpg"
                        alt="Profile picture"
                        fill
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>
    </section>
);
