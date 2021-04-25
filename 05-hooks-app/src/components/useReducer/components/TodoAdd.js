import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

  const [ formValues, handleInputChange, reset ] = useForm({ description: '' });
  const { description } = formValues;
  console.log(description) 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1)  { return; }
    const newTodo = { id: new Date().getTime(), desc: description, done: false }
    handleAddTodo(newTodo)
    reset()    
  }

  return (
    <>
      <h4>AGREGAR TODO</h4>
      <hr/>
      <form onSubmit={ handleSubmit }>
        <input 
          type="text" 
          name="description"
          className="form-control"
          placeholder="Aprender ..." 
          autoComplete="off" 
          onChange={ handleInputChange }
          value={ description }
        />
        <button 
          type="submit"
          className="btn btn-warning form-control" 
          style={{ "marginTop": "1em" }}
          >AGREGAR
        </button>
      </form>
    </>
  )
}
