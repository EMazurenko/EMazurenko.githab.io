import React, { FC } from 'react';
import { Trans } from 'react-i18next';
import { Logo } from 'src/shared/ui/logo';
import { Toolbar } from 'src/widgets/layout/ui/pageHeader/toolbar/Toolbar';
import s from './PageHeader.module.scss';

const PageHeader: FC = () => {
  return (
    <div className={s.root}>
      <Toolbar />
      <Logo />
      <h2>
        <Trans i18nKey="header">
          Магазин электронных распродаж <i>E-Market</i>
        </Trans>
      </h2>
    </div>
  );
};

export default PageHeader;
