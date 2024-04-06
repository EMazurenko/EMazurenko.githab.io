import { ModalWindow } from './ModalWindow';

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

const Template = (args) => <ModalWindow {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  title: 'Modal window title',
  children: 'Modal window content',
};
