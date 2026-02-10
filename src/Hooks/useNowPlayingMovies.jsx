
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/Store/movieSlice';
import { API_OPTIONS } from '../Utils/Constants';

const useNowPlayingMovies = () => {

  const dispatch=useDispatch();

  const nowPlayingMovies=async ()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
  const json=await data.json();
  dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    nowPlayingMovies();
  },[]);

}

export default useNowPlayingMovies
