import en from "@/lib/i18n/dictionaries/en.json";
import ar from "@/lib/i18n/dictionaries/ar.json";
import { Locale } from "@/lib/i18n/config";

const messagesByLocale = {
  en,
  ar,
} as const;

export type Messages = typeof en;

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale] ?? messagesByLocale.en;
}
