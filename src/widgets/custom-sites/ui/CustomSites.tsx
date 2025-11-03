'use client';

import styles from './CustomSites.module.scss';
import { Section } from '@/shared/ui/section/ui/Section';
import Image from 'next/image';

const points = [
  'Завершайте путь клиента адаптивным лендингом с расписанием, акциями и отзывами.',
  'Меняйте фото, цены и тренеров в редакторе без разработчиков и выпускайте акции за минуты.',
  'Запускайте A/B тесты и отслеживайте конверсию прямо в аналитике 1forme.',
];

const gallery = [
  {
    title: 'Лендинг студии',
    caption: 'Комбинируем расписание, витрину тарифов и отзывы в едином экране.',
    image: '/screenshots/dashboard-desktop.svg',
  },
  {
    title: 'Мобильное приложение',
    caption: 'Клиенты листают направления, оплачивают абонементы и видят персональные предложения.',
    image: '/screenshots/mobile-home.svg',
  },
];

export function CustomSites() {
  return (
    <Section
      title={<span>Персональные сайты <span className="highlight">для роста конверсии</span></span>}
      subtitle="Создаём адаптивные страницы для вашей студии и каждого направления. Ваша команда получает цифровой витрину, которая продаёт 24/7."
    >
      <div className={styles.wrapper}>
        <div className={styles.gallery}>
          {gallery.map((item) => (
            <article key={item.title} className={styles.previewCard}>
              <header className={styles.previewHeader}>
                <span className={styles.previewTitle}>{item.title}</span>
                <span className={styles.previewCaption}>{item.caption}</span>
              </header>
              <div className={styles.previewMedia}>
                <Image src={item.image} alt={item.title} width={720} height={480} />
              </div>
            </article>
          ))}
        </div>
        <div className={styles.points}>
          {points.map((point) => (
            <div key={point} className={styles.point}>
              <span className={styles.pointIcon} />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
