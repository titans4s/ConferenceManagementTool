import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders conference management tool link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/conference management tool/i);
  expect(linkElement).toBeInTheDocument();
});
