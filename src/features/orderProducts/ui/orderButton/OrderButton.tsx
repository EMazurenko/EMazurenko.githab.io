import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import s from './OrderButton.module.scss';

type OrderButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const OrderButton: FC<OrderButtonProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <button {...props} className={s.root}>
      {t('order.button', 'Заказать')}
    </button>
  );
};

export default memo<OrderButtonProps>(OrderButton);
