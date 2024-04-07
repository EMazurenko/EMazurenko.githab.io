import { ChangeEvent } from 'react';

export type CartButtonContainerProps = {
  size: 'medium' | 'large';
  isFromCart?: boolean;
  initCountItems: number;
  className?: string;
  handlerCountItem?: (newCountItems: number) => void;
};

export type CartButtonsProps = {
  countItems: number;
  addItem: () => void;
  removeItem: () => void;
  setCountItems: (e: ChangeEvent<HTMLInputElement>) => void;
};
