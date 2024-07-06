import React, { FC } from 'react';
import { CloseButton } from '../../button/closeButton/CloseButton';
import s from './ModalHeader.module.scss';

export type ModalHeaderProps = {
  title: string;
  onClose?: () => void;
};

export const ModalHeader: FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className={s.root}>
      <h3 className={s.title}>{title}</h3>
      <CloseButton size="small" className={s.close_button} onClose={onClose} />
    </div>
  );
};
