import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">React Crud operation</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to={'/'}>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'/Student_list'}>Student</NavLink>
      </li>
    
    </ul>
  </div>
</nav>

  )
}

export default Navbar