import DatabaseService from '../DatabaseService';
import DataSource from '../DataSource';
import { ACCOUNT_TYPES, CATEGORIES } from './consts';

jest.mock('../DataSource');

describe('DatabaseServiceMock', () => {
  let databaseService: DatabaseService;

  beforeAll(() => {
    databaseService = new DatabaseService(new DataSource());
  });

  it('should account discounts equals snapshot', () => {
    const discounts = [];
    for (const acc of ACCOUNT_TYPES) {
      discounts.push({
        type: acc,
        value: databaseService.findAccountDiscount(acc),
      });
    }
    expect(discounts).toMatchSnapshot();
  });

  it('should category and account discounts equals snapshot', () => {
    const discounts = [];
    for (const cat of CATEGORIES) {
      for (const acc of ACCOUNT_TYPES)
        discounts.push({
          catId: cat.id,
          accType: acc,
          value: databaseService.findCategoryDiscount(acc, cat.id),
        });
    }
    expect(discounts).toMatchSnapshot();
  });
});
