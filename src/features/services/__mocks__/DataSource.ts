import { AccountType } from 'src/entities/profile/model/types';

type AccountDiscountType = {
  type: AccountType;
  value: number;
};

class DataSource {
  private static readonly ACCOUNT_DISCOUNTS: AccountDiscountType[] = [
    { type: AccountType.STANDARD, value: 0 },
    { type: AccountType.PREMIUM, value: 30 },
    { type: AccountType.GOLD, value: 70 },
    { type: AccountType.FREE, value: 100 },
  ];

  private static readonly CATEGORY_AND_ACCOUNT_DISCOUNTS = [
    {
      category: { id: '1', name: 'Car' },
      accountDiscounts: [
        { type: AccountType.STANDARD, value: 0 },
        { type: AccountType.PREMIUM, value: 0 },
        { type: AccountType.GOLD, value: 40 },
        { type: AccountType.FREE, value: 0 },
      ],
    },
    {
      category: { id: '2', name: 'Toy' },
      accountDiscounts: [
        { type: AccountType.STANDARD, value: 10 },
        { type: AccountType.PREMIUM, value: 10 },
        { type: AccountType.GOLD, value: 30 },
        { type: AccountType.FREE, value: -50 },
      ],
    },
    {
      category: { id: '3', name: 'Food' },
      accountDiscounts: [
        { type: AccountType.STANDARD, value: 15 },
        { type: AccountType.PREMIUM, value: 10 },
        { type: AccountType.GOLD, value: 20 },
      ],
    },
  ];

  findAccountDiscount(accountType: AccountType) {
    return this.findAccountDiscountInCollection(DataSource.ACCOUNT_DISCOUNTS, accountType);
  }

  findCategoryDiscount(accountType: AccountType, categoryId: string) {
    return this.findAccountDiscountInCollection(
      DataSource.CATEGORY_AND_ACCOUNT_DISCOUNTS.filter((discount) => discount.category.id === categoryId)[0]
        ?.accountDiscounts,
      accountType
    );
  }

  private findAccountDiscountInCollection(accountDiscounts: AccountDiscountType[], accountType: AccountType) {
    return accountDiscounts?.filter((discount) => discount.type === accountType)[0]?.value;
  }
}

export default DataSource;
