import i18next from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { ruLabels } from 'src/app/localization/ru/labels';
import { enLabels } from 'src/app/localization/en/labels';

export const supportedLngs = ['ru', 'en'];

const resources = {
  ru: {
    labels: ruLabels,
  },
  en: {
    labels: enLabels,
  },
};

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    supportedLngs,
    fallbackLng: 'ru',
    ns: ['labels'],
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
