import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Form from './Form';

test('renders learn react link', async () => {
  const { getByTestId } = render(<Form />);

  const nameInput = getByTestId('name-input');
  fireEvent.change(nameInput, { target: { value: 'Wendy' } });
  expect(getByTestId('display-name').textContent).toBe('我的名字是Wendy');
});
