import DatabaseService from '../DatabaseService';
import { AccountType } from 'src/entities/account/model/types';
import DataSource from '../DataSource';

describe('DatabaseService', () => {
  let databaseService: DatabaseService;

  beforeAll(() => {
    databaseService = new DatabaseService(new DataSource());
  });

  it('should error on findAccountDiscount', () => {
    expect(() => {
      databaseService.findAccountDiscount(AccountType.STANDARD);
    }).toThrow();
  });

  it('should error on findCategoryDiscount', () => {
    expect(() => {
      databaseService.findCategoryDiscount(AccountType.STANDARD, 'some category id');
    }).toThrow();
  });
});
