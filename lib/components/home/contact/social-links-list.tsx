import { SocialLink } from './contact.types';

type SocialLinksListProps = {
    links: SocialLink[];
};

export const SocialLinksList = ({ links }: SocialLinksListProps) => (
    <div className="flex flex-col gap-6 max-w-md">
        {links.map((link) => (
            <SocialLinkItem key={link.name} link={link} />
        ))}
    </div>
);

type SocialLinkItemProps = {
    link: SocialLink;
};

export const SocialLinkItem = ({ link }: SocialLinkItemProps) => (
    <a
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
            <span className="text-lg font-medium text-left w-full">{link.name}</span>
            <span className="text-muted-foreground mt-1 block text-left w-full">{link.href}</span>
        </div>
    </a>
);
