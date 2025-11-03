'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';
import styles from './Hero.module.scss';
import { Tagline } from '@/shared/ui/tagline/ui/Tagline';
import { navigationLinks } from '@/shared/config/navigation';

const stats = [
  { value: 'до 12 часов', label: 'экономии менеджера еженедельно' },
  { value: '95%', label: 'клиентов возвращаются на тренировки' },
  { value: '−27%', label: 'затраты на сотрудников при самозанятых' },
];

const screens = [
  {
    id: 'dashboard',
    title: 'Оперативная панель',
    badge: 'Дашборд',
    description: 'Контролируйте расписание и выручку в одном экране — от загрузки залов до план-факта по выручке.',
    image: '/screenshots/dashboard-desktop.svg',
  },
  {
    id: 'mobile-home',
    title: 'Клиентский интерфейс',
    badge: 'Мобильное приложение',
    description: 'Клиенты записываются в приложении за 15 секунд и получают напоминания автоматически.',
    image: '/screenshots/mobile-home.svg',
  },
  {
    id: 'calendar',
    title: 'Расписание тренеров',
    badge: 'Календарь',
    description: 'Видите занятость залов, свободные окна и задолженности по оплатам в одном календаре.',
    image: '/screenshots/mobile-calendar.svg',
  },
  {
    id: 'analytics',
    title: 'Доход и аналитика',
    badge: 'BI-панель',
    description: 'Дашборды по выручке, удержанию и источникам трафика помогают принимать решения каждый день.',
    image: '/screenshots/mobile-analytics.svg',
  },
];

export function Hero() {
  const primaryLink = navigationLinks[1];
  const [activeScreenId, setActiveScreenId] = useState(screens[0].id);

  const activeScreen = useMemo(
    () => screens.find((screen) => screen.id === activeScreenId) ?? screens[0],
    [activeScreenId],
  );

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Tagline>Все процессы вашей студии в одном окне</Tagline>
        <h1 className={styles.title}>
          1forme — платформа автоматизации для <span className="highlight">фитнес-студий</span>
        </h1>
        <p className={styles.description}>
          Уберите хаос таблиц и мессенджеров. Управляйте расписанием, оплатами, зарплатами и коммуникациями из единой системы,
          которая работает за вас 24/7 — на десктопе и в мобильном приложении.
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
            <div key={stat.value} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.preview}>
        <div className={styles.previewSurface}>
          <div className={styles.previewHeader}>
            <Tagline>Интерфейс 1forme</Tagline>
            <div className={styles.previewTabs} role="tablist" aria-label="Сценарии 1forme">
              {screens.map((screen) => (
                <button
                  key={screen.id}
                  type="button"
                  role="tab"
                  id={screen.id}
                  aria-selected={activeScreen.id === screen.id}
                  aria-controls={`screen-${screen.id}`}
                  className={styles.previewTab}
                  onClick={() => setActiveScreenId(screen.id)}
                >
                  <span>{screen.badge}</span>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.previewImageWrapper}>
            {screens.map((screen) => (
              <div
                key={screen.id}
                id={`screen-${screen.id}`}
                role="tabpanel"
                aria-labelledby={screen.id}
                className={styles.previewImage}
                data-active={activeScreen.id === screen.id}
                aria-hidden={activeScreen.id !== screen.id}
              >
                <Image src={screen.image} alt={screen.title} width={580} height={420} priority={screen.id === 'dashboard'} />
              </div>
            ))}
            <div className={styles.previewGlow} aria-hidden />
          </div>
          <div className={styles.previewFooter}>
            <p className={styles.previewTitle}>{activeScreen.title}</p>
            <p className={styles.previewDescription}>{activeScreen.description}</p>
          </div>
        </div>
        <div className={styles.floatingCard}>
          <span className={styles.floatingLabel}>Автосценарий дня</span>
          <ul>
            <li>09:00 — расписание синхронизировано</li>
            <li>13:00 — роботы напомнили клиентам</li>
            <li>19:30 — зарплаты тренеров начислены</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
