import React, { FC } from 'react';
import s from './OrderPanel.module.scss';
import OrderButton from 'src/features/orderProducts/ui/orderPanel/orderButton/OrderButton';
import CostLabel from 'src/features/orderProducts/ui/orderPanel/costLabel/CostLabel';

type OrderPanelType = {
  onOrderProducts: () => void;
  costOrder: number;
};

const OrderPanel: FC<OrderPanelType> = ({ onOrderProducts, costOrder }) => {
  return (
    <div className={s.root}>
      <div className={s.cost_label}>
        <CostLabel cost={costOrder} />
      </div>
      <div className={s.order_button}>
        <OrderButton onClick={onOrderProducts} />
      </div>
    </div>
  );
};

export default OrderPanel;
