import React, { useState } from 'react';
import Small from './Small';
import useCounter from '../hook/useCounter';

const Memorize = () => {
  const [show, setShow] = useState(true);
  const { counter, increment, decrement, reset } = useCounter(100);
  return (
    <div>
      <h1>
        Counter:
        <Small value={counter} show={show} />
      </h1>
      <button type='button' onClick={() => increment()}>Add 1</button>
      <button type='button' onClick={() => reset()}>Reset</button>
      <button type='button' onClick={() => decrement()}>substract 1</button>
      <button type='button' onClick={() => setShow(!show)}>Show/Hide</button>
    </div>
  );
};

export default Memorize;
