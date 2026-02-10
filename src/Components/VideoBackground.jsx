import React  from 'react'
import { embedURL } from '../Utils/Constants'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  const trailerKey=useSelector(store=>store.movie.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div
     className='w-screen'
    >
      <iframe 
      className='w-screen aspect-video z-50'
      src={embedURL+trailerKey+"?autoplay=1&mute=1"} 
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  )
}

export default VideoBackground
