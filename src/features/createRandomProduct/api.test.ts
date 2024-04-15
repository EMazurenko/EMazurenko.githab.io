import { createRandomProduct } from 'src/features/createRandomProduct/api';

describe('all', () => {
  it('createRandomProduct', () => {
    const createdAt = '2023-06-06T12:06:56.957Z';
    const product = createRandomProduct(createdAt);
    expect(product).toHaveProperty('createdAt', createdAt);
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('photo');
    expect(product).toHaveProperty('desc');
    expect(product).toHaveProperty('createdAt');
    expect(product).toHaveProperty('oldPrice');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('category');
  });
});
