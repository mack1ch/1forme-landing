'use client';

import styles from './Solutions.module.scss';
import { Section } from '@/shared/ui/section/ui/Section';
import { CheckCircleFilled, CalendarOutlined, BarChartOutlined } from '@ant-design/icons';

const cards = [
  {
    icon: <CalendarOutlined />,
    title: 'Умное расписание',
    description: 'Автоматически заполняет свободные слоты и синхронизируется с приложением и сайтом.',
    bullets: ['онлайн-запись без звонков', 'динамическое управление залами', 'поддержка групповых и персональных тренировок'],
  },
  {
    icon: <BarChartOutlined />,
    title: 'Аналитика и отчеты',
    description: 'Понимайте загрузку студии, отслеживайте LTV клиентов и эффективность каналов рекламы.',
    bullets: ['дашборды по выручке и посещаемости', 'контроль абонементов и долгов', 'экспорт отчетов в пару кликов'],
  },
  {
    icon: <CheckCircleFilled />,
    title: 'Автоматизация рутины',
    description: 'Роботы 1forme выполняют напоминания, списания, подтверждения и сегментацию клиентов.',
    bullets: ['умные напоминания по SMS/Telegram/WhatsApp', 'триггерные воронки', 'доступ сотрудникам по ролям'],
  },
];

export function Solutions() {
  return (
    <Section
      id="solutions"
      title={<span>Замените разрозненные сервисы <span className="highlight">одной платформой</span></span>}
      subtitle="Мы закрываем весь путь клиента от первой записи до постоянных рекомендаций, а руководителям даем точные цифры и контроль в реальном времени."
    >
      <div className={styles.grid}>
        {cards.map((card) => (
          <article key={card.title} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.description}>{card.description}</p>
            <ul className={styles.list}>
              {card.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
