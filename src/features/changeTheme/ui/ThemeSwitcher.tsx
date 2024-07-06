import React, { FC } from 'react';
import darkThemeIcon from './darkThemeIcon.svg';
import lightThemeIcon from './lightThemeIcon.svg';
import useChangeTheme from 'src/features/changeTheme/model/useChangeTheme';
import { IconableButton } from 'src/shared/ui/button/iconableButton';

export const ThemeSwitcher: FC = () => {
  const { isLightTheme, onChangeTheme } = useChangeTheme();
  const icon = isLightTheme ? darkThemeIcon : lightThemeIcon;

  return (
    <IconableButton onClick={onChangeTheme}>
      <img src={icon} alt={'Иконка темы'} />
    </IconableButton>
  );
};
