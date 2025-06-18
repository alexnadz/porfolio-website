import Link from 'next/link';
import { Logo } from './logo';
import { ThemeSwitcher } from './theme-switcher';
import { Navigation } from './navigation';

export const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>
                <div className="flex items-center gap-10">
                    <Navigation />
                    <ThemeSwitcher />
                </div>
            </nav>
        </div>
    </header>
);
