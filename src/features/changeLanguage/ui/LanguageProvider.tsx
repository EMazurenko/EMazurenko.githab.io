import React, { FC, ReactNode, useCallback, useEffect, useInsertionEffect, useState } from 'react';
import { LanguageContext } from 'src/features/changeLanguage/model/LanguageContext';
import { useTranslation } from 'react-i18next';

type LanguageProviderType = {
  children: ReactNode;
};

export const LanguageProvider: FC<LanguageProviderType> = ({ children }) => {
  const { i18n } = useTranslation();
  const [storedLang, setStoredLang] = useState<string>(() => localStorage.getItem('lang'));
  const currentLang = i18n.language;

  const lang = storedLang && storedLang === currentLang ? storedLang : currentLang;

  const handleChangeStoredLang = useCallback(
    (nextLanguage: string) => {
      localStorage.setItem('lang', nextLanguage);
      setStoredLang(nextLanguage);
    },
    [setStoredLang]
  );

  useInsertionEffect(() => {
    const html = document.body.parentElement;
    html.lang = lang;
  }, [lang]);

  useEffect(() => {
    handleChangeStoredLang(lang);
  }, [lang, handleChangeStoredLang]);

  const onChangeLanguage = (nextLanguage: string) => {
    if (lang !== nextLanguage) {
      i18n.changeLanguage(nextLanguage).then(() => {
        handleChangeStoredLang(nextLanguage);
      });
    }
  };

  return <LanguageContext.Provider value={{ lang, onChangeLanguage }}>{children}</LanguageContext.Provider>;
};
