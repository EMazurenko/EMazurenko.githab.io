/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

interface BaseEntity {
  id: string;
  name: string;
}

interface Category extends BaseEntity {
  photo?: string;
}

interface Product extends BaseEntity {
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
}

interface BaseOperation extends BaseEntity {
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
}

type Cost = BaseOperation & { type: 'Cost' };

type Profit = BaseOperation & { type: 'Profit' };

type Operation = Cost | Profit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const millis = Date.now().toString();
  const getCategoryDependentValues = () => {
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    const categoryProducts = PRODUCTS_BY_CATEGORY.get(category.name);
    const product = categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
    const photo = `file://photo_${product}_${millis}`;
    const desc = Math.random() < 0.3 ? `Description of a product "${product}"...` : undefined;
    return { category, name: product, photo, desc };
  };
  return {
    id: `product_${millis}`,
    createdAt: createdAt,
    price: Math.ceil(Math.random() * 100),
    oldPrice: Math.random() > 0.5 ? Math.ceil(Math.random() * 100) : undefined,
    ...getCategoryDependentValues(),
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const operationType = Math.random() > 0.5 ? 'Cost' : 'Profit';
  return {
    id: `operation_${Date.now().toString()}`,
    name: `operation_${operationType}`,
    desc: Math.random() < 0.3 ? `Description of a operation "${operationType}"...` : undefined,
    createdAt: createdAt,
    type: operationType,
    amount: Math.ceil(Math.random() * 10),
    category: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
  };
};

const CATEGORIES: Category[] = [
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
