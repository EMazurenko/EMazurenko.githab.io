import React, { FC, memo } from 'react';
import { ShortProductCard } from './short/ShortProductCard';
import { InCartProductCard } from './inCart/InCartProductCard';
import { FullProductCard } from './full/FullProductCard';
import photo_stub from './stub.png';
import { ProductCardContainerProps } from './ProductCard.types';
import s from './ProductCard.module.scss';
import cn from 'clsx';

const ProductCard: FC<ProductCardContainerProps> = ({
  className,
  type = 'Short',
  category = 'Категория',
  title = 'Продукт',
  description = 'Описание',
  price = 99.99,
  initCountItems = 1,
  onChangeCountItems = (count: number) => {},
  photo_url = [photo_stub, photo_stub],
}) => {
  let productCard = null;
  switch (type) {
    case 'Short':
      productCard = (
        <ShortProductCard
          className={cn(s.root, className)}
          title={title}
          description={description}
          price={price}
          initCountItems={initCountItems}
          onChangeCountItems={onChangeCountItems}
          photo_url={photo_url[0]}
        />
      );
      break;

    case 'InCart':
      productCard = (
        <InCartProductCard
          className={cn(s.root, className)}
          title={title}
          price={price}
          initCountItems={initCountItems}
          onChangeCountItems={onChangeCountItems}
          photo_url={photo_url[0]}
        />
      );
      break;

    case 'Full':
      productCard = (
        <FullProductCard
          className={cn(s.root, className)}
          category={category}
          title={title}
          description={description}
          price={price}
          initCountItems={initCountItems}
          onChangeCountItems={onChangeCountItems}
          photo_url={photo_url}
        />
      );
      break;
  }
  return <>{productCard}</>;
};

export default memo<ProductCardContainerProps>(ProductCard);
