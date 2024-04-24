import React, { FC } from 'react';
import cn from 'clsx';
import s from './CloseButton.module.scss';

export type CloseButtonProps = {
  size: 'small' | 'large';
  onClose?: () => void;
  className?: string;
};

export const CloseButton: FC<CloseButtonProps> = ({ size = 'small', onClose, className }) => {
  const classNames = cn(s.root, s[size], className);

  return (
    <button className={classNames} onClick={onClose}>
      <div className={s.symbol} />
    </button>
  );
};
