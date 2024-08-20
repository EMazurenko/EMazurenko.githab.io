import { useCallback, useMemo } from 'react';
import { Product } from 'src/entities/product/model/types';
import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { selectProductById, editProduct, createProduct } from 'src/features/store/model/slices/product';
import { selectCategories } from 'src/features/store/model/slices/category';

const getOrInitProduct = (foundProduct: Product) => {
  let product: Omit<Partial<Product>, 'id | createdAt'>;
  if (foundProduct) {
    product = foundProduct;
  } else {
    product = {
      name: '',
      photo: '',
      price: 0,
    };
  }
  return product;
};

export const useProductStore = (productId: string) => {
  const foundProduct = useAppSelector(selectProductById(productId));
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  const initProduct = getOrInitProduct(foundProduct);
  const saveProduct = (product: Product) => {
    if (product.id) {
      dispatch(editProduct(product));
    } else {
      dispatch(createProduct(product));
    }
  };
  const findCategory = useCallback(
    (categoryId: string) => categories.findLast((cat) => cat.id === categoryId),
    [categories]
  );
  const getCategoryOptions = useMemo(() => categories.map((cat) => ({ value: cat.id, text: cat.name })), [categories]);

  return { initProduct, saveProduct, findCategory, getCategoryOptions };
};
