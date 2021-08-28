import { render, screen } from '@testing-library/react';
import App from './App';

// TODO proper test suits
test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
