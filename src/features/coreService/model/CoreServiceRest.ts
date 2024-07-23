import { ProfileService, ProfileServiceRest, ProfileAuthOutput } from 'src/features/manageProfile/model/profileService';
import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import { ErrorCode, Order, ServerErrors } from 'src/features/coreService/model/types';
import { CoreService } from 'src/features/coreService/model/CoreService';
import i18next from 'i18next';
import { Category } from 'src/entities/category/model/types';
import { ProductLoadOutput } from 'src/features/manageProduct/model/productService/ProductService';
import { Product } from 'src/entities/product/model/types';
import { OrderInput } from 'src/features/orderProducts/model/orderService';
import { ProductServiceRest } from 'src/features/manageProduct/model/productService';
import { OrderServiceRest } from 'src/features/orderProducts/model/orderService/OrderServiceRest';

export class CoreServiceRest implements CoreService {
  private readonly profileService: ProfileService;
  private readonly productService: ProductServiceRest;
  private readonly orderService: OrderServiceRest;
  private readonly serverUrl: string;
  private readonly commandId: string;

  constructor(serverUrl: string, commandId: string) {
    this.serverUrl = serverUrl;
    this.commandId = commandId;
    this.profileService = new ProfileServiceRest(serverUrl, commandId);
    this.productService = new ProductServiceRest(serverUrl, commandId);
    this.orderService = new OrderServiceRest(serverUrl, commandId);
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
    this.productService.setToken(authResult.token);
    this.orderService.setToken(authResult.token);
    return Promise.resolve(authResult);
  }

  updateProfile(profile: Profile): Promise<Profile> {
    return this.profileService.update(profile).catch((reason) => this.processReason(reason));
  }

  getCategories(): Promise<Category[]> {
    return this.productService.getCategories().catch((reason) => this.processReason(reason));
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

  order(input: OrderInput): Promise<Order> {
    return this.orderService.order(input).catch((reason) => this.processReason(reason));
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
