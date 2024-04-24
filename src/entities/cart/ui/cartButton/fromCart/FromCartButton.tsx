import React, { FC } from 'react';
import s from './FromCartButton.module.scss';
import { BasketIcon } from './BasketIcon';
import { CartButtonsProps } from '../CartButton.types';

export const FromCartButton: FC<CartButtonsProps> = ({ countItems, onAddItem, onRemoveItem, onChangeCountItems }) => {
  const basketButton = (
    <button className={s.decrease_button}>
      <BasketIcon />
    </button>
  );
  const deacreaseButton = (
    <button className={s.decrease_button} onClick={onRemoveItem}>
      -
    </button>
  );
  return (
    <>
      {countItems <= 1 ? basketButton : deacreaseButton}
      <input className={s.count_input} value={countItems} onChange={onChangeCountItems} />
      <button className={s.increase_button} onClick={onAddItem}>
        +
      </button>
    </>
  );
};
