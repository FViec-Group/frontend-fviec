import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
  it('should render page component', () => {
    render(<Page />);

    expect(document.querySelector('main')).toBeInTheDocument();
  });
});
