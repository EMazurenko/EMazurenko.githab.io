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
  photo_url: string | string[];
  onSetNewCountItem: (newCountItem: number) => void;
};
