import React from 'react'
import BrowserHeader from '../Components/BrowserHeader'
import { API_OPTIONS } from '../Utils/Constants'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from '../Components/MainContainer'
import SecondaryContainer from '../Components/SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import GPTSearch from '../Components/GPTSearch'

const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  
  return (
    <div>
      <BrowserHeader />
      {
        showGptSearch?(
          <GPTSearch />
        ):(
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }      
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

