import React from 'react'

export const TodoListItem = ({ todo, index:idx, handleDelete, handleToggle }) => {
  return (
    <li key={ todo.id } className="list-group-item">
      <p className={`text-center ${todo.done && 'complete'}`} onClick={ () => handleToggle(todo) }>
        {idx + 1}. { todo.desc } 
      </p>
      <button className="btn btn-danger" onClick={ () => handleDelete(todo) }> Borrar </button>
    </li>
  )
}
