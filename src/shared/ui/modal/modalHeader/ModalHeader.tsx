import React, { FC } from 'react';
import { CloseButton } from '../../closeButton/CloseButton';
import s from './ModalHeader.module.scss';

export type ModalHeaderProps = {
  title: string;
  handlerClose?: () => void;
};

export const ModalHeader: FC<ModalHeaderProps> = ({ title }) => {
  return (
    <div className={s.root}>
      <h3 className={s.title}>{title}</h3>
      <CloseButton size="small" className={s.close_button} />
    </div>
  );
};
