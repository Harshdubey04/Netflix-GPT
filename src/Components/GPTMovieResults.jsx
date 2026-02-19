import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieDetailModal from "./MovieDetailModal";

const GPTMovieResults = ({ movieName, gptSearchMovies }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  if (!movieName || !gptSearchMovies) return null;

  return (
    <div className="px-8 text-white space-y-12">
      {movieName.map((name, index) => {
        const filteredMovies =
          gptSearchMovies[index]?.filter(
            (movie) => movie.poster_path  && movie.adult === false
          ) || [];

        if (filteredMovies.length === 0) return null;

        return (
          <div key={index}>    
            {/* Title */}
            <h2 className="text-2xl font-bold mb-4">{name}</h2>
            {/* Scroll Container */}
            <div className="flex gap-6 overflow-x-scroll overflow-y-hidden scrollbar-hide">
              {filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="flex-shrink-0 w-44"
                >
                  <MovieCard
                    poster_path={movie.poster_path}
                    movieId={movie.id}
                    onClick={setSelectedMovieId}
                  />
                </div>
              ))}

            </div>
          </div>
        );
      })}

      {/* Modal */}
      {selectedMovieId && (
        <MovieDetailModal
          movieId={selectedMovieId}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
    </div>
  );
};

export default GPTMovieResults;
