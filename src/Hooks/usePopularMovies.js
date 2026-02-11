
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../Utils/Store/movieSlice';
import { API_OPTIONS } from '../Utils/Constants';

const usePopularMovies = () => {

  const dispatch=useDispatch();

  const popularMovies=async ()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
  const json=await data.json();
  dispatch(addPopularMovies(json.results));
  }

  useEffect(()=>{
    popularMovies();
  },[]);

}

export default usePopularMovies
