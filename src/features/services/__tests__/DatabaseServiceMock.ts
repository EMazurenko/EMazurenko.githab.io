import DatabaseService from '../DatabaseService';
import DataSource from '../DataSource';
import { CAR_CATEGORY, FOOD_CATEGORY, TOY_CATEGORY } from './consts';
import { AccountType } from 'src/entities/profile/model/types';

jest.mock('../DataSource');

const ACCOUNT_TYPES = [AccountType.STANDARD, AccountType.PREMIUM, AccountType.GOLD, AccountType.FREE];
const CATEGORIES = [CAR_CATEGORY, TOY_CATEGORY, FOOD_CATEGORY];

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
