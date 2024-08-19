import React from 'react';
import { render } from '@testing-library/react';
import AboutUsPage from './page';

describe('AboutUsPage', () => {
  it('should render AboutUsPage without crashing', () => {
    render(<AboutUsPage />);
  });
});
