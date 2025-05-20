import { SVGProps } from 'react';

export type IconType = React.ComponentType<SVGProps<SVGSVGElement>>;

export type SocialLink = {
    name: string;
    href: string;
    Icon: IconType;
    ariaLabel: string;
};
