import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function NavBar() {
  return (
    <div className='navbar'>
      <Link to="/" className='menuBars'>
        DASHBOARD
      </Link>
      <Link to="/" className='menuBars'>
        USERS
      </Link>
    </div>
  )
}
