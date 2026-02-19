import React from "react";
import { useSelector } from "react-redux";
import GPTMovieResults from "./GPTMovieResults";

const GPTMovieSuggestions = () => {
  const { movieName, gptSearchMovies } = useSelector(
    (store) => store.gpt
  );

  if (!movieName || !gptSearchMovies) return null;

  return (
    <div className="bg-black/80 pt-6 pb-10">
      <GPTMovieResults
        movieName={movieName}
        gptSearchMovies={gptSearchMovies}
      />
    </div>
  );
};

export default GPTMovieSuggestions;
