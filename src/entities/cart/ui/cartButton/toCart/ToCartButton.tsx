import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import s from './ToCartButton.module.scss';
import { CartButtonsProps } from '../CartButton.types';

type ToCartButtonProps = Pick<CartButtonsProps, 'onAddItem'> & WithTranslation;

const ToCartButton: FC<ToCartButtonProps> = ({ onAddItem, t }) => {
  return (
    <button className={s.cart_button} onClick={onAddItem}>
      {t('cart.to')}
    </button>
  );
};

export default withTranslation()(ToCartButton);
