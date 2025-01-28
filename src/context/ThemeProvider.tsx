import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { ReactNode, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import theme from '@utils/theme';
export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const dir = i18n.dir(i18n.resolvedLanguage);
  useEffect(() => {
    // document.body.style.direction = dir;
    document.documentElement.setAttribute('data-dir', dir);
  }, []);

  const cacheRtl = useMemo(
    () =>
      createCache({
        key: dir === 'rtl' ? 'muirtl' : 'muiltr',
        stylisPlugins: dir === 'rtl' ? [prefixer, rtlPlugin] : [],
      }),
    [i18n.language]
  );

  const dynamicTheme = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1200,
            xl: 1536,
          },
        },
        direction: dir,
        typography: {
          fontFamily:
            dir === 'rtl'
              ? ['IRANSansMobile', 'IRANSans_Light', 'Roboto'].join(', ')
              : ['Roboto', 'IRANSansMobile', 'IRANSans_Light'].join(', '),
        },
        ...theme,
      }),
    [i18n.language]
  );

  return (
    <MuiThemeProvider theme={dynamicTheme}>
      <CssBaseline />
      <CacheProvider value={cacheRtl}>{children}</CacheProvider>
    </MuiThemeProvider>
  );
}
