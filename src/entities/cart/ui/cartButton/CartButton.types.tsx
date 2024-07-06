import { ChangeEvent } from 'react';

export type CartButtonContainerProps = {
  size: 'medium' | 'large';
  isFromCart?: boolean;
  initCountItems: number;
  className?: string;
  onSetNewCountItem?: (newCountItems: number) => void;
};

export type CartButtonsItemProps = {
  countItems: number;
  onAddItem: () => void;
  onRemoveItem: () => void;
  onChangeCountItems: (e: ChangeEvent<HTMLInputElement>) => void;
};
