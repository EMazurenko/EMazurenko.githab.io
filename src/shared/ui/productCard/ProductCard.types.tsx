export type ProductCardContainerProps = {
  type: 'Short' | 'Full' | 'InCart';
} & Partial<ProductCardProps>;

export type ProductCardProps = {
  category?: string;
  title: string;
  description: string;
  price: number;
  initCountItems: number;
  photo_url: string | string[];
  handlerCountItem: (newCountItem: number) => void;
};

export type InCartProductCardProps = Omit<ProductCardProps, 'price' | 'description'> & { sum: number };
