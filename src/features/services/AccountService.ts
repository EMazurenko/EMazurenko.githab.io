import { AccountType, Profile } from 'src/entities/profile/model/types';
import DatabaseService from 'src/features/services/DatabaseService';
import { Product } from 'src/entities/product/model/types';

class AccountService {
  private readonly accType: AccountType;
  private readonly databaseService: DatabaseService;
  private accDiscount: number = undefined;

  constructor({ accountType }: Profile, databaseService: DatabaseService) {
    this.accType = accountType;
    this.databaseService = databaseService;
  }

  calcDiscountedPrice({ price, category }: Pick<Product, 'price' | 'category'>) {
    this.lazyInitAccDiscount();
    const catDiscount = this.databaseService.findCategoryDiscount(this.accType, category.id);

    return (price * Math.max(100 - (this.accDiscount + catDiscount), 0)) / 100;
  }

  private lazyInitAccDiscount() {
    if (this.accDiscount === undefined) {
      this.accDiscount = this.databaseService.findAccountDiscount(this.accType);
    }
  }
}

export default AccountService;
