import { Navbar, Watch, Shows, Listen, Header } from '@/components';
import '/styles/global.css';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Dork',
  description: '...',
}

export default function RootLayout({
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Navbar />
        <main>
          <Header />
          <Listen />
          <Watch />
          <Shows />
        </main>
      </body>
    </html>
  );
}