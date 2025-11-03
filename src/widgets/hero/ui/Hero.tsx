'use client';

import { Button, Card, Statistic } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';
import styles from './Hero.module.scss';
import { Tagline } from '@/shared/ui/tagline/ui/Tagline';
import { navigationLinks } from '@/shared/config/navigation';

const stats = [
  { title: 'до 12 часов', description: 'экономии менеджера в неделю на ручной работе' },
  { title: '95%', description: 'клиентов возвращаются благодаря автоматическим напоминаниям' },
  { title: '−27%', description: 'затраты на сотрудников при подключении самозанятых' },
  { title: '2 недели', description: 'средний срок запуска студии на платформе 1forme' },
];

export function Hero() {
  const primaryLink = navigationLinks[1];

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <Tagline>Все процессы вашей студии в одном окне</Tagline>
        <h1 className={styles.title}>
          1forme — платформа автоматизации для <span className="highlight">фитнес-студий</span>
        </h1>
        <p className={styles.description}>
          Уберите хаос таблиц и мессенджеров. Управляйте расписанием, платежами, зарплатами и коммуникациями из
          единой системы, которая работает за вас 24/7.
        </p>
        <div className={styles.actions}>
          <Button type="primary" size="large" href="https://1forme.ru" target="_blank" icon={<ArrowRightOutlined />}>
            Запросить демо
          </Button>
          <Button size="large" type="default" href={primaryLink.href} icon={<PlayCircleOutlined />}>
            Посмотреть возможности
          </Button>
        </div>
        <div className={styles.stats}>
          {stats.map((stat) => (
            <Card key={stat.title} bordered={false} className="gradient-surface">
              <Statistic title={stat.description} value={stat.title} valueStyle={{ color: 'var(--color-primary)' }} />
            </Card>
          ))}
        </div>
      </div>
      <div className={styles.preview}>
        <div className={`${styles.previewCard} gradient-surface`}>
          <div>
            <Tagline>Как это работает</Tagline>
            <p className={styles.previewTitle}>Утро администратора с 1forme</p>
          </div>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.timelinePrimary}>09:00 — авто-расписание</span>
              <span className={styles.timelineSecondary}>синхронизировано с сайтом</span>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelinePrimary}>11:30 — новые клиенты</span>
              <span className={styles.timelineSecondary}>бот в Telegram подтвердил запись</span>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelinePrimary}>14:00 — выплаты тренерам</span>
              <span className={styles.timelineSecondary}>зарплаты рассчитаны автоматически</span>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelinePrimary}>18:00 — аналитика дня</span>
              <span className={styles.timelineSecondary}>выручка и загруженность групп</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
