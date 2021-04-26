import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ "justifyContent": "flex-end" }}>
        <div className="navbar-nav">
          <NavLink exact activeClassName="active"
            className="nav-item nav-link" 
            aria-current="page" 
            to="/" >Home</NavLink>
          <NavLink exact activeClassName="active"
            className="nav-item nav-link" 
            aria-current="page" 
            to="/about" >About</NavLink>
          <NavLink exact activeClassName="active"
            className="nav-item nav-link" 
            aria-current="page" 
            to="/login" >Login</NavLink>
        </div>
      </div>
    </nav>    
  ) 
}

