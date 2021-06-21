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

const successFunc = (callback, value) => {
  if (value > 0) {
    callback.onSuccess(value);
  } else {
    throw new Error('error');
  }
};

test('test callback to be called', () => {
  const callback = {
    onSuccess: jest.fn(),
  };
  successFunc(callback, 1);
  expect(callback.onSuccess).toHaveBeenCalledWith(1);

  const callError = () => {
    successFunc(callback, -1);
  };

  expect(callError).toThrowError('error');
});
