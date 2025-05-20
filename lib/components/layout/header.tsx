import Link from 'next/link';
import { cn } from '@/lib/utils/class-name.utils';
import { Logo } from './logo';

const SECTIONS = [
    { id: 'hero', name: 'Hi' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
];

export const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>
                <div className="flex gap-6">
                    {SECTIONS.map((section) => (
                        <Link
                            key={section.id}
                            href={`#${section.id}`}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-primary',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                            )}
                        >
                            {section.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    </header>
);
