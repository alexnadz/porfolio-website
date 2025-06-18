import Link from 'next/link';
import { cn } from '@/lib/utils/class-name.utils';

const NAVIGATION = [
    { path: '/#hero', name: 'Hi' },
    { path: '/projects', name: 'Projects' },
    { path: '/#about', name: 'About' },
    { path: '/#skills', name: 'Skills' },
    { path: '/#contact', name: 'Contact' },
];

export const Navigation = () => {
    return (
        <div className="flex gap-6">
            {NAVIGATION.map((item) => (
                <Link
                    key={item.name}
                    href={item.path}
                    className={cn(
                        'text-sm font-medium transition-colors hover:text-primary',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    )}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
};
