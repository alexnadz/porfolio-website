import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

type PersonalProjectLinkProps = {
    href: string;
    Icon: LucideIcon;
    children: ReactNode;
};

export const PersonalProjectLink = ({ href, Icon, children }: PersonalProjectLinkProps) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
    >
        <Icon size={16} />
        <span>{children}</span>
    </Link>
);
