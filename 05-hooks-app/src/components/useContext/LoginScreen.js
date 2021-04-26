import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const { setUser } = useContext( UserContext )

  const handleClick = () => {
    setUser({})
  }

  return (
    <div>
      <h1>Login Screen</h1>
      <hr/>
      <button
        className="btn btn-primary"
        onClick={ () => setUser({
          id: new Date().getDay(),
          name: 'William Oswaldo Romero Vela',
          email: 'williamromerovela@gmail.com'
        }) }>
          Loguear Usuario
      </button> 
      <button
        className="btn btn-danger"
        onClick={ handleClick }>
          Loguear Usuario
      </button>         
    </div>
  )
}
