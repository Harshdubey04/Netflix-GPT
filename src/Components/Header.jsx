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
          {/*Button and options*/}
        <div className='flex gap-4 items-center'>
            {/* Options */}
           <div>
                <select name="language" id="language" 
                    className='px-4 py-1 text-white bg-black border border-gray-400 rounded '
                >
                    <option value="English">English</option>
                    <option value="हिन्दी">हिन्दी</option>
                </select>
           </div>
        </div>          
    </div>
  )
}

export default Header


