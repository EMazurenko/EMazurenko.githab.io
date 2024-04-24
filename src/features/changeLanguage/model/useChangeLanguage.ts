import { useInsertionEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useChangeLanguage = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useInsertionEffect(() => {
    const html = document.body.parentElement;
    html.lang = lang;
  }, [lang]);

  const onChangeLanguage = (nextLanguage: string) => {
    if (lang !== nextLanguage) i18n.changeLanguage(nextLanguage);
  };

  return { lang, onChangeLanguage };
};
