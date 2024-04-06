import { CloseButton } from './CloseButton';

export default {
  title: 'UI/Close button',
  component: CloseButton,
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер кнопки закрытия окна',
      defaultValue: 'small',
      options: ['small', 'large'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args) => <CloseButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
