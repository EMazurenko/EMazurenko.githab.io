import React, { FC } from 'react';
import s from './ToCartButton.module.scss';
import { CartButtonsProps } from '../CartButton.types';

export const ToCartButton: FC<Pick<CartButtonsProps, 'addItem'>> = ({ addItem }) => {
  return (
    <button className={s.cart_button} onClick={addItem}>
      В корзину
    </button>
  );
};
