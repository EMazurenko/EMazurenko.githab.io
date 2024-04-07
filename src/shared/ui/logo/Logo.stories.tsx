import React from 'react';
import { Logo, LogoProps } from './Logo';

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

const Template = (args: LogoProps) => <Logo {...args} />;

export const Small = Template.bind({});
const smallArgs = {
  size: 'small',
};
Small.args = smallArgs;

export const Medium = Template.bind({});
const mediumArgs = {
  size: 'medium',
};
Medium.args = mediumArgs;
