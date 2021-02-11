import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../index.css';

const CounterApp = ({ value = 10 }) => {
  const [ counter, setCounter ] = useState(value)

  const handleAdd = (e) => setCounter(counter + 1);
  const handleReset = (e) => setCounter(value); 
  const handleSubs = (e) => setCounter(counter - 1);  

  return (
    <>
      <div>
        <div>
          <h1>Counter App</h1>
          <h2>{ counter }</h2>
        </div>
        <div className="btnsBox">
          <button onClick={ handleSubs }>-1</button>
          <button onClick={ handleReset }>Reset</button>
          <button onClick={ handleAdd }>+1</button>
        </div>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp;
