export enum AccountType {
  STANDARD,
  PREMIUM,
  GOLD,
  FREE,
}

export interface Account {
  accountType: AccountType;
}
