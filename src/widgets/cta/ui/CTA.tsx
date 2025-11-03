'use client';

import { Button } from 'antd';
import styles from './CTA.module.scss';
import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';

export function CTA() {
  return (
    <div className="section-container">
      <div className={styles.cta}>
        <p className={styles.title}>Готовы сделать студию управляемой?</p>
        <p className={styles.description}>
          Оставьте заявку, и в течение 24 часов мы покажем, как 1forme помогает студиям увеличивать прибыль, снижать
          операционные расходы и радовать клиентов.
        </p>
        <div className={styles.actions}>
          <Button type="primary" size="large" icon={<ArrowRightOutlined />} href="https://1forme.ru" target="_blank">
            Запросить внедрение
          </Button>
          <Button size="large" icon={<CalendarOutlined />} href="mailto:founders@1forme.ru">
            Написать команде
          </Button>
        </div>
      </div>
    </div>
  );
}
