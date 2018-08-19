import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <div>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/newroom">Create Room</Link>
    <Link to="/rooms">Room List</Link>
    </div>
  </div>
)

export default NavBar