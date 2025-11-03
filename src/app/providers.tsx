'use client';

import { ConfigProvider, theme as antdTheme } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { PropsWithChildren, useMemo } from 'react';

export function Providers({ children }: PropsWithChildren) {
  const theme = useMemo(
    () => ({
      token: {
        colorPrimary: '#E6F36C',
        colorInfo: '#E6F36C',
        fontFamily: 'var(--font-manrope)',
        colorBgContainer: '#ffffff',
        colorText: '#111013',
        borderRadius: 16,
      },
      algorithm: antdTheme.defaultAlgorithm,
    }),
    []
  );

  return (
    <ConfigProvider locale={ruRU} theme={theme} componentSize="large">
      {children}
    </ConfigProvider>
  );
}
