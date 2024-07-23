import { CoreService } from 'src/features/coreService/model/CoreService';
import {
  ProfileAuthOutput,
  ProfileService,
  ProfileServiceInMemory,
} from 'src/features/manageProfile/model/profileService';
import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import { Category } from 'src/entities/category/model/types';
import { ProductLoadOutput, ProductService } from 'src/features/manageProduct/model/productService/ProductService';
import { ProductServiceInMemory } from 'src/features/manageProduct/model/productService';
import { Product } from 'src/entities/product/model/types';
import { OrderInput, OrderService, OrderServiceInMemory } from 'src/features/orderProducts/model/orderService';
import { Order } from 'src/features/coreService/model/types';

export class CoreServiceInMemory implements CoreService {
  private readonly profileService: ProfileService;
  private readonly productService: ProductService;
  private readonly orderService: OrderService;

  constructor() {
    this.profileService = new ProfileServiceInMemory();
    this.productService = new ProductServiceInMemory();
    this.orderService = new OrderServiceInMemory();
  }

  addProfile(email: string, password: string, role: ProfileRole | undefined): Promise<ProfileAuthOutput> {
    return this.profileService.add(email, password);
  }

  checkProfile(email: string, password: string): Promise<ProfileAuthOutput> {
    return this.profileService.check(email, password);
  }

  updateProfile(profile: Profile): Promise<Profile> {
    return this.profileService.update(profile);
  }

  getCategories(): Promise<Category[]> {
    return this.productService.getCategories();
  }

  initLoadProducts(): Promise<ProductLoadOutput> {
    return this.productService.initLoad();
  }

  loadMoreProducts(): Promise<ProductLoadOutput> {
    return this.productService.loadMore();
  }

  createProduct(product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  editProduct(product: Product): Promise<Product> {
    return this.productService.edit(product);
  }

  order(input: OrderInput): Promise<Order> {
    return this.orderService.order(input);
  }
}
