import React, { FC, ReactNode } from 'react';
import cn from 'clsx';
import { ModalHeader } from './modalHeader/ModalHeader';
import { ModalContent } from './modalContent/ModalContent';
import s from './ModalWindow.module.scss';
import { createPortal } from 'react-dom';

export type ModalWindowProps = {
  title: string;
  onClose?: () => void;
  children: string | ReactNode;
};

const modalRoot = document.body;

export const ModalWindow: FC<ModalWindowProps> = ({ title, children, onClose }) => {
  const handleCloseOnClickMask = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={cn(s.mask)} onClick={(event) => handleCloseOnClickMask(event)}>
      <div className={s.root}>
        <ModalHeader title={title} onClose={onClose} />
        <ModalContent>{children}</ModalContent>
      </div>
    </div>,
    modalRoot
  );
};
