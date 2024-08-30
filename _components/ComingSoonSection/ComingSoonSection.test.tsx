import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import ComingSoonSection from './ComingSoonSection';

describe('ComingSoonSection', () => {
  const messages = require('./../../i18n/messages/en.json');

  it('should render a component', () => {
    render(
      <NextIntlClientProvider messages={messages} locale="en">
        <ComingSoonSection />
      </NextIntlClientProvider>,
    );
  });
});
