import React from 'react';
import { ModalWindow, ModalWindowProps } from './ModalWindow';

export default {
  title: 'UI Kit/Modal window/Window',
  component: ModalWindow,
  argTypes: {
    children: {
      type: 'string',
      decription: 'Содержимое модального окна',
      name: 'content',
    },
    title: {
      type: 'string',
      decription: 'Заголовок модального окна',
    },
  },
};

const Template = ({ title, children }: ModalWindowProps) => <ModalWindow title={title}>{children}</ModalWindow>;

export const Default = Template.bind({});
const defaultArgs: ModalWindowProps = {
  title: 'Modal window title',
  children: 'Modal window content',
};
Default.args = defaultArgs;
