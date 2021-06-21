import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      <div>Home</div>
      <div>{pathname}</div>
    </div>
  );
};

export default Home;
