import React, { useState, useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter';

import '../../css/layoutEffect.css'

export const LayoutEffect = () => {

  const { state, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ state }`);
  const { quote } = !!data && data[0] 
  // console.log(data);
  
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <>
      <h1>LayoutEffect Hook</h1>
      <hr/>
      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">{ quote }</p>
      </blockquote>

      <pre>
        { JSON.stringify(boxSize, null, 2) }
      </pre>

      <button 
        className="btn btn-primary" 
        onClick={ () => increment(1) }>
        Siguiente quote
      </button>
    </>
  )
}
