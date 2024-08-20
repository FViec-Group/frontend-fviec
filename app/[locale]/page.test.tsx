import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import Page from './page';

describe('Page', () => {
  const messages = require('./../../i18n/messages/en.json');

  it('should render page component', () => {
    render(
      <NextIntlClientProvider messages={messages} locale="en">
        <Page />
      </NextIntlClientProvider>,
    );
  });
});
