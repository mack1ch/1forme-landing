'use client';

import styles from './Stats.module.scss';
import { Section } from '@/shared/ui/section/ui/Section';

const data = [
  { value: '850+', description: 'студий и фитнес-клубов в экосистеме 1forme' },
  { value: '2.5 млн', description: 'записей обработано автоматическими сценариями' },
  { value: '78%', description: 'клиентов совмещают онлайн и офлайн продажи' },
  { value: '24/7', description: 'поддержка и контроль ключевых показателей' },
];

export function Stats() {
  return (
    <Section>
      <div className={styles.stats}>
        {data.map((item) => (
          <div key={item.description} className={styles.card}>
            <div className={styles.value}>{item.value}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
