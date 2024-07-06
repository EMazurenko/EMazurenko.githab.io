import { useMemo } from 'react';
import { Product } from 'src/entities/product/model/types';
import Categories, { defaultCategory } from 'src/features/storeProduct/model/Categories';
import { useProductContext } from 'src/features/storeProduct/ui';

const getCategoryById = (categoryId: string) => {
  const found = Categories.findLast((cat) => cat.id === categoryId);
  return found || defaultCategory;
};

const getOrInitProduct = (productId: string, getById: (productId: string) => Product) => {
  let product: Omit<Partial<Product>, 'id | createdAt'>;
  if (productId) {
    product = getById(productId);
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
  const {
    callbacks: { save, getById },
  } = useProductContext();

  const initProduct = useMemo(() => getOrInitProduct(productId, getById), [productId, getById]);
  const getProduct = (productId: string) => getOrInitProduct(productId, getById);
  const saveProduct = (product: Product) => {
    const nowMs = Date.now().toString();
    product.id = product.id || `product_${nowMs}`;
    product.createdAt = product.createdAt || nowMs;
    save(product);
  };
  const findCategory = (categoryId: string) => getCategoryById(categoryId);
  const getCategoryOptions = useMemo(() => Categories.map((cat) => ({ value: cat.id, text: cat.name })), []);

  return { initProduct, getProduct, saveProduct, findCategory, getCategoryOptions };
};
