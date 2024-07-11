import React, { FC } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import s from './PageNavigation.module.scss';
import { GoToCartButton } from 'src/shared/ui/button/goToCartButton';
import { StyledNavLink } from 'src/shared/ui/styledLink';
import { useAppSelector } from 'src/features/store/model';
import { selectIsAdminProfileRole } from 'src/features/store/model/slices/profile';

const PageNavigation: FC<WithTranslation> = ({ t }) => {
  const isAdmin = useAppSelector(selectIsAdminProfileRole);

  return (
    <div className={s.root}>
      <ul>
        <li>
          <StyledNavLink to={'/products'}>{t('products')}</StyledNavLink>
        </li>
        {isAdmin && (
          <li>
            <StyledNavLink to={'/warehouse'}>{t('warehouse')}</StyledNavLink>
          </li>
        )}
      </ul>
      <div className={s.cart}>
        <GoToCartButton />
      </div>
    </div>
  );
};

export default withTranslation('labels', { keyPrefix: 'section' })(PageNavigation);
