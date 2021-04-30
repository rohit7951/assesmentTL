import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cards/i);
  expect(linkElement).toBeInTheDocument();
});
