import React, { FC, useState } from 'react';
import cn from 'clsx';
import s from './CartButton.module.scss';
import ToCartButton from './toCart/ToCartButton';
import { InCartButtons } from './inCart/InCartButtons';
import { FromCartButton } from './fromCart/FromCartButton';
import { CartButtonContainerProps } from './CartButton.types';

export const CartButton: FC<CartButtonContainerProps> = ({
  size = 'medium',
  isFromCart = false,
  initCountItems = 0,
  className,
  onSetNewCountItem,
}) => {
  const MAX_COUNT_ITEMS = 99;
  const [countItems, setCountItems] = useState(initCountItems);

  const handleIncreaseCountItems = () => {
    if (MAX_COUNT_ITEMS > countItems) {
      const newCountItems = countItems + 1;
      setCountItems(newCountItems);
      onSetNewCountItem && onSetNewCountItem(newCountItems);
    }
  };

  const handleDecreaseCountItems = () => {
    const newCountItems = countItems - 1;
    setCountItems(newCountItems);
    onSetNewCountItem && onSetNewCountItem(newCountItems);
  };

  const handleChangeCountItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCountItems = parseInt(e.target.value.trim());
    if (isCorrectCount(newCountItems, countItems)) {
      setCountItems(newCountItems);
      onSetNewCountItem && onSetNewCountItem(newCountItems);
    }
  };

  const isCorrectCount = (newCountValue: number, currentCountValue: number) =>
    newCountValue >= 0 && newCountValue < 100 && newCountValue != currentCountValue;

  const toCartButton = <ToCartButton onAddItem={handleIncreaseCountItems} />;

  const inCartButton = (
    <InCartButtons
      onAddItem={handleIncreaseCountItems}
      onRemoveItem={handleDecreaseCountItems}
      onChangeCountItems={handleChangeCountItems}
      countItems={countItems}
    />
  );

  const fromCartButton = (
    <FromCartButton
      onAddItem={handleIncreaseCountItems}
      onRemoveItem={handleDecreaseCountItems}
      onChangeCountItems={handleChangeCountItems}
      countItems={countItems}
    />
  );

  return (
    <div className={cn(s.root, s[size], className)}>
      {isFromCart ? fromCartButton : countItems == 0 ? toCartButton : inCartButton}
    </div>
  );
};
