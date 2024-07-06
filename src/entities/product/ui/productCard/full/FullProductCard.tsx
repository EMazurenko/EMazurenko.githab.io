import React, { FC } from 'react';
import { CartButton } from 'src/entities/cart/ui/cartButton';
import { ImageList } from './imageList/ImageList';
import s from './FullProductCard.module.scss';
import photo_stub from '../stub.png';
import { priceFormatter } from 'src/shared/utils/FormatUtils';
import { ProductCardProps } from '../ProductCard.types';
import cn from 'clsx';

type FullProductCardProps = ProductCardProps;

export const FullProductCard: FC<FullProductCardProps> = ({
  className,
  category = 'Категория',
  title = 'Продукт',
  description = 'Описание',
  price = 99.99,
  photo_url = [photo_stub, photo_stub],
  initCountItems = 0,
  onChangeCountItems,
}) => {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.card_header}>
        <div>
          <ImageList images={[...photo_url]} />
        </div>
        <div className={s.info_block}>
          <div className={s.cart_panel}>
            <span className={s.price}>{priceFormatter.format(price)}</span>
            <CartButton size="large" initCountItems={initCountItems} onSetNewCountItem={onChangeCountItems} />
          </div>
          <p className={s.category}>{category}</p>
          <p className={s.title}>{title}</p>
        </div>
      </div>
      <p className={s.description}>{description}</p>
    </div>
  );
};
