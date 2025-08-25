import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Hello World',
  description: 'Simple Hello World with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
