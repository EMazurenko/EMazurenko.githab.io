import React, { FC } from 'react';
import darkThemeIcon from './darkThemeIcon.svg';
import lightThemeIcon from './lightThemeIcon.svg';
import { IconableButton } from 'src/shared/ui/button/iconableButton';
import { useThemeContext } from 'src/features/changeTheme/model/ThemeContext';

export const ThemeSwitcher: FC = () => {
  const { isLightTheme, onChangeTheme } = useThemeContext();
  const icon = isLightTheme ? darkThemeIcon : lightThemeIcon;

  return (
    <IconableButton onClick={onChangeTheme}>
      <img src={icon} alt={'Иконка темы'} />
    </IconableButton>
  );
};
