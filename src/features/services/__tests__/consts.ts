import { Category } from 'src/entities/category/model/types';

export const CAR_CATEGORY: Category = { id: '1', name: 'Car' };
export const TOY_CATEGORY: Category = { id: '2', name: 'Toy' };
export const FOOD_CATEGORY: Category = { id: '3', name: 'Food' };

describe('Const', () => {
  it('Fix error "no test file in __test__"', () => {
    expect(true).toBeTruthy();
  });
});
