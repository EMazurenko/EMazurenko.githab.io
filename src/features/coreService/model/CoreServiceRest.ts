import { ProfileServiceRest, ProfileAuthOutput } from 'src/features/manageProfile/model/profileService';
import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import { ErrorCode, ServerErrors } from 'src/features/coreService/model/types';
import { CoreService } from 'src/features/coreService/model/CoreService';
import i18next from 'i18next';
import { Category } from 'src/entities/category/model/types';
import { ProductLoadOutput } from 'src/features/manageProduct/model/productService/ProductService';
import { Product } from 'src/entities/product/model/types';
import { ChangeStatus, OrderInput } from 'src/features/orderProducts/model/orderService';
import { ProductServiceRest } from 'src/features/manageProduct/model/productService';
import { OrderServiceRest } from 'src/features/orderProducts/model/orderService/OrderServiceRest';
import { CategoryServiceRest } from 'src/features/manageCategory/model/categoryService';
import { Order } from 'src/entities/order/model/types';

export class CoreServiceRest implements CoreService {
  private readonly profileService: ProfileServiceRest;
  private readonly productService: ProductServiceRest;
  private readonly orderService: OrderServiceRest;
  private readonly categoryService: CategoryServiceRest;
  private readonly serverUrl: string;
  private readonly commandId: string;

  constructor(serverUrl: string, commandId: string) {
    this.serverUrl = serverUrl;
    this.commandId = commandId;
    this.profileService = new ProfileServiceRest(serverUrl, commandId);
    this.productService = new ProductServiceRest(serverUrl, commandId);
    this.orderService = new OrderServiceRest(serverUrl, commandId);
    this.categoryService = new CategoryServiceRest(serverUrl, commandId);
  }

  setToken(token: string): void {
    this.productService.setToken(token);
    this.orderService.setToken(token);
    this.profileService.setToken(token);
    this.categoryService.setToken(token);
  }

  addProfile(email: string, password: string, role: ProfileRole | undefined): Promise<ProfileAuthOutput> {
    return this.profileService
      .add(email, password)
      .then((authResult) => this.saveToken(authResult))
      .catch((reason) => this.processReason(reason));
  }

  checkProfile(email: string, password: string): Promise<ProfileAuthOutput> {
    return this.profileService
      .check(email, password)
      .then((authResult) => this.saveToken(authResult))
      .catch((reason) => this.processReason(reason));
  }

  private saveToken(authResult: ProfileAuthOutput): Promise<ProfileAuthOutput> {
    this.setToken(authResult.token);
    return Promise.resolve(authResult);
  }

  updateProfile(profile: Profile): Promise<Profile> {
    return this.profileService.update(profile).catch((reason) => this.processReason(reason));
  }

  getProfile(): Promise<Profile> {
    return this.profileService.get().catch((reason) => this.processReason(reason));
  }

  getCategories(): Promise<Category[]> {
    return this.categoryService.getCategories().catch((reason) => this.processReason(reason));
  }

  createCategory(category: Category): Promise<Category> {
    return this.categoryService.create(category).catch((reason) => this.processReason(reason));
  }

  editCategory(category: Category): Promise<Category> {
    return this.categoryService.edit(category).catch((reason) => this.processReason(reason));
  }

  initLoadProducts(): Promise<ProductLoadOutput> {
    return this.productService.initLoad().catch((reason) => this.processReason(reason));
  }

  loadMoreProducts(): Promise<ProductLoadOutput> {
    return this.productService.loadMore().catch((reason) => this.processReason(reason));
  }

  createProduct(product: Product): Promise<Product> {
    return this.productService.create(product).catch((reason) => this.processReason(reason));
  }

  editProduct(product: Product): Promise<Product> {
    return this.productService.edit(product).catch((reason) => this.processReason(reason));
  }

  createOrder(input: OrderInput): Promise<Order> {
    return this.orderService.create(input).catch((reason) => this.processReason(reason));
  }

  changeOrderStatus(input: ChangeStatus): Promise<Order> {
    return this.orderService.changeStatus(input).catch((reason) => this.processReason(reason));
  }

  getOrders(): Promise<Order[]> {
    return this.orderService.getOrders().catch((reason) => this.processReason(reason));
  }

  private processReason(reason: Error | Promise<ServerErrors>): Promise<never> {
    if (reason instanceof Error) {
      return Promise.reject(reason);
    } else {
      return reason.then((errorList) => Promise.reject(new Error(this.processErrors(errorList))));
    }
  }

  private processErrors(errorResult: ServerErrors): string {
    if ('errors' in errorResult) {
      return errorResult.errors
        .reduce((error, e) => error + i18next.t(`server.${e.extensions.code}`, { ns: 'errors' }) + '\n', '')
        .trim();
    } else {
      return i18next.t(`server.${ErrorCode.ERR_UNKNOWN}`, { ns: 'errors' });
    }
  }
}
