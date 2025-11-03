import { ReactNode } from 'react';
import styles from './Tagline.module.scss';

interface TaglineProps {
  icon?: ReactNode;
  children: ReactNode;
}

export function Tagline({ icon, children }: TaglineProps) {
  return (
    <span className={styles.tagline}>
      <span className={styles.dot} aria-hidden />
      {icon}
      {children}
    </span>
  );
}
