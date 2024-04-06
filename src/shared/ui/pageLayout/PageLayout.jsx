import React from 'react';
import { PageHeader } from '../pageHeader/PageHeader';
import { PageNavigation } from '../pageNavigation/PageNavigation';
import s from './PageLayout.module.scss';

export const PageLayout = () => {
  return (
    <div className={s.root}>
      <PageHeader />
      <PageNavigation />
    </div>
  );
};
