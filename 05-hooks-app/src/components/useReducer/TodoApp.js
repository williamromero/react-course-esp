import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from './hooks/useForm'

import './style.css'

// const initialState = [{ id: new Date().getTime(), desc: 'Aprender React', done: false }]
const init = () => {
  // return [{ id: new Date().getTime(), desc: 'Aprender React', done: false }]
  return JSON.parse(localStorage?.getItem('todos')) || [];
}

export const TodoApp = () => {
  const [ todos, dispatch ] = useReducer(todoReducer, [], init)
  const [ formValues, handleInputChange, reset ] = useForm({ description: '' });
  const { description } = formValues;
  console.log(description)

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(todos) )
  }, [todos])

  const handleSubmit = ( e ) => {
    e.preventDefault();
    if (description.trim().length <= 1)  { return; }
    const newTodo = { id: new Date().getTime(), desc: description, done: false }
    const action  = { type: 'add', payload: newTodo }
    dispatch(action)
    reset()
  }

  const handleDelete = ( todo ) => {
    const action = { type: 'remove', payload: todo }
    dispatch(action)
  }

  const handleToggle = ( todo ) => {
    const action = { type: 'toggle', payload: todo }
    dispatch( action )
  }

  return (
    <div>
      <h1>TodoApp ( { todos.length } )</h1>
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {
              todos.map((todo, idx) => {
                return (
                  <li key={ todo.id } className="list-group-item">
                    <p className={`text-center ${todo.done && 'complete'}`} onClick={ () => handleToggle(todo) }>
                      {idx + 1}. { todo.desc } 
                    </p>
                    <button className="btn btn-danger" onClick={ () => handleDelete(todo) }> Borrar </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="col-5 mx-auto">
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
        </div>
      </div>
    </div>
  )
}
