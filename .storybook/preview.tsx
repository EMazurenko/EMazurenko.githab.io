import type { Preview, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React, { FC } from 'react';

const routerDecorator: FC<StoryFn> = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [routerDecorator],
};

export default preview;
