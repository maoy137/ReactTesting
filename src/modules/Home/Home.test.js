import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';

const fakeData = {
  results: [
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Benjamin',
        last: 'West',
      },
      location: {
        street: {
          number: 1516,
          name: 'Country Club Rd',
        },
        city: 'Hervey Bay',
        state: 'Western Australia',
        country: 'Australia',
        postcode: 3783,
        coordinates: {
          latitude: '-87.9387',
          longitude: '-128.5248',
        },
        timezone: {
          offset: '-12:00',
          description: 'Eniwetok, Kwajalein',
        },
      },
      email: 'benjamin.west@example.com',
      login: {
        uuid: '1f0227ea-1b0f-4612-b818-9df9d501d9ba',
        username: 'biglion639',
        password: 'kashmir',
        salt: 'hSb0xfk8',
        md5: '294496b60ef24d26bc10349c3a4e7642',
        sha1: '9002632235247bfccf87f06be387c06c867c268e',
        sha256: 'dd287f9f47eee744276c3e4bb1c70c6b5ce1d59d057b582d44ea8966be1aeddd',
      },
      dob: {
        date: '1988-09-17T08:45:07.368Z',
        age: 33,
      },
      registered: {
        date: '2019-07-15T16:31:17.635Z',
        age: 2,
      },
      phone: '08-3018-6768',
      cell: '0429-916-353',
      id: {
        name: 'TFN',
        value: '473403705',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/56.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/56.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/56.jpg',
      },
      nat: 'AU',
    },
  ],
  info: {
    seed: 'fe9e2694632a1418',
    results: 1,
    page: 1,
    version: '1.3',
  },
};

const mockRandomUser = jest.fn();

jest.mock('~~apis/ApiService', () => ({
  getRandomUser: () => mockRandomUser(),
}));

describe('test home', () => {
  test('test success', async () => {
    mockRandomUser.mockResolvedValue(fakeData);

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByTestId('home-seed')).toBeInTheDocument();
      expect(screen.getByTestId('home-seed').textContent).toBe('seed: fe9e2694632a1418');

      expect(screen.getByTestId('home-gender-0')).toBeInTheDocument();
      expect(screen.getByTestId('home-gender-0').textContent).toBe('gender: male');

      expect(screen.getByTestId('home-name-0')).toBeInTheDocument();
      expect(screen.getByTestId('home-name-0').textContent).toBe('name: Mr Benjamin West');

      expect(screen.getByTestId('home-email-0')).toBeInTheDocument();
      expect(screen.getByTestId('home-email-0').textContent).toBe('email: benjamin.west@example.com');

      expect(screen.getByTestId('home-phone-0')).toBeInTheDocument();
      expect(screen.getByTestId('home-phone-0').textContent).toBe('phone: 08-3018-6768');
    });
  });

  test('test fail', async () => {
    mockRandomUser.mockRejectedValue();

    const { queryAllByTestId } = render(<Home />);

    await waitFor(() => {
      const seed = queryAllByTestId('home-seed');
      expect(seed.length).toBe(0);

      const gender = queryAllByTestId('home-gender-0');
      expect(gender.length).toBe(0);

      const name = queryAllByTestId('home-name-0');
      expect(name.length).toBe(0);

      const email = queryAllByTestId('home-email-0');
      expect(email.length).toBe(0);

      const phone = queryAllByTestId('home-phone-0');
      expect(phone.length).toBe(0);
    });
  });
});
