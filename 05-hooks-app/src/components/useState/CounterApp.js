import React, { useState } from 'react'

export default function CounterApp() {

  const [counter, setCounter] = useState({
    counter01: 10,
    counter02: 20,
    counter03: 30,
    counter04: 40,
  })

  // const { counter01:c1 } = counter;
  // const [ counter01, counter02 ] = counter;
  
  return (
    <>
      <div className="content">
        <div className="content-counter__values">
          <h1> Counter 01 {counter.counter01} </h1>
          <h1> Counter 02 {counter.counter02} </h1>  
          <button 
            className="btn btn-primary" 
            onClick={ () => setCounter(
              { 
                ...counter,
                counter01: counter.counter01 + 1,
                // counter01: c1 + 1,
              }) 
            }>Sumar</button>
        </div>
      </div>
    </>
  )
}
