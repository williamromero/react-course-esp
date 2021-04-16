import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef();
  console.log(inputRef);

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input ref={ inputRef } type="text" className="form-control" placeholder="Su nombre" />
      <button className="btn btn-primary mt-5" onClick= { handleClick } >Focus</button>
    </div>
  )
}
