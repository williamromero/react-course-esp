import React from 'react'
import useCounter from '../../hooks/useCounter'

const CounterWCHook = () => {

  const {state, increment, reset, decrement } = useCounter(20);

  return (
    <>
      <h1>Counter with Hook: {state} </h1>
      <hr/>
      <button onClick={ () => increment(2) } className="btn btn btn-primary" style={{ marginRight: "1em" }}> +1 </button>
      <button onClick={ reset } className="btn btn btn-primary" style={{ marginRight: "1em" }}> Reset </button>      
      <button onClick={ () => decrement() } className="btn btn btn-primary" > -1 </button>
    </>
  )
}

export default CounterWCHook
