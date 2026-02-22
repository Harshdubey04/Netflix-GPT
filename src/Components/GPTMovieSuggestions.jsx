import React from "react";
import { useSelector } from "react-redux";
import GPTMovieResults from "./GPTMovieResults";

const GPTMovieSuggestions = () => {
  const { movieName, gptSearchMovies, loading } = useSelector(
    (store) => store.gpt
  );

  return (
    <div className="mt-10 bg-black/80 backdrop-blur-md pb-16">
      <GPTMovieResults
        movieName={movieName}
        gptSearchMovies={gptSearchMovies}
        loading={loading}
      />
    </div>
  );
};

export default GPTMovieSuggestions;
