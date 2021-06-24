import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Counter from './Counter';

test('renders learn react link', async () => {
  const { getByTestId, getByText } = render(<Counter />);

  expect(getByTestId('display-count').textContent).toBe('點了0下');

  const addButton = getByText('點我加1');
  fireEvent.click(addButton);
  expect(getByTestId('display-count').textContent).toBe('點了1下');

  fireEvent.click(addButton);
  expect(getByTestId('display-count').textContent).toBe('點了2下');
});
