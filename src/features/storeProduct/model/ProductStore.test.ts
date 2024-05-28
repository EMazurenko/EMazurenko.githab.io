import ProductStore from './ProductStore';
import { createRandomProduct } from 'src/features/createRandomProduct/api';

const productCreator = createRandomProduct;

describe('ProductStore', () => {
  it('should save product', () => {
    const product = productCreator('now');
    ProductStore.save(product);

    expect(ProductStore.list()[0].id).toBe(product.id);
  });

  it('should undefined on not exists id', () => {
    const notExistsProductId = 'NOT_EXISTS';

    expect(ProductStore.getById(notExistsProductId)).toBeUndefined();
  });
});
