import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import s from './ToCartButton.module.scss';
import { CartButtonsItemProps } from '../CartButton.types';

type ToCartButtonProps = Pick<CartButtonsItemProps, 'onAddItem'> & WithTranslation;

const ToCartButton: FC<ToCartButtonProps> = ({ onAddItem, t }) => {
  return (
    <button className={s.cart_button} onClick={onAddItem}>
      {t('cart.to', 'В корзину')}
    </button>
  );
};

export default withTranslation()(ToCartButton);
