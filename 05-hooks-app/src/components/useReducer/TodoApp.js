import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'

import './style.css'

// const initialState = [{ id: new Date().getTime(), desc: 'Aprender React', done: false }]
const init = () => {
  // return [{ id: new Date().getTime(), desc: 'Aprender React', done: false }]
  return JSON.parse(localStorage?.getItem('todos')) || [];
}

export const TodoApp = () => {
  const [ todos, dispatch ] = useReducer(todoReducer, [], init)

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(todos) )
    console.log('useEffect executing')
  }, [todos])

  const handleAddTodo = ( newTodo ) => {
    dispatch({ type: 'add', payload: newTodo })
  }
  
  const handleDelete = ( todo ) => {
    const action = { type: 'remove', payload: todo }
    dispatch(action)
  }

  const handleToggle = ( todo ) => {
    console.log('dispatch handleToggle')
    const action = { type: 'toggle', payload: todo }
    dispatch( action )
  }

  return (
    <div>
      <h1>TodoApp ( { todos.length } )</h1>
      <div className="row">
        <div className="col-7">
          <TodoList todos={ todos } handleDelete={ handleDelete } handleToggle={ handleToggle } />
        </div>
        <div className="col-5 mx-auto">
          <TodoAdd handleAddTodo={ handleAddTodo } />
        </div>
      </div>
    </div>
  )
}
