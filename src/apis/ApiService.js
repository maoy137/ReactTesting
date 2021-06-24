const RANDOM_USER = 'https://randomuser.me/api/';

export const getRandomUser = async () => {
  const response = await fetch(RANDOM_USER);
  return response.json();
};
