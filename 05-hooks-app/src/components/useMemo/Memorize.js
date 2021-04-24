import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounterToUF.js'
import { Small } from './Small.js';

export const Memorize = () => {

  const { state, increment } = useCounter(1);
  const [ show, setShow ] = useState(true);

  return (
    <div>
      <h1>Counter <Small value={ state } /></h1>
      <hr/>
      <button className="btn btn-primary" onClick={ increment }> +1 </button>
      <button className="btn btn-warning" onClick={ () => setShow(!show) }> Show / Hide { JSON.stringify(show) } </button>
    </div>
  )
}
