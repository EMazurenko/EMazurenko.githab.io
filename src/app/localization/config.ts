import i18next from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { ruLabels } from 'src/app/localization/ru/labels';
import { enLabels } from 'src/app/localization/en/labels';
import { ruTooltips } from 'src/app/localization/ru/tooltips';
import { enTooltips } from 'src/app/localization/en/tooltips';
import { ruForms } from 'src/app/localization/ru/forms';
import { enForms } from 'src/app/localization/en/forms';
import { ruErrors } from 'src/app/localization/ru/errors';
import { enErrors } from 'src/app/localization/en/errors';
import { ruModals } from 'src/app/localization/ru/modals';
import { enModals } from 'src/app/localization/en/modals';

export const supportedLngs = ['ru', 'en'];

const resources = {
  ru: {
    labels: ruLabels,
    tooltips: ruTooltips,
    forms: ruForms,
    errors: ruErrors,
    modals: ruModals,
  },
  en: {
    labels: enLabels,
    tooltips: enTooltips,
    forms: enForms,
    errors: enErrors,
    modals: enModals,
  },
};

const localization = i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    supportedLngs,
    fallbackLng: 'ru',
    ns: ['labels', 'tooltips', 'forms', 'errors', 'modals'],
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default localization;
