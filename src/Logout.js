import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
  return (
    <div>
            <h1>PATASELL</h1>
            <h3>You were logged out</h3>
            <h4>Click log in to continue</h4>
            <Link  className='log' to="/">Log in </Link>




    </div>
  )
}

export default Logout