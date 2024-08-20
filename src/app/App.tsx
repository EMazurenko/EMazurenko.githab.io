import React from 'react';
import s from './App.module.scss';
import Router from 'src/app/router';
import { StoreProvider } from 'src/features/store/ui';
import { Setup } from 'src/app/setup';
import { QueryProvider } from 'src/app/query';
import { ThemeProvider } from 'src/features/changeTheme/ui/ThemeProvider';
import { LanguageProvider } from 'src/features/changeLanguage/ui/LanguageProvider';

function App() {
  return (
    <div className={s.App}>
      <QueryProvider>
        <StoreProvider>
          <LanguageProvider>
            <ThemeProvider>
              <Setup>
                <Router />
              </Setup>
            </ThemeProvider>
          </LanguageProvider>
        </StoreProvider>
      </QueryProvider>
    </div>
  );
}

export default App;
