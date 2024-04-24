import React from 'react';
import s from './App.module.scss';
import './localization/config';
import { Demo } from 'src/pages/demo/ui';
import { Hello } from 'src/pages/hello/ui';

function App() {
  return (
    <div className={s.App}>
      <Demo />
      {/*<Hello/>*/}
    </div>
  );
}

export default App;
