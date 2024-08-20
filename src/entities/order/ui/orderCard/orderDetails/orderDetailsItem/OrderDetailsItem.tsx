import React, { FC } from 'react';
import s from './OrderDetailsItem.module.scss';
import { priceFormatter } from 'src/shared/utils/FormatUtils';
import { Product } from 'src/entities/product/model/types';

type OrderDetailsItemType = Pick<Product, 'name' | 'photo' | 'price'> & { quantity: number };

const OrderDetailsItem: FC<OrderDetailsItemType> = ({ name, photo, price, quantity }) => {
  return (
    <div className={s.root}>
      <img className={s.product_image} src={photo} alt="Фото товара" />
      <p>{name}</p>
      <p>{priceFormatter.format(price)}</p>
      <p>{quantity}</p>
      <p>{priceFormatter.format(quantity * price)}</p>
    </div>
  );
};

export default OrderDetailsItem;
