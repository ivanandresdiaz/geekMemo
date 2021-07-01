import React, { useState } from 'react';
import Small from './Small';

const Memorize = () => {
  const [counter, setCounter] = useState(10);
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>
        Counter:
        <Small value={counter} />
      </h1>
      <button type='button' onClick={() => setCounter(counter + 1)}>Add 1</button>
      <button type='button' onClick={() => setCounter(10)}>Reset</button>
      <button type='button' onClick={() => setCounter(counter - 1)}>substract 1</button>
      <button type='button' onClick={() => setShow(!show)}>Show/Hide</button>
    </div>
  );
};

export default Memorize;
