import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {addUpcomingMovies } from '../Utils/Store/movieSlice';
import { API_OPTIONS } from '../Utils/Constants';

const useUpcomingMovies = () => {

  const dispatch=useDispatch();

  const upcomingMovies=async ()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
  const json=await data.json()
  dispatch(addUpcomingMovies(json.results));
  }

  useEffect(()=>{
    upcomingMovies();
  },[]);

}

export default useUpcomingMovies
