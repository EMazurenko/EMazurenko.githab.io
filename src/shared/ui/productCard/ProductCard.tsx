import React, { FC, useState } from 'react';
import { ShortProductCard } from './short/ShortProductCard';
import { InCartProductCard } from './inCart/InCartProductCard';
import { FullProductCard } from './full/FullProductCard';
import photo_stub from './stub.png';
import { ProductCardContainerProps } from './ProductCard.types';

export const ProductCard: FC<ProductCardContainerProps> = ({
  type = 'Short',
  category = 'Категория',
  title = 'Продукт',
  description = 'Описание',
  price = 99.99,
  initCountItems = 1,
  photo_url = [photo_stub, photo_stub],
}) => {
  const [sum, setSum] = useState(price * initCountItems);

  const changeSum = (newCountItems: number) => {
    setSum(price * newCountItems);
  };

  let productCard = null;
  switch (type) {
    case 'Short':
      productCard = (
        <ShortProductCard
          title={title}
          description={description}
          price={price}
          initCountItems={initCountItems}
          photo_url={photo_url[0]}
        />
      );
      break;

    case 'InCart':
      productCard = (
        <InCartProductCard
          title={title}
          sum={sum}
          initCountItems={initCountItems}
          photo_url={photo_url[0]}
          handlerCountItem={changeSum}
        />
      );
      break;

    case 'Full':
      productCard = (
        <FullProductCard
          category={category}
          title={title}
          description={description}
          price={price}
          initCountItems={initCountItems}
          photo_url={photo_url}
        />
      );
      break;
  }
  return <>{productCard}</>;
};
