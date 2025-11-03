'use client';

import { MessageOutlined, PhoneOutlined, RobotOutlined } from '@ant-design/icons';
import styles from './Automation.module.scss';
import { Section } from '@/shared/ui/section/ui/Section';

const automationFlows = [
  {
    title: 'Напоминания и подтверждения',
    description: 'Автоматическая отправка сообщений и звонков, которые поднимают посещаемость до 95%.',
  },
  {
    title: 'Автосписания и эквайринг',
    description: 'Безопасно списывайте оплату по подписке, подключайте рассрочку и контролируйте задолженности.',
  },
  {
    title: 'Онбординг новых клиентов',
    description: 'Настройте цепочки, которые знакомят клиента со студией, подбирают абонемент и собирают обратную связь.',
  },
];

const channels = [
  { icon: <MessageOutlined />, label: 'Telegram', result: 'клиент подтвердил запись' },
  { icon: <PhoneOutlined />, label: 'Автообзвон', result: 'замена тренера согласована' },
  { icon: <RobotOutlined />, label: 'WhatsApp', result: 'отправлен welcome-комплект' },
];

export function Automation() {
  return (
    <Section
      id="automation"
      title={<span>Автоматизируйте <span className="highlight">каждый шаг записи</span></span>}
      subtitle="1forme берет на себя рутину: уведомления, подтверждения, списания, повторные продажи. Вы управляете сценариями, а система выполняет их без ошибок."
    >
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {automationFlows.map((item) => (
            <div key={item.title} className={styles.listItem}>
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.preview} gradient-surface`}>
          <div className={styles.previewHeader}>
            Каналы коммуникации
            <span className={styles.badge}>AI-ассистент</span>
          </div>
          <div className={styles.previewList}>
            {channels.map((channel) => (
              <div key={channel.label} className={styles.previewRow}>
                <span className={styles.previewChannel}>
                  {channel.icon}
                  {channel.label}
                </span>
                <span>{channel.result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
