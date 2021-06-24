import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div data-testid="title-counter">Counter</div>
      <span data-testid="display-count">
        {`點了${count}下`}
      </span>
      <br />
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        點我加1
      </button>
    </div>
  );
};

export default Counter;
