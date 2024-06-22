import React, { createContext, FC, ProviderProps, useContext, useMemo, useState } from 'react';
import { Product } from 'src/entities/product/model/types';
import { ProductStore } from 'src/features/storeProduct/model';
import { createProductForId } from 'src/features/createRandomProduct/api';

const addProductsToStore = (count: number) => {
  for (let i = 0; i < count; i++) {
    ProductStore.save(createProductForId(i.toString()));
  }
};

addProductsToStore(15);

type ProductsCallbacks = {
  addMore: () => void;
  save: (product: Product) => void;
  getById: (id: string) => Product | undefined;
};

type ProductContextType = {
  products: Product[];
  callbacks: ProductsCallbacks;
};

const ProductContext = createContext<ProductContextType>(null);

export const useProductContext = () => useContext<ProductContextType>(ProductContext);

type ProductContextProviderProps = Pick<ProviderProps<ProductContextType>, 'children'>;

export const ProductContextProvider: FC<ProductContextProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => ProductStore.list());

  const callbacks = useMemo(
    () => ({
      addMore: () => {
        addProductsToStore(3);
        setProducts([...ProductStore.list()]);
      },
      save: (product: Product) => {
        ProductStore.save(product);
        setProducts([...ProductStore.list()]);
      },
      getById: (id: string) => ProductStore.getById(id),
    }),
    []
  );

  return <ProductContext.Provider value={{ products, callbacks }}>{children}</ProductContext.Provider>;
};
