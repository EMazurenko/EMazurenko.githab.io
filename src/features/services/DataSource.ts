import { AccountType } from 'src/entities/account/model/types';

class DataSource {
  findAccountDiscount(accountType: AccountType): number {
    throw new Error('Метод findAccountDiscount не реализован');
  }

  findCategoryDiscount(accountType: AccountType, categoryId: string): number {
    throw new Error('Метод findCategoryDiscount не реализован');
  }
}

export default DataSource;
