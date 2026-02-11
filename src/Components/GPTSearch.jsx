import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_IMG } from '../Utils/Constants'

const GPTSearch = () => {
  return (
    <div className=''>
        <img src={BG_IMG} alt="bg-img" className='object-cover -z-10 absolute' />
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch
