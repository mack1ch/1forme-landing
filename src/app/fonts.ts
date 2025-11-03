import { Manrope, Inter } from 'next/font/google';

export const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-inter',
});
