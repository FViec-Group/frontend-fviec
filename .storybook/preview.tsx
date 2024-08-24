import type { Preview } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';
import messagesEn from './../i18n/messages/en.json';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messagesEn}>
        {Story()}
      </NextIntlClientProvider>
    ),
  ],
};

export default preview;
