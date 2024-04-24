import React, { FC } from 'react';
import s from './InCartButtons.module.scss';
import { CartButtonsProps } from '../CartButton.types';
import { CartIcon } from './CartIcon';

export const InCartButtons: FC<CartButtonsProps> = ({ countItems, onAddItem, onRemoveItem, onChangeCountItems }) => {
  return (
    <>
      <button className={s.cart_button}>
        <CartIcon />
      </button>
      <button className={s.decrease_button} onClick={onRemoveItem}>
        -
      </button>
      <input className={s.count_input} value={countItems} onChange={onChangeCountItems} />
      <button className={s.increase_button} onClick={onAddItem}>
        +
      </button>
    </>
  );
};
