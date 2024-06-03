import { AccountType } from 'src/entities/profile/model/types';
import DataSource from 'src/features/services/DataSource';

class DatabaseService {
  private readonly dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  findAccountDiscount(accountType: AccountType) {
    return Math.max(this.dataSource.findAccountDiscount(accountType) || 0, 0);
  }

  findCategoryDiscount(accountType: AccountType, categoryId: string) {
    return Math.max(this.dataSource.findCategoryDiscount(accountType, categoryId) || 0, 0);
  }
}

export default DatabaseService;
