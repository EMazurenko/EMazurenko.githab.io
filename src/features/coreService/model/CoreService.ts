import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import { ProfileAuthOutput } from 'src/features/manageProfile/model/profileService/ProfileService';
import { Category } from 'src/entities/category/model/types';
import { ProductLoadOutput } from 'src/features/manageProduct/model/productService/ProductService';
import { Product } from 'src/entities/product/model/types';
import { ChangeStatus, OrderInput } from 'src/features/orderProducts/model/orderService';
import { Order } from 'src/entities/order/model/types';

export interface CoreService {
  setToken: (token: string) => void;
  addProfile: (email: string, password: string, role?: ProfileRole) => Promise<ProfileAuthOutput>;
  updateProfile: (profile: Profile) => Promise<Profile>;
  checkProfile: (email: string, password: string) => Promise<ProfileAuthOutput>;
  getProfile: () => Promise<Profile>;
  initLoadProducts(): Promise<ProductLoadOutput>;
  loadMoreProducts(): Promise<ProductLoadOutput>;
  createProduct(product: Product): Promise<Product>;
  editProduct(product: Product): Promise<Product>;
  getCategories(): Promise<Category[]>;
  createCategory(category: Category): Promise<Category>;
  editCategory(category: Category): Promise<Category>;
  createOrder(input: OrderInput): Promise<Order>;
  changeOrderStatus(input: ChangeStatus): Promise<Order>;
  getOrders(): Promise<Order[]>;
}
