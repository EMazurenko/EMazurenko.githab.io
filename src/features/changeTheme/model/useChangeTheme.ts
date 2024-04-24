import { useInsertionEffect, useState } from 'react';

const useChangeTheme = () => {
  const [theme, setTheme] = useState('light');
  const isLightTheme = theme === 'light';

  useInsertionEffect(() => {
    const html = document.body.parentElement;
    html.classList.add(theme);

    return () => html.classList.remove(theme);
  }, [theme]);

  const onChangeTheme = () => {
    setTheme(isLightTheme ? 'dark' : 'light');
  };

  return { isLightTheme, onChangeTheme };
};

export default useChangeTheme;
