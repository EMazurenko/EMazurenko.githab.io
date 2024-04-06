import React from 'react';
import s from './ToCartButton.module.scss';

export const ToCartButton = ({ onClick }) => {
  return (
    <button className={s.cart_button} onClick={onClick}>
      В корзину
    </button>
  );
};
