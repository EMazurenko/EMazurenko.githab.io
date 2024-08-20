import { createContext, useContext } from 'react';

type ThemeContextType = {
  isLightTheme: boolean;
  onChangeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(null);

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);
