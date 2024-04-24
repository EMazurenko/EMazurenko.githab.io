import React, { FC } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import s from './PageNavigation.module.scss';

const PageNavigation: FC<WithTranslation> = ({ t }) => {
  return (
    <div className={s.root}>
      <ul>
        <li>{t('section1')}</li>
        <li>{t('section2')}</li>
        <li>{t('section3')}</li>
      </ul>
    </div>
  );
};

export default withTranslation('labels', { keyPrefix: 'section' })(PageNavigation);
