import React, { FC } from 'react';
import cn from 'clsx';
import { OrderStatus } from 'src/entities/order/model/types';
import { withTranslation, WithTranslation } from 'react-i18next';
import s from './OrderTitle.module.scss';
import { priceFormatter } from 'src/shared/utils/FormatUtils';
import { useChangeStatus } from 'src/entities/order/model/useChangeStatus';

type OrderTitleProps = {
  id: string;
  status: OrderStatus;
  createdAt: string;
  sum: number;
} & WithTranslation;

const OrderTitle: FC<OrderTitleProps> = ({ id, status, createdAt, sum, t }) => {
  const { targetStatus, canConfirm, canCancel, onConfirm, onCancel } = useChangeStatus(id, status, t);
  const formattedSum = priceFormatter.format(sum);

  return (
    <div className={s.root}>
      <p>
        {t('orderCard.orderTitle.title', `Заказ № ${id} от ${createdAt} на сумму ${formattedSum}`, {
          ns: 'labels',
          id,
          createdAt,
          sum: formattedSum,
        })}
      </p>
      <div className={s.status_container}>
        <span>
          <span>{t('orderCard.orderTitle.status', 'Состояние')}</span>
          <span>{': '}</span>
          <span className={s.status_label}>{targetStatus}</span>
        </span>
        <span className={s.buttons_container}>
          <button className={cn(!canConfirm && s.hidden)} onClick={onConfirm}>
            {t('orderCard.orderTitle.buttons.confirm', 'Подтвердить')}
          </button>
          <button className={cn(!canCancel && s.hidden)} onClick={onCancel}>
            {t('orderCard.orderTitle.buttons.cancel', 'Отменить')}
          </button>
        </span>
      </div>
    </div>
  );
};

export default withTranslation(['labels'])(OrderTitle);
