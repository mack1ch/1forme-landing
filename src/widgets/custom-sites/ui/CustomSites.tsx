'use client';

import styles from './CustomSites.module.scss';
import { Section } from '@/shared/ui/section/ui/Section';
import Image from 'next/image';

const points = [
  'Завершайте путь клиента персональным лендингом студии с расписанием и акциями.',
  'Меняйте контент в редакторе без разработчиков — фото, цены, тренеров.',
  'Настраивайте A/B тесты и отслеживайте конверсию прямо в аналитике 1forme.',
];

export function CustomSites() {
  return (
    <Section
      title={<span>Персональные сайты <span className="highlight">для роста конверсии</span></span>}
      subtitle="Создаем адаптивные страницы для вашей студии и каждого направления. Ваша команда получает инструмент, который продаёт вместо маркетингового отдела."
    >
      <div className={styles.wrapper}>
        <div className={styles.gallery}>
          <div className={styles.previewCard}>
            <div className={styles.previewHeader}>
              <span className={styles.previewTitle}>Лендинг студии пилатеса</span>
              <span>Готов за 2 дня</span>
            </div>
            <p className={styles.previewDescription}>
              Привлекайте клиентов с рекламы, социальных сетей и партнерств на страницу, которая говорит на языке вашей
              аудитории.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
              alt="Превью лендинга студии"
              width={720}
              height={480}
              style={{ borderRadius: 16, objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
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
