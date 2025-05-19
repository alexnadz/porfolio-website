import { PropsWithChildren } from 'react';
import './globals.css';

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);

export default RootLayout;
