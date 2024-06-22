import React, { FC } from 'react';
import s from './FromCartButton.module.scss';
import { BasketIcon } from './BasketIcon';
import { CartButtonsItemProps } from '../CartButton.types';

export const FromCartButton: FC<CartButtonsItemProps> = ({
  countItems,
  onAddItem,
  onRemoveItem,
  onChangeCountItems,
}) => {
  return (
    <>
      <button className={s.decrease_button} onClick={onRemoveItem}>
        {countItems <= 1 ? <BasketIcon /> : '-'}
      </button>
      <input className={s.count_input} value={countItems} onChange={onChangeCountItems} />
      <button className={s.increase_button} onClick={onAddItem}>
        +
      </button>
    </>
  );
};
