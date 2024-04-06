import { ProductCard } from './ProductCard';

export default {
  title: 'UI/Shop/Product card',
  component: ProductCard,
  argTypes: {
    type: {
      type: 'string',
      description: 'Тип карточки',
      defaultValue: 'Short',
      options: ['Short', 'InCart', 'Full'],
      control: {
        type: 'radio',
      },
    },
    category: {
      type: 'string',
      description: 'Категория товара',
    },
    title: {
      type: 'string',
      description: 'Наименование товара',
    },
    description: {
      type: 'string',
      description: 'Описание товара',
    },
  },
};

const Template = (args) => <ProductCard {...args} />;

export const Full = Template.bind({});
Full.args = {
  type: 'Full',
};

export const Short = Template.bind({});
Short.args = {
  type: 'Short',
};

export const InCart = Template.bind({});
InCart.args = {
  type: 'InCart',
};
