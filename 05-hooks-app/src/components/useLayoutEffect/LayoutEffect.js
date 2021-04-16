import React, { useLayoutEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter';

import '../../css/layoutEffect.css'

export const LayoutEffect = () => {

  const { state, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ state }`);
  const { author, quote } = !!data && data[0] 
  // console.log(data);
  
  useLayoutEffect(() => {
    console.log('Hey!')
  }, [quote])

  return (
    <>
      <h1>LayoutEffect Hook</h1>
      <hr/>
      <blockquote className="blockquote text-right">
        <p className="mb-0">{ quote }</p>
      </blockquote>

      <button 
        className="btn btn-primary" 
        onClick={ () => increment(1) }>
        Siguiente quote
      </button>
    </>
  )
}
