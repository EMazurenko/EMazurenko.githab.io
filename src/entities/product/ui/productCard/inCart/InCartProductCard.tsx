import React, { FC, useState } from 'react';
import { CartButton } from 'src/entities/cart/ui/cartButton';
import s from './InCartProductCard.module.scss';
import photo_stub from '../stub.png';
import { priceFormatter } from 'src/shared/utils/FormatUtils';
import { ProductCardProps } from '../ProductCard.types';
import cn from 'clsx';

type InCartProductCardProps = Omit<ProductCardProps, 'description'>;

export const InCartProductCard: FC<InCartProductCardProps> = ({
  className,
  title = 'Продукт',
  price = 99.99,
  photo_url = photo_stub,
  initCountItems = 1,
}) => {
  const [sum, setSum] = useState(price * initCountItems);

  const handleSetNewCountItem = (newCountItems: number) => {
    setSum(price * newCountItems);
  };

  return (
    <div className={cn(s.root, className)}>
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
            onSetNewCountItem={handleSetNewCountItem}
          />
        </span>
      </div>
    </div>
  );
};
