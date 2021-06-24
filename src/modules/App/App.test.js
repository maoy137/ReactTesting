import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

jest.mock('~~static/logo.svg', () => ({}));
jest.mock('./App.css', () => ({}));

test('renders learn react link', async () => {
  render(<App />);

  await waitFor(() => {
    const linkElement = screen.getByText('WiDemo');
    expect(linkElement).toBeInTheDocument();
  });

  await waitFor(() => {
    const linkElement = screen.getByText('Home');
    expect(linkElement).toBeInTheDocument();
  });
  // screen.debug();
});
