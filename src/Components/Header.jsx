import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between py-3 bg-black/85 absolute w-full px-5 z-10 '>
        {/* Logo */}
        <div className='ml-3'>
            <img className='w-44 bg-linear-to-b from-black' 
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
           {/* Button
            <div>
                <button className='bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded mr-5'>
                    Sign In
                </button>
            </div> */}
        </div>          
    </div>
  )
}

export default Header


