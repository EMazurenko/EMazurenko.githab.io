import { createContext, useContext } from 'react';

type LanguageContextType = {
  lang: string;
  onChangeLanguage: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>(null);

export const useLanguageContext = (): LanguageContextType => useContext(LanguageContext);
