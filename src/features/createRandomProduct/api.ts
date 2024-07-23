import { Product } from 'src/entities/product/model/types';
import photo_stub from 'src/entities/product/ui/productCard/stub.png';
import { Category } from 'src/entities/category/model/types';

const Categories: Category[] = [
  { id: '1', name: 'cat_1', photo: 'file://photo_cat_1' },
  { id: '2', name: 'cat_2' },
  { id: '3', name: 'cat_3', photo: 'file://photo_cat_3' },
  { id: '4', name: 'cat_4' },
  { id: '5', name: 'cat_5', photo: 'file://photo_cat_5' },
  { id: '6', name: 'cat_6' },
  { id: '7', name: 'cat_7' },
  { id: '8', name: 'cat_8' },
  { id: '9', name: 'cat_9' },
  { id: '10', name: 'cat_10' },
];

const PRODUCTS_BY_CATEGORY = new Map<string, string[]>([
  ['cat_1', ['product_1_1', 'product_1_2', 'product_1_3']],
  ['cat_2', ['product_2_1', 'product_2_2']],
  ['cat_3', ['product_3_1', 'product_3_2', 'product_3_3', 'product_3_4']],
  ['cat_4', ['product_4_1']],
  ['cat_5', ['product_5_1', 'product_5_2', 'product_5_3']],
  ['cat_6', ['product_6_1', 'product_6_2']],
  ['cat_7', ['product_7_1']],
  ['cat_8', ['product_8_1', 'product_8_2']],
  ['cat_9', ['product_9_1', 'product_9_2', 'product_9_3']],
  ['cat_10', ['product_10_1', 'product_10_2']],
]);

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const millis = Date.now().toString();
  const getCategoryDependentValues = () => {
    const category = Categories[Math.floor(Math.random() * Categories.length)];
    const categoryProducts = PRODUCTS_BY_CATEGORY.get(category.name);
    const product = categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
    const photo = photo_stub;
    const desc = Math.random() < 0.3 ? `Description of a product "${product}"...` : undefined;
    return { category, name: product, photo, desc };
  };
  return {
    id: `product_${millis}`,
    createdAt,
    price: Math.ceil(Math.random() * 100),
    oldPrice: Math.random() > 0.5 ? Math.ceil(Math.random() * 100) : undefined,
    ...getCategoryDependentValues(),
  };
};

export const createProductForId = (baseId: string): Product => {
  const product = createRandomProduct(Date.now().toString());
  product.id = baseId + '_' + product.id;
  return product;
};
