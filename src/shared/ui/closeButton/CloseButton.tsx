import React, { FC } from 'react';
import cn from 'clsx';
import s from './CloseButton.module.scss';

export type CloseButtonProps = {
  size: 'small' | 'large';
  handlerClose?: () => void;
  className?: string;
};

export const CloseButton: FC<CloseButtonProps> = ({ size = 'small', handlerClose, className }) => {
  const classNames = cn(s.root, s[size], className);

  return (
    <button className={classNames} onClick={handlerClose}>
      <div className={s.symbol} />
    </button>
  );
};
