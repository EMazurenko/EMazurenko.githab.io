import React, { FC, lazy } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { FormContainer } from 'src/shared/ui/form';
import { OrderList } from 'src/features/orderProducts/ui';

type OrderFormProps = {
  className: string;
} & WithTranslation;

const OrdersForm: FC<OrderFormProps> = ({ className, t }) => {
  return (
    <FormContainer className={className} title={t('orders.title', 'Заказы')}>
      <OrderList />
    </FormContainer>
  );
};

export default withTranslation(['forms'])(OrdersForm);
