import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  if (!movies.nowPlayingMovies) return null;

  return (
    <div className="bg-black w-full">

     
      <div className="-mt-40 relative z-20">
        <MovieList
          title="Now Playing"
          movies={movies.nowPlayingMovies}
        />
      </div>   
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Trending" movies={movies.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming" movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
