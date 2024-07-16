import React from 'react';
import s from './App.module.scss';
import Router from 'src/app/router';
import { StoreProvider } from 'src/features/store/ui';
import { Setup } from 'src/app/setup';
import { QueryProvider } from 'src/app/query';

function App() {
  return (
    <div className={s.App}>
      <QueryProvider>
        <StoreProvider>
          <Setup>
            <Router />
          </Setup>
        </StoreProvider>
      </QueryProvider>
    </div>
  );
}

export default App;
