import { ReactNode } from 'react';
import styles from './Section.module.scss';
import clsx from 'clsx';

interface SectionProps {
  id?: string;
  className?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}

export function Section({ id, className, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className={clsx('section-container', styles.section, className)}>
      {(title || subtitle) && (
        <header className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
