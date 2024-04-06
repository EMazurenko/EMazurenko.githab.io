import { Logo } from './Logo';

export default {
  title: 'UI/Logo',
  component: Logo,
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер логотипа',
      defaultValue: 'small',
      options: ['small', 'medium'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args) => <Logo {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};
