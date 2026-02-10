import React from 'react'
import BrowserHeader from '../Components/BrowserHeader'
import { API_OPTIONS } from '../Utils/Constants'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from '../Components/MainContainer'
import SecondaryContainer from '../Components/SecondaryContainer'

const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <BrowserHeader />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        MainContainer
          Video Background
          video title
        Secondary Container
         -Movie lists*m
          -cards*n
      */}
    </div>
  )
}

export default Browse
