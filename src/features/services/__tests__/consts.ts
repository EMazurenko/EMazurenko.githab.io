import { AccountType } from 'src/entities/profile/model/types';
import { Category } from 'src/entities/category/model/types';

export const CAR_CATEGORY: Category = { id: '1', name: 'Car' };
export const TOY_CATEGORY: Category = { id: '2', name: 'Toy' };
export const FOOD_CATEGORY: Category = { id: '3', name: 'Food' };

export const CATEGORIES = [CAR_CATEGORY, TOY_CATEGORY, FOOD_CATEGORY];
export const ACCOUNT_TYPES = [AccountType.STANDARD, AccountType.PREMIUM, AccountType.GOLD, AccountType.FREE];
