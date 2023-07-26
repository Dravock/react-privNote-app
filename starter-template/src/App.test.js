import { render, screen } from '@testing-library/react';
import AppS from './AppS';

test('renders learn react link', () => {
  render(<AppS />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
