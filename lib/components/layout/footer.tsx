import { FooterLogo } from './footer-logo';

export const Footer = () => (
    <footer className="bg-background/90 border-t border-border">
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                <div className="flex gap-4">
                    <FooterLogo />
                </div>
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} AlexNadz. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);
