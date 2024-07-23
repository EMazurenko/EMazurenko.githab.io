import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import { ProfileAuthOutput } from 'src/features/manageProfile/model/profileService/ProfileService';
import { Category } from 'src/entities/category/model/types';
import { ProductLoadOutput } from 'src/features/manageProduct/model/productService/ProductService';
import { Product } from 'src/entities/product/model/types';
import { Order } from 'src/features/coreService/model/types';
import { OrderInput } from 'src/features/orderProducts/model/orderService';

export interface CoreService {
  addProfile: (email: string, password: string, role?: ProfileRole) => Promise<ProfileAuthOutput>;
  updateProfile: (profile: Profile) => Promise<Profile>;
  checkProfile: (email: string, password: string) => Promise<ProfileAuthOutput>;
  initLoadProducts(): Promise<ProductLoadOutput>;
  loadMoreProducts(): Promise<ProductLoadOutput>;
  getCategories(): Promise<Category[]>;
  createProduct(product: Product): Promise<Product>;
  editProduct(product: Product): Promise<Product>;
  order(input: OrderInput): Promise<Order>;
}
