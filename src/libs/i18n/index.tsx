import { Locale, selectLanguage } from "@/store/modules/common";
import { i18n } from "@lingui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { I18nProvider as LinguijsProvider } from "@lingui/react";

export const locales = {
  en: "English",
  zh: "中文",
};
export const defaultLocale = "en";

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
//  */
export async function load(locale: string) {
  const { messages } = await import(`../../locales/${locale}/messages.po`);
  console.log(locale, messages);
  i18n.load(locale, messages);
  i18n.activate(locale);
  console.log(i18n, "i18n");
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const language = useSelector(selectLanguage);
  useEffect(() => {
    load(language);
  }, []);
  return <LinguijsProvider i18n={i18n as any}> {children} </LinguijsProvider>;
};
