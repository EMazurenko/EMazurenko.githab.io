import React, { FC } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import s from './PageNavigation.module.scss';
import { GoToCartButton } from 'src/shared/ui/button/goToCartButton';
import { StyledNavLink } from 'src/shared/ui/styledLink';

const PageNavigation: FC<WithTranslation> = ({ t }) => {
  return (
    <div className={s.root}>
      <ul>
        <li>
          <StyledNavLink to={'/products'}>{t('products')}</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={'/warehouse'}>{t('warehouse')}</StyledNavLink>
        </li>
      </ul>
      <div className={s.cart}>
        <GoToCartButton />
      </div>
    </div>
  );
};

export default withTranslation('labels', { keyPrefix: 'section' })(PageNavigation);
