import React, { useEffect, useState } from 'react';
import { getRandomUser } from '~~apis/ApiService';

const Home = () => {
  const [data, setData] = useState();

  const fetchUser = async () => {
    try {
      const response = await getRandomUser();
      // console.log(response);
      setData(response);
    } catch (err) {
      console.log('fetch failed', err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const renderUser = (element, index) => (
    <div key={'user'.concat(index)}>
      <div data-testid={`home-gender-${index}`}>{`gender: ${element.gender}`}</div>
      <div data-testid={`home-name-${index}`}>{`name: ${element.name.title} ${element.name.first} ${element.name.last}`}</div>
      <div data-testid={`home-email-${index}`}>{`email: ${element.email}`}</div>
      <div data-testid={`home-phone-${index}`}>{`phone: ${element.phone}`}</div>
    </div>
  );

  return (
    <div>
      <div data-testid="title-home">Home</div>
      {
        data ? (
          <div>
            <div data-testid="home-seed">{`seed: ${data.info.seed}`}</div>
            {data.results.map((element, index) => renderUser(element, index))}
          </div>
        ) : null
      }
    </div>
  );
};

export default Home;
