
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../Utils/Store/movieSlice';
import { API_OPTIONS } from '../Utils/Constants';

const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch();

    const getMovieVideos=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
        const json=await data.json();
        const trailers=json?.results?.filter(clip=>clip?.type==="Trailer" && clip.site==="YouTube");
        // const randomIndex = Math.floor(Math.random() * trailers.length);
        const trailer=trailers.length?trailers[0]:json?.results[0];
        //  const trailer = trailers.length?trailers[randomIndex]:json.results[0];
        dispatch(addTrailerVideo(trailer.key));
    }
    useEffect(()=>{
        getMovieVideos();
    },[movieId])
}

export default useMovieTrailer
