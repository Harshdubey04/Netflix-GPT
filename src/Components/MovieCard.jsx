import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constants' 

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-40'>
      <img src={IMG_CDN_URL+poster_path} 
      alt="poster" />
    </div>
  )
}

export default MovieCard
