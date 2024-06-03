export enum AccountType {
  STANDARD,
  PREMIUM,
  GOLD,
  FREE,
}

export interface Profile {
  accountType: AccountType;
}
