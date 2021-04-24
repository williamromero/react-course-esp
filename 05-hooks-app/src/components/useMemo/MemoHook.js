import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounterToUF.js'

export const MemoHook = () => {

  const { state, increment } = useCounter( 500 );
  const [ show, setShow ] = useState(true);

  const higherProcess = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log('Ahí vamos...')
    }
    return `${iteraciones} iteraciones realizadas.`;
  }

  const memoProcesoPesado = useMemo(() => higherProcess( state ), [ state ])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter <small>{ state }</small></h3>
      <hr/>
      <p> { memoProcesoPesado }</p>
      <button className="btn btn-primary" onClick={ increment }> +1 </button>
      <button className="btn btn-warning" style={{ marginLeft: "1em" }} onClick={ () => setShow(!show) }> Show / Hide { JSON.stringify(show) } </button>
    </div>
  )
}
