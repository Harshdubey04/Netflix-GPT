import React from 'react'
import lang, { SUPPORTED_LANGUAGES } from '../Utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const langKey=useSelector(store=>store.config.language);
    
  return (
    <div className='pt-[10%] flex justify-center'>

      <form onSubmit={(e)=>e.preventDefault()}
      className=' w-1/2 grid grid-cols-12 rounded-md'>
        <input type="text" 
        placeholder={lang[langKey].placeholder}
        className='p-4 m-4 text-xl  text-gray-700 bg-white col-span-9 rounded-md' />
        <button className='m-5 cursor-pointer font-bold active:scale-95 bg-red-600 text-white rounded-md col-span-3'>{lang[langKey].search}</button>
      </form>
    </div> 
  )
}

export default GPTSearchBar
