import React, { useState } from 'react';
import cn from 'clsx';
import s from './CartButton.module.scss';
import { ToCartButton } from './toCart/ToCartButton';
import { InCartButtons } from './inCart/InCartButtons';
import { FromCartButton } from './fromCart/FromCartButton';

export const CartButton = ({
  size = 'medium',
  isFromCart = false,
  initCountItems = 0,
  className,
  handlerCountItem,
}) => {
  const MAX_COUNT_ITEMS = 99;
  const [countItems, setCountItems] = useState(initCountItems);

  const increaseCountItems = () => {
    if (MAX_COUNT_ITEMS > countItems) {
      const newCountItems = countItems + 1;
      setCountItems(newCountItems);
      handlerCountItem && handlerCountItem(newCountItems);
    }
  };

  const decreaseCountItems = () => {
    const newCountItems = countItems - 1;
    setCountItems(newCountItems);
    handlerCountItem && handlerCountItem(newCountItems);
  };

  const changeCountItems = (e) => {
    const newCountItems = parseInt(e.target.value.trim());
    if (isCorrectCount(newCountItems, countItems)) {
      setCountItems(newCountItems);
      handlerCountItem && handlerCountItem(newCountItems);
    }
  };

  const isCorrectCount = (newCountValue, currentCountValue) =>
    newCountValue >= 0 && newCountValue < 100 && newCountValue != currentCountValue;

  const toCartButton = <ToCartButton onClick={increaseCountItems} />;

  const inCartButton = (
    <InCartButtons
      addItem={increaseCountItems}
      removeItem={decreaseCountItems}
      setCountItems={changeCountItems}
      countItems={countItems}
    />
  );

  const fromCartButton = (
    <FromCartButton
      addItem={increaseCountItems}
      removeItem={decreaseCountItems}
      setCountItems={changeCountItems}
      countItems={countItems}
    />
  );

  return (
    <div className={cn(s.root, s[size], className)}>
      {isFromCart ? fromCartButton : countItems == 0 ? toCartButton : inCartButton}
    </div>
  );
};
