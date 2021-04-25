import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        todos.map((todo, idx) => {
          return (
            <TodoListItem todo={todo} index={idx} handleDelete={ handleDelete } handleToggle={ handleToggle }  />
          )
        })
      }
    </ul>
  )
}
