import React from 'react';
import s from './Toolbar.module.scss';
import { ThemeSwitcher } from 'src/features/changeTheme/ui/ThemeSwitcher';
import { LanguageSelector } from 'src/features/changeLanguage/ui/LanguageSelector';
import { ProfileButton } from 'src/shared/ui/button/profileButton';

export const Toolbar = () => {
  return (
    <div className={s.root}>
      <LanguageSelector />
      <ThemeSwitcher />
      <ProfileButton />
    </div>
  );
};
