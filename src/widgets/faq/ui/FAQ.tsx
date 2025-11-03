'use client';

import { Collapse } from 'antd';
import { Section } from '@/shared/ui/section/ui/Section';
import styles from './FAQ.module.scss';

const items = [
  {
    key: '1',
    label: 'Сколько времени занимает запуск 1forme в студии?',
    children: 'От 3 до 14 дней. Мы берем на себя перенос базы клиентов, настройку расписания, обучение команды и подключение эквайринга.',
  },
  {
    key: '2',
    label: 'Можно ли интегрироваться с текущим сайтом и приложением?',
    children:
      'Да, есть готовые виджеты для сайтов и открытое API. Команда внедрения поможет подключить мобильное приложение для клиентов.',
  },
  {
    key: '3',
    label: 'Как формируется стоимость?',
    children:
      'Мы работаем по подписке: тариф зависит от количества студий и активных клиентов. Запросите демо, чтобы подобрать решение под ваши задачи.',
  },
  {
    key: '4',
    label: 'Что по безопасности данных?',
    children:
      'Данные хранятся на серверах в РФ, мы выполняем требования 152-ФЗ и регулярно проходим аудит безопасности.',
  },
];

export function FAQ() {
  return (
    <Section
      id="faq"
      title={<span>Частые вопросы <span className="highlight">руководителей студий</span></span>}
    >
      <div className={styles.faq}>
        <Collapse accordion items={items} defaultActiveKey={['1']} bordered={false} size="large" />
      </div>
    </Section>
  );
}
