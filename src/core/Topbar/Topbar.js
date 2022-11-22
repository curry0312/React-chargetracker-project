import React from 'react'

export default function Topbar() {
  return (
    <div className='topbar'>
        <ul>
            <li className='logo'><a>Budget</a></li>
        </ul>
        <ul className='register'>
            <li className='topbar-compo'><a>Login</a></li>
            <li className='topbar-compo'><a>Signup</a></li>
        </ul>
    </div>
  )
}
