import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import Message from './Message';

const FormWCHook = () => {

  const [ formValues, handleInputChange ] = useForm({ name: '', email: '', password: '' })
  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('Email cambió!')
  }, [ email ])

  const handleForm = (e) => {
    e.preventDefault();
    console.log(formValues)
  }

  return (
    <form onSubmit={ handleForm }>
      <h1>Form with Custom Hook </h1>
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
      <div className="form-group">
        <input type="text" 
               name="password" 
               className="form-control" 
               placeholder="*****" 
               value={ password }
               onChange={ handleInputChange } />         
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  )
}

export default FormWCHook
