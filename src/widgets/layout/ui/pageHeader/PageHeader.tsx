import React, { FC } from 'react';
import { Logo } from 'src/shared/ui/logo';
import s from './PageHeader.module.scss';

const appTitle = (
  <h2>
    Магазин электронных распродаж <i>E-Market</i>
  </h2>
);

export const PageHeader: FC = () => {
  return (
    <div className={s.root}>
      <Logo />
      {appTitle}
    </div>
  );
};
