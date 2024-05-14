import i18next from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { ruLabels } from 'src/app/localization/ru/labels';
import { enLabels } from 'src/app/localization/en/labels';
import { ruTooltips } from 'src/app/localization/ru/tooltips';
import { enTooltips } from 'src/app/localization/en/tooltips';

export const supportedLngs = ['ru', 'en'];

const resources = {
  ru: {
    labels: ruLabels,
    tooltips: ruTooltips,
  },
  en: {
    labels: enLabels,
    tooltips: enTooltips,
  },
};

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    supportedLngs,
    fallbackLng: 'ru',
    ns: ['labels', 'tooltips'],
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
