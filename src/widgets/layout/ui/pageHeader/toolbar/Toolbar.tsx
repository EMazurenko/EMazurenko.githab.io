import React from 'react';
import s from './Toolbar.module.scss';
import { ThemeSwitcher } from 'src/features/changeTheme/ui/ThemeSwitcher';
import { LanguageSelector } from 'src/features/changeLanguage/ui/LanguageSelector';

export const Toolbar = () => {
  return (
    <div className={s.root}>
      <LanguageSelector />
      <ThemeSwitcher />
    </div>
  );
};
