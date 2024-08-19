import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render a component', () => {
    render(<Header />);
  });
});
