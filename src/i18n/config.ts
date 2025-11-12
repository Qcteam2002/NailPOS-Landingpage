// i18n/config.ts
export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['vi', 'en'],
  fallbackLocale: 'en',
  detectBrowserLanguage: true,
} as const;

export type Locale = typeof i18nConfig.locales[number];

