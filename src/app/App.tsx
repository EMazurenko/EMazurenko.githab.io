import React from 'react';
import s from './App.module.scss';
import './localization/config';
import { ProductContextProvider } from 'src/features/storeProduct/ui/ProductContextProvider';
import Router from 'src/app/router';
import { StoreProvider } from 'src/features/store/ui';

function App() {
  return (
    <div className={s.App}>
      {/*Решил использовать обычный контекст для хранилища продуктов в рамках эксперимента*/}
      <ProductContextProvider>
        <StoreProvider>
          <Router />
        </StoreProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
