import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-6">
      <h1 className="text-lg sm:text-xl md:text-2xl py-3 text-white font-semibold">
        {title}
      </h1>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
        {movies?.map((movie) => (
          <div key={movie?.id}>
            <MovieCard poster_path={movie?.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;