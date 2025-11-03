import type { Metadata } from 'next';
import { Providers } from './providers';
import { inter, manrope } from './fonts';
import 'antd/dist/reset.css';
import '@/shared/styles/globals.scss';

export const metadata: Metadata = {
  title: '1forme — автоматизация для фитнес-студий',
  description:
    'Единая платформа для записи клиентов, аналитики студии, расчета зарплат тренеров и коммуникации с клиентами.',
  openGraph: {
    title: '1forme — автоматизация фитнес-студий',
    description:
      'Прозрачная запись, CRM, эквайринг и коммуникации в одном окне. Экономьте время и деньги команды.',
    url: 'https://1forme.ru',
    siteName: '1forme',
    locale: 'ru_RU',
    type: 'website',
  },
  metadataBase: new URL('https://1forme.ru'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
