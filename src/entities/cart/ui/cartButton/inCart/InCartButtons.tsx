import React, { FC } from 'react';
import s from './InCartButtons.module.scss';
import { CartButtonsItemProps } from '../CartButton.types';
import { CartIcon } from 'src/shared/ui/button/goToCartButton';
import { StyledLink } from 'src/shared/ui/styledLink';

export const InCartButtons: FC<CartButtonsItemProps> = ({
  countItems,
  onAddItem,
  onRemoveItem,
  onChangeCountItems,
}) => {
  return (
    <>
      <button className={s.cart_button}>
        <StyledLink to="/cart">
          <CartIcon />
        </StyledLink>
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
