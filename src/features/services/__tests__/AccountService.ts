import { Product } from 'src/entities/product/model/types';
import { CAR_CATEGORY, FOOD_CATEGORY, TOY_CATEGORY } from './consts';
import { Category } from 'src/entities/category/model/types';
import DatabaseService from '../DatabaseService';
import DataSource from '../DataSource';
import AccountService from 'src/features/services/AccountService';
import { AccountType, Profile } from 'src/entities/profile/model/types';

jest.mock('../DataSource');

const EMPTY_CATEGORY: Category = { id: 'empty', name: 'empty' };

describe('AccountService', () => {
  let profile: Profile;
  let product: Pick<Product, 'id' | 'name' | 'price' | 'category'>;
  let databaseService: DatabaseService;

  beforeAll(() => {
    databaseService = new DatabaseService(new DataSource());
  });

  beforeEach(() => {
    product = {
      id: '1',
      name: 'Тестовый продукт',
      price: 100,
      category: EMPTY_CATEGORY,
    };

    profile = {} as Profile;
  });

  it('should no discount', () => {
    product.category = CAR_CATEGORY;
    profile.accountType = AccountType.STANDARD;
    const accountService = new AccountService(profile, databaseService);

    expect(accountService.calcDiscountedPrice(product)).toBe(product.price);
  });

  it('should empty account discount on category', () => {
    product.category = FOOD_CATEGORY;
    profile.accountType = AccountType.FREE;
    const accountService = new AccountService(profile, databaseService);

    expect(accountService.calcDiscountedPrice(product)).toBe(0);
  });

  it('should only category discount', () => {
    product.category = TOY_CATEGORY;
    profile.accountType = AccountType.STANDARD;
    const accountService = new AccountService(profile, databaseService);

    expect(accountService.calcDiscountedPrice(product)).toBe(90);
  });

  it('should only account discount', () => {
    product.category = CAR_CATEGORY;
    profile.accountType = AccountType.PREMIUM;
    const accountService = new AccountService(profile, databaseService);

    expect(accountService.calcDiscountedPrice(product)).toBe(70);
  });

  it('should not negative discount', () => {
    product.category = TOY_CATEGORY;
    profile.accountType = AccountType.FREE;
    const accountService = new AccountService(profile, databaseService);

    expect(accountService.calcDiscountedPrice(product)).toBe(0);
  });

  it('should both type discount', () => {
    product.category = TOY_CATEGORY;
    profile.accountType = AccountType.PREMIUM;
    const accountService = new AccountService(profile, databaseService);

    expect(accountService.calcDiscountedPrice(product)).toBe(60);
  });

  it('should free on more then 100% discount', () => {
    product.category = CAR_CATEGORY;
    profile.accountType = AccountType.GOLD;
    const accountService = new AccountService(profile, databaseService);

    expect(accountService.calcDiscountedPrice(product)).toBe(0);
  });
});
