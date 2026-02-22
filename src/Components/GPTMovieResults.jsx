import React, { useMemo } from "react";
import MovieCard from "./MovieCard";

const GPTMovieResults = ({
  movieName,
  gptSearchMovies,
  loading,
}) => {

  const processedData = useMemo(() => {
    if (!movieName || !gptSearchMovies) return [];

    return movieName.map((name, index) => {
      const filteredMovies =
        gptSearchMovies[index]?.filter(
          (movie) =>
            movie.poster_path && movie.adult === false
        ) || [];

      return { title: name, movies: filteredMovies };
    });
  }, [movieName, gptSearchMovies]);

  // Loading state
  if (loading) {
    return (
      <div className="text-white text-center py-20 text-xl">
        🔍 Searching movies...
      </div>
    );
  }

  // First visit
  if (!movieName || !gptSearchMovies) {
    return (
      <div className="text-white text-center py-20 text-lg opacity-70">
        Start typing to discover amazing movies 🎬
      </div>
    );
  }

  const hasResults = processedData.some(
    (item) => item.movies.length > 0
  );

  // No results
  if (!hasResults) {
    return (
      <div className="text-white text-center py-24 text-xl md:text-2xl font-semibold opacity-80">
        ❌ Sorry, results not available.
      </div>
    );
  }

  return (
    <div className="px-8 text-white space-y-12">
      {processedData.map((item, index) => {
        if (item.movies.length === 0) return null;

        return (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-4">
              {item.title}
            </h2>

            <div className="flex gap-6 overflow-x-scroll overflow-y-hidden scrollbar-hide">
              {item.movies.map((movie) => (
                <div
                  key={movie.id}
                  className="flex-shrink-0 w-44"
                >
                  <MovieCard
                    poster_path={movie.poster_path}
                    movieId={movie.id}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GPTMovieResults;