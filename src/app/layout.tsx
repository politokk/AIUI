import './global.css';
import { cn } from '@/lib/cn';
import { RootProvider } from 'fumadocs-ui/provider';
import { Geist as createSans } from 'next/font/google';
import { Geist_Mono as createMono } from 'next/font/google';
import type { ReactNode } from 'react';
const sans = createSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: 'variable',
});

const mono = createMono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: 'variable',
});

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <html
    lang="en"
    className={cn(
      'touch-manipulation scroll-smooth font-sans antialiased',
      sans.variable,
      mono.variable
    )}
    suppressHydrationWarning
  >
    <body className="flex min-h-screen flex-col">
        <RootProvider>
          {children}
        </RootProvider>
    </body>
  </html>
);

export default Layout;