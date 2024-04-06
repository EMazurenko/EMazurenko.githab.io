import React from 'react';
import cn from 'clsx';
import s from './CloseButton.module.scss';

export const CloseButton = ({ size = 'small', className }) => {
  const classNames = cn(s.root, s[size], className);

  const onCloseHandler = () => console.log('Cancel button click!');

  return (
    <button className={classNames} onClick={onCloseHandler}>
      <div className={s.symbol} />
    </button>
  );
};
