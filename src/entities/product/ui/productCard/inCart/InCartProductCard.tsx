import React, { FC } from 'react';
import { CartButton } from 'src/entities/cart/ui/cartButton';
import s from './InCartProductCard.module.scss';
import photo_stub from '../stub.png';
import { priceFormatter } from 'src/shared/utils/FormatUtils';
import { ProductCardProps } from '../ProductCard.types';

type InCartProductCardProps = Omit<ProductCardProps, 'price' | 'description'> & { sum: number };

export const InCartProductCard: FC<InCartProductCardProps> = ({
  title = 'Продукт',
  sum = 99.99,
  photo_url = photo_stub,
  initCountItems = 1,
  onSetNewCountItem,
}) => {
  return (
    <div className={s.root}>
      <img className={s.product_image} src={photo_url} alt="Фото товара" />
      <div className={s.text_continer}>
        <p className={s.title}>{title}</p>
        <span className={s.card_footer}>
          <span className={s.sum}>{priceFormatter.format(sum)}</span>
          <CartButton
            className={s.cart_button}
            size="medium"
            initCountItems={initCountItems}
            isFromCart={true}
            onSetNewCountItem={onSetNewCountItem}
          />
        </span>
      </div>
    </div>
  );
};
