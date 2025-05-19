import Link from 'next/link';
import { cn } from '@/lib/utils/class-name.utils';
import { SiGithub } from '@icons-pack/react-simple-icons';

// TODO: Add social links
const SOCIAL_LINKS = [
    { href: '#1', Icon: SiGithub, ariaLabel: 'GitHub' },
    //  TODO: linkedin
];

export const Footer = () => (
    <footer className="bg-background/90 border-t border-border">
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                <div className="flex gap-4">
                    {SOCIAL_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'text-xl transition-colors hover:text-primary',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                            )}
                        >
                            <link.Icon aria-label={link.ariaLabel} className="w-6 h-6" />
                        </Link>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);
