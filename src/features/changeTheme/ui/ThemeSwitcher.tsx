import React, { FC } from 'react';
import darkThemeIcon from './darkThemeIcon.svg';
import lightThemeIcon from './lightThemeIcon.svg';
import s from './ThemeSwitcher.module.scss';
import useChangeTheme from 'src/features/changeTheme/model/useChangeTheme';

export const ThemeSwitcher: FC = () => {
  const { isLightTheme, onChangeTheme } = useChangeTheme();
  const icon = isLightTheme ? darkThemeIcon : lightThemeIcon;

  return (
    <button className={s.root} onClick={onChangeTheme}>
      <img src={icon} alt={'Иконка темы'} />
    </button>
  );
};
