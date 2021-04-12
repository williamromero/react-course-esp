import React, { useState, useEffect } from 'react'
import Message from './Message';

const SimpleForm = () => {
  
  const [ formState, setFormState ] = useState({ name: '', email: '' })
  const { name, email } = formState;

  useEffect(() => { console.log('Hey, inició!') }, [ ] )
  useEffect(() => { console.log('formState cambió!') }, [ formState ] )
  useEffect(() => { console.log('email cambió!') }, [ email ] )

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value)
    setFormState({
      ...formState,
      [ e.target.name ]: e.target.value 
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr/>
      <div className="form-group">
        <input type="text" 
               name="name" 
               className="form-control" 
               placeholder="Tu nombre" 
               autoComplete="off"
               value={ name }
               onChange={ handleInputChange } />              
      </div>
      <div className="form-group">
        <input type="text" 
               name="email" 
               className="form-control" 
               placeholder="Tu correo" 
               autoComplete="off"
               value={ email }
               onChange={ handleInputChange } />         
      </div>

      { name === '123' && <Message /> }
    </>
  )
}

export default SimpleForm
