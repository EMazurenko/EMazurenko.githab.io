import { MouseEvent, useCallback, useState } from 'react';
import { OrderStatus } from 'src/entities/order/model/types';
import { TFunction } from 'i18next';
import { coreService } from 'src/features/coreService/model';

export const mapStatus = (status: OrderStatus, t: TFunction): string => {
  return t(`orderCard.orderTitle.statuses.${status}`, 'Не определен');
};

export const useChangeStatus = (orderId: string, status: OrderStatus, t: TFunction) => {
  const [targetStatus, setTargetStatus] = useState<OrderStatus>(status);
  const [error, setError] = useState<string>(null);

  const handleChangeStatus = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => (newStatus: OrderStatus) => {
      event.stopPropagation();
      coreService
        .changeOrderStatus({ id: orderId, status: newStatus })
        .then((order) => {
          setError(null);
          setTargetStatus(order.status);
        })
        .catch((reason) => {
          console.log(reason);
          setError(reason.message);
        });
    },
    [orderId, setTargetStatus]
  );

  return {
    targetStatus: mapStatus(targetStatus, t),
    canConfirm: targetStatus === OrderStatus.PendingConfirmation,
    canCancel: targetStatus !== OrderStatus.OrderCancelled,
    onConfirm: (event: MouseEvent<HTMLButtonElement>) => handleChangeStatus(event)(OrderStatus.Processing),
    onCancel: (event: MouseEvent<HTMLButtonElement>) => handleChangeStatus(event)(OrderStatus.OrderCancelled),
    error,
  };
};
