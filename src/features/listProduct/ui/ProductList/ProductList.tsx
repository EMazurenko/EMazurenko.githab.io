import React, { FC } from 'react';
import s from './ProductList.module.scss';
import cn from 'clsx';
import { Product } from 'src/entities/product/model/types';
import { ProductCardContainerProps } from 'src/entities/product/ui/productCard/ProductCard.types';
import ProductItem from 'src/features/listProduct/ui/ProductList/ProductItem/ProductItem';

export type ProductListProps = {
  typeCard: ProductCardContainerProps['type'];
  products: Product[];
  className?: string;
};

const ProductList: FC<ProductListProps> = ({ typeCard = 'Full', products, className }) => {
  return (
    <div className={cn(s.root, className)}>
      {products.map((p, idx) => (
        <ProductItem
          id={p.id}
          className={s.card}
          key={`${p.id}_${idx}`}
          type={typeCard}
          category={p.category.name}
          title={p.name}
          description={p.desc}
          price={p.price}
          photo_url={[p.photo]}
        />
      ))}
    </div>
  );
};

export default ProductList;
