import React from 'react';
import s from './ModalContent.module.scss';

export const ModalContent = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};
