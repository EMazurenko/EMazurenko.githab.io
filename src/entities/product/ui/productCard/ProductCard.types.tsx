export type ProductCardContainerProps = {
  type: 'Short' | 'Full' | 'InCart';
} & Partial<ProductCardProps>;

export type ProductCardProps = {
  className?: string;
  category?: string;
  title: string;
  description: string;
  price: number;
  initCountItems: number;
  onChangeCountItems?: (count: number) => void;
  photo_url: string | string[];
};
