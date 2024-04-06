import React from 'react';
import { Logo } from '../logo/Logo';
import s from './PageHeader.module.scss';

const appTitle = (
  <h2>
    Магазин электронных распродаж <i>E-Market</i>
  </h2>
);

export const PageHeader = () => {
  return (
    <div className={s.root}>
      <Logo />
      {appTitle}
    </div>
  );
};
