'use client';

import { Avatar, Tag } from 'antd';
import { Section } from '@/shared/ui/section/ui/Section';
import styles from './Communication.module.scss';
import { InstagramOutlined, MessageOutlined, SendOutlined } from '@ant-design/icons';

const messages = [
  {
    sender: 'Telegram бот',
    time: '09:12',
    text: 'Ирина, напоминаем о тренировке по пилатесу сегодня в 19:00. До встречи в студии на Петровке!',
    tag: 'Подтверждено',
  },
  {
    sender: 'WhatsApp рассылка',
    time: '12:45',
    text: 'Дарим -15% на пакет из 8 тренировок до конца недели. Промокод: 1FORME15',
    tag: 'Продажи',
  },
  {
    sender: 'Менеджер Анна',
    time: '18:22',
    text: 'Алексей, как вам новая функциональная тренировка? Готовы закрепиться на абонементе?',
    tag: 'Обратная связь',
  },
];

const channels = [
  {
    icon: <MessageOutlined />,
    title: 'Telegram / WhatsApp',
    description: 'Интерактивные боты отвечают быстрее людей и не теряют клиентов.',
  },
  {
    icon: <SendOutlined />,
    title: 'E-mail и SMS',
    description: 'Подпитывайте возвращаемость цепочками рассылок и персональными предложениями.',
  },
  {
    icon: <InstagramOutlined />,
    title: 'Социальные сети',
    description: 'Интеграция с Instagram помогает обрабатывать заявки прямо в CRM.',
  },
  {
    icon: <Avatar src="/icons/operator.svg" />,
    title: 'Колл-центр 1forme',
    description: 'Обученные операторы берут на себя обзвоны и продажи, пока вы проводите тренировки.',
  },
];

export function Communication() {
  return (
    <Section
      id="communication"
      title={<span>Оставайтесь на связи с клиентами <span className="highlight">в любимых каналах</span></span>}
      subtitle="Строим коммуникацию, которая работает и без вашего участия. Все взаимодействия фиксируются в карточке клиента — ничего не потеряется."
    >
      <div className={styles.wrapper}>
        <div className={`${styles.messageBoard} gradient-surface`}>
          {messages.map((message) => (
            <div key={message.time} className={styles.message}>
              <div className={styles.messageHeader}>
                <span className={styles.messageSender}>
                  <Avatar size={36}>{message.sender.slice(0, 1)}</Avatar>
                  {message.sender}
                </span>
                <span className={styles.messageTime}>{message.time}</span>
              </div>
              <p>{message.text}</p>
              <Tag color="purple">{message.tag}</Tag>
            </div>
          ))}
        </div>
        <div className={styles.channels}>
          {channels.map((channel) => (
            <div key={channel.title} className={styles.channelCard}>
              <div>{channel.icon}</div>
              <p className={styles.channelTitle}>{channel.title}</p>
              <p className={styles.channelDescription}>{channel.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
