import Image from 'next/image';
import { cn } from '@/lib/utils/class-name.utils';

export const About = () => (
    <section id="about" className={cn('py-20 md:py-32', 'bg-background/90 dark:bg-muted/50')}>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-lg mb-8 text-muted-foreground">
                        I'm a passionate software developer with a keen eye for creating elegant and
                        functional web applications. With experience in modern web technologies, I
                        love turning complex problems into simple, beautiful solutions.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            <span>Full Stack Developer</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            <span>2+ years of experience</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            <span>Remote work available</span>
                        </li>
                    </ul>
                </div>
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
