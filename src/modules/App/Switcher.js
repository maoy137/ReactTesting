import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import { Path } from '~~routes';

const Switcher = () => {
  const history = useHistory();

  const handleGoToHome = () => {
    history.push(Path.HOME);
  };

  const handleGoToCounter = () => {
    history.push(Path.COUNTER);
  };

  const handleGoToForm = () => {
    history.push(Path.FORM);
  };

  return (
    <div className="App-switch">
      <button
        className="Switch-btn"
        data-testid="switch-home"
        type="button"
        onClick={handleGoToHome}
      >
        Home
      </button>
      <button
        className="Switch-btn"
        data-testid="switch-counter"
        type="button"
        onClick={handleGoToCounter}
      >
        Counter
      </button>
      <button
        className="Switch-btn"
        data-testid="switch-form"
        type="button"
        onClick={handleGoToForm}
      >
        Form
      </button>
    </div>
  );
};

export default Switcher;
