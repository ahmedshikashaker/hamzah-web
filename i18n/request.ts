import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, Locale } from "../lib/i18n/config";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale: locale as string,
    messages: (await import(`../lib/i18n/dictionaries/${locale}.json`)).default,
  };
});
