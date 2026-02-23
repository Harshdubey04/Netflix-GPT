import React from 'react'
import { LOGO } from '../Utils/Constants'

const Header = () => {
  return (
    <div className='flex justify-between py-3 bg-black/85 absolute w-full px-5 z-10 '>
        {/* Logo */}
        <div className='ml-3'>
            <img className='w-44 bg-linear-to-b from-black' 
            src={LOGO}
            alt="logo" />  
        </div>
    </div>
  )
}

export default Header


