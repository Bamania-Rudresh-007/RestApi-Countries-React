import React from 'react'
import { FaMoon } from "react-icons/fa"

function Nav() {
  return (
    <div className='flex justify-between px-8.5 py-3.5 shadow-gray-200 shadow-2xl items-center'>
      <div>
        <h1 className='text-3xl font-bold'>Where in the World?</h1>
      </div>
      <div>
        <h2 className='flex items-center gap-0.5 font-bold text-xl cursor-pointer'><FaMoon />Dark mode</h2>
      </div>
    </div>
  )
}

export default Nav
