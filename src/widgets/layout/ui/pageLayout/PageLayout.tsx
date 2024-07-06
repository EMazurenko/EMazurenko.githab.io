import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from '../pageHeader/PageHeader';
import PageNavigation from '../pageNavigation/PageNavigation';
import s from './PageLayout.module.scss';
import useChangePageTitle from 'src/features/changePageTitle/model/useChangePageTitle';

export const PageLayout: FC = () => {
  useChangePageTitle('titlePage.demo');

  return (
    <>
      <div className={s.root}>
        <div className={s.header}>
          <PageHeader />
          <PageNavigation />
        </div>
        <div className={s.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
