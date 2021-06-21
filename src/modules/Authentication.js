import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Path } from '~~routes';

const Authentication = (props) => {
  const { children } = props;
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if (pathname === '/') {
      history.push(Path.HOME);
    }
  }, []);

  return children;
};

export default Authentication;
