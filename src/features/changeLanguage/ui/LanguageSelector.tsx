import React, { FC } from 'react';
import s from './LanguageSelector.module.scss';
import { supportedLngs } from 'src/app/localization/config';
import { useChangeLanguage } from 'src/features/changeLanguage/model/useChangeLanguage';

export const LanguageSelector: FC = () => {
  const { lang, onChangeLanguage } = useChangeLanguage();

  return (
    <select className={s.root} value={lang} onChange={(e) => onChangeLanguage(e.target.value)}>
      {supportedLngs.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};
