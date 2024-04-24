import React, { FC, ReactNode } from 'react';
import PageHeader from '../pageHeader/PageHeader';
import PageNavigation from '../pageNavigation/PageNavigation';
import s from './PageLayout.module.scss';

type PageLayoutProps = {
  children?: ReactNode | ReactNode[];
};

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <div className={s.root}>
        <div className={s.header}>
          <PageHeader />
          <PageNavigation />
        </div>
        <div className={s.content}>{children}</div>
      </div>
    </>
  );
};
