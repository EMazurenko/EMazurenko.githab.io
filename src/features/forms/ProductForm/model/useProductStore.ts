import { useMemo } from 'react';
import { Product } from 'src/entities/product/model/types';
import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { addProduct, selectProductById, Categories, defaultCategory } from 'src/features/store/model/slices/product';

const getCategoryById = (categoryId: string) => {
  const found = Categories.findLast((cat) => cat.id === categoryId);
  return found || defaultCategory;
};

const getOrInitProduct = (foundProduct: Product) => {
  let product: Omit<Partial<Product>, 'id | createdAt'>;
  if (foundProduct) {
    product = foundProduct;
  } else {
    product = {
      name: '',
      photo: '',
      price: 0,
      category: defaultCategory,
    };
  }
  return product;
};

export const useProductStore = (productId: string) => {
  const foundProduct = useAppSelector(selectProductById(productId));
  const dispatch = useAppDispatch();

  const initProduct = getOrInitProduct(foundProduct);
  const saveProduct = (product: Product) => {
    const nowMs = Date.now().toString();
    product.id = product.id || `product_${nowMs}`;
    product.createdAt = product.createdAt || nowMs;
    dispatch(addProduct(product));
  };
  const findCategory = (categoryId: string) => getCategoryById(categoryId);
  const getCategoryOptions = useMemo(() => Categories.map((cat) => ({ value: cat.id, text: cat.name })), []);

  return { initProduct, saveProduct, findCategory, getCategoryOptions };
};
