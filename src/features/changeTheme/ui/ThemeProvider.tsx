import React, { FC, ReactNode, useInsertionEffect, useState } from 'react';
import { ThemeContext } from 'src/features/changeTheme/model/ThemeContext';

type ThemeProviderType = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderType> = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const isLightTheme = theme === 'light';

  useInsertionEffect(() => {
    const html = document.body.parentElement;
    html.classList.add(theme);

    return () => html.classList.remove(theme);
  }, [theme]);

  const onChangeTheme = () => {
    const newTheme = isLightTheme ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return <ThemeContext.Provider value={{ isLightTheme, onChangeTheme }}>{children}</ThemeContext.Provider>;
};
