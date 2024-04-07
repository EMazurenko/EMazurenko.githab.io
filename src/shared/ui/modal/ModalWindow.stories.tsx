import React from 'react';
import { ModalWindow, ModalWindowProps } from './ModalWindow';

export default {
  title: 'UI/Modal window',
  component: ModalWindow,
  argTypes: {
    visible: {
      type: 'boolean',
      description: 'Признак видимости',
    },
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

const Template = ({ title, visible, children }: ModalWindowProps) => (
  <ModalWindow title={title} visible={visible}>
    {children}
  </ModalWindow>
);

export const Default = Template.bind({});
const defaultArgs: ModalWindowProps = {
  visible: true,
  title: 'Modal window title',
  children: 'Modal window content',
};
Default.args = defaultArgs;
