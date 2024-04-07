import React, { FC, ReactNode } from 'react';
import s from './ModalContent.module.scss';

export type ModalContentProps = {
  children?: ReactNode;
};

export const ModalContent: FC<ModalContentProps> = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};
