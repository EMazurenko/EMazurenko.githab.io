import React, { FC } from 'react';
import s from './ProductList.module.scss';
import { Product } from 'src/entities/product/model/types';
import { ProductCard } from 'src/entities/product/ui/productCard/ProductCard';
import MoreButton from 'src/features/listProduct/ui/moreButton/MoreButton';

type ProductListProps = {
  products: Product[];
  onMoreProducts: () => void;
};

const ProductList: FC<ProductListProps> = ({ products, onMoreProducts }) => {
  return (
    <div className={s.root}>
      <div className={s.card_container}>
        {products.map((p, idx) => (
          <ProductCard
            className={s.card}
            key={`${p.id}_${idx}`}
            type={'Full'}
            initCountItems={0}
            category={p.category.name}
            title={p.name}
            description={p.desc}
            price={p.price}
          />
        ))}
      </div>
      <MoreButton onMoreProducts={onMoreProducts} />
    </div>
  );
};

export default ProductList;
