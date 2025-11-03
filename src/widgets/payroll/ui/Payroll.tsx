'use client';

import { Section } from '@/shared/ui/section/ui/Section';
import styles from './Payroll.module.scss';
import { Progress } from 'antd';

const payrollItems = [
  { label: 'Фикс + процент', value: 'Учитываем и ставку, и процент за каждую тренировку' },
  { label: 'Самозанятые', value: 'Документооборот и налоги закрываем внутри платформы' },
  { label: 'Финансовый контроль', value: 'Выплаты в один клик, прозрачный журнал операций' },
];

export function Payroll() {
  return (
    <Section
      id="payroll"
      title={<span>Зарплаты тренеров <span className="highlight">под контролем</span></span>}
      subtitle="Автоматизируйте расчёт ставок, бонусов и мотивации. Экономьте до 27% на налогах благодаря подключению самозанятых через 1forme."
    >
      <div className={styles.wrapper}>
        <div className={`${styles.summaryCard} gradient-surface`}>
          <h3 className={styles.summaryTitle}>Единый центр финансов</h3>
          <p className={styles.summaryDescription}>
            Собираем платежи клиентов через эквайринг, учитываем абонементы и автоматически начисляем зарплаты тренерам.
          </p>
          <Progress
            percent={86}
            status="active"
            strokeColor={{ from: '#7355FF', to: '#00C6AE' }}
            showInfo={false}
          />
          <ul className={styles.list}>
            <li>видна маржинальность каждого направления</li>
            <li>настройка KPI по филиалам и тренерам</li>
            <li>автоплатежи и интеграция с бухгалтерией</li>
          </ul>
        </div>
        <div className={styles.details}>
          {payrollItems.map((item) => (
            <div key={item.label} className={styles.detailRow}>
              <span className={styles.detailLabel}>{item.label}</span>
              <span className={styles.detailValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
