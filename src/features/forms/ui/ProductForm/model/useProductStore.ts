import { useMemo } from 'react';
import { Product } from 'src/entities/product/model/types';
import ProductStore from 'src/features/storeProduct/model/ProductStore';
import Categories, { defaultCategory } from 'src/features/storeProduct/model/Categories';

const getOrInitProduct = (productId: string) => {
  let product: Omit<Partial<Product>, 'id | createdAt'>;
  if (productId) {
    product = ProductStore.getById(productId);
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

const updateProduct = (product: Product) => {
  const nowMs = Date.now().toString();
  product.id = product.id || `product_${nowMs}`;
  product.createdAt = product.createdAt || nowMs;

  ProductStore.save(product);
};

const getCategoryById = (categoryId: string) => {
  const found = Categories.findLast((cat) => cat.id === categoryId);
  return found || defaultCategory;
};

export const useProductStore = (productId: string) => {
  const initProduct = useMemo(() => getOrInitProduct(productId), [productId]);
  const getProduct = (productId: string) => getOrInitProduct(productId);
  const saveProduct = (product: Product) => updateProduct(product);
  const findCategory = (categoryId: string) => getCategoryById(categoryId);
  const getCategoryOptions = useMemo(() => Categories.map((cat) => ({ value: cat.id, text: cat.name })), []);

  return { initProduct, getProduct, saveProduct, findCategory, getCategoryOptions };
};
