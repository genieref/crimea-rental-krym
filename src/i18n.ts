import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {getLocale} from 'next-intl/server';

export const locales = ['ru', 'en'] as const;
export const defaultLocale = 'ru';

export default getRequestConfig(async () => {
  const locale = await getLocale();
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    locale,
  };
});
