import React, { FC } from 'react';
import { PageHeader } from '../pageHeader/PageHeader';
import { PageNavigation } from '../pageNavigation/PageNavigation';
import s from './PageLayout.module.scss';

export const PageLayout: FC = () => {
  return (
    <div className={s.root}>
      <PageHeader />
      <PageNavigation />
    </div>
  );
};
