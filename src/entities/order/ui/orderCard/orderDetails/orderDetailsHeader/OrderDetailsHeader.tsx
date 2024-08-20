import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import s from './OrderDetailsHeader.module.scss';

type OrderDetailsHeaderProps = WithTranslation;

const OrderDetailsHeader: FC<OrderDetailsHeaderProps> = ({ t }) => {
  return (
    <div className={s.root}>
      <p></p>
      <p>{t('orderCard.detailsHeader.name', 'Наименование')}</p>
      <p>{t('orderCard.detailsHeader.price', 'Цена')}</p>
      <p>{t('orderCard.detailsHeader.quantity', 'Кол-во')}</p>
      <p>{t('orderCard.detailsHeader.cost', 'Стоимость')}</p>
    </div>
  );
};

export default withTranslation(['labels'])(OrderDetailsHeader);
