import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(title)
    console.log(movies)
  return (
    // <div className='px-6 py-4 absolute -top-20'>
    //   <h1 className='text-3xl py-3 text-white '>{title}</h1>
    //   <div className='flex gap-4 overflow-x-scroll '>
    //     {
    //       movies?.map(movie=>(
    //         <div key={movie?.id}
    //         >
    //           <MovieCard poster_path={movie?.poster_path} />
    //         </div>                
    //       ))
    //     } 
    //   </div> 
    // </div>
    
    <div className="px-6 py-4">
      <h1 className="text-2xl py-3 text-white font-semibold">
        {title}
      </h1>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies?.map(movie => (
          <div key={movie?.id} className="min-w-[160px]">
            <MovieCard poster_path={movie?.poster_path} />
          </div>
        ))}
      </div>
    </div>
  

        
  )
}

export default MovieList