import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <span>輸入名字</span>
      <input
        data-testid="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <span data-testid="display-name">{`我的名字是${name}`}</span>
    </div>
  );
};

export default Form;
