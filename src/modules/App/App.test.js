import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('~~static/logo.svg', () => ({}));
jest.mock('./App.css', () => ({}));

describe('test app', () => {
  test('renders learn react link', async () => {
    render(<App />);

    await waitFor(() => {
      const linkElement = screen.getByText('WiDemo');
      expect(linkElement).toBeInTheDocument();
    });

    await waitFor(() => {
      const linkElement = screen.getByTestId('title-home');
      expect(linkElement).toBeInTheDocument();
    });
    // screen.debug();
  });

  test('switch to home', async () => {
    render(<App />);
    await waitFor(() => {
      const switchHome = screen.getByTestId('switch-home');
      fireEvent.click(switchHome);
      const home = screen.getByTestId('title-home');
      expect(home).toBeInTheDocument();
    });
  });

  test('switch to counter', async () => {
    render(<App />);
    await waitFor(() => {
      const switchCounter = screen.getByTestId('switch-counter');
      fireEvent.click(switchCounter);
      const counter = screen.getByTestId('title-counter');
      expect(counter).toBeInTheDocument();
    });
  });

  test('switch to form', async () => {
    render(<App />);
    await waitFor(() => {
      const switchForm = screen.getByTestId('switch-form');
      fireEvent.click(switchForm);
      const form = screen.getByTestId('title-form');
      expect(form).toBeInTheDocument();
    });
  });
});
