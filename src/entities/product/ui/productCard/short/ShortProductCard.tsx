import React, { FC } from 'react';
import { CartButton } from 'src/entities/cart/ui/cartButton';
import s from './ShortProductCard.module.scss';
import photo_stub from '../stub.png';
import { priceFormatter } from 'src/shared/utils/FormatUtils';
import { ProductCardProps } from '../ProductCard.types';

type ShortProductCardProps = Omit<ProductCardProps, 'handlerCountItem'>;

export const ShortProductCard: FC<ShortProductCardProps> = ({
  title = 'Продукт',
  description = 'Описание',
  price = 99.99,
  initCountItems = 0,
  photo_url = photo_stub,
}) => {
  return (
    <div className={s.root}>
      <p className={s.title}>{title}</p>
      <img className={s.product_image} src={photo_url} alt="Фото товара" />
      <p className={s.description}>{description}</p>
      <div className={s.card_footer}>
        <span className={s.price}>{priceFormatter.format(price)}</span>
        <CartButton className={s.cart_button} size="medium" initCountItems={initCountItems} />
      </div>
    </div>
  );
};
