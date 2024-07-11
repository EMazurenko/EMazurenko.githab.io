import React from 'react';
import s from './App.module.scss';
import Router from 'src/app/router';
import { StoreProvider } from 'src/features/store/ui';
import { Setup } from 'src/app/setup';

function App() {
  return (
    <div className={s.App}>
      <StoreProvider>
        <Setup>
          <Router />
        </Setup>
      </StoreProvider>
    </div>
  );
}

export default App;
