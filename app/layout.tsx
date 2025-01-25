'use client'

import '../styles/global.css';
import { Navbar } from '../components/Navbar';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Pesos de la fuente que quieres usar
  variable: '--font-roboto', // Define una variable CSS para la fuente
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
