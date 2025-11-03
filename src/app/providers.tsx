'use client';

import { ConfigProvider, theme as antdTheme } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { PropsWithChildren, useMemo } from 'react';

export function Providers({ children }: PropsWithChildren) {
  const theme = useMemo(
    () => ({
      token: {
        colorPrimary: '#7355FF',
        fontFamily: 'var(--font-manrope)',
        colorBgContainer: '#ffffff',
        colorText: '#1c1c1c',
        borderRadius: 12,
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
