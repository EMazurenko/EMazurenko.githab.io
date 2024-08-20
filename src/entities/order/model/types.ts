import { Product } from 'src/entities/product/model/types';

export enum OrderStatus {
  PendingConfirmation = 'pending_confirmation',
  Processing = 'processing',
  Packaging = 'packaging',
  WaitingForDelivery = 'waiting_for_delivery',
  InTransit = 'in_transit',
  Delivered = 'delivered',
  ReturnRequested = 'return_requested',
  OrderCancelled = 'order_cancelled',
}

export type Order = {
  id: string;
  products: OrderProduct[];
  status: OrderStatus;
  createdAt: string;
};

export type OrderProduct = {
  product: Product;
  quantity: number;
};
