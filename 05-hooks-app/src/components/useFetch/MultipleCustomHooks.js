import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

  const { state, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ state }`);
  const { author, quote } = !!data && data[0] 
  // console.log(data);
  
  return (
    <>
      <h1>BreakingBard Quotes</h1>
      <hr/>
      {
        loading
        ? 
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
        : 
          (
            <blockquote className="blockquote text-right">
              <p className="mb-0">{ quote }</p>
              <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
          )
      }

      <button 
        className="btn btn-primary" 
        onClick={ () => increment(1) }>
        Siguiente quote
      </button>
    </>
  )
}
