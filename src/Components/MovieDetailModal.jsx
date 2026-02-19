import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/Constants";

const MovieDetailModal = ({ movieId, onClose }) => {
  const [movie, setMovie] = useState(null);

  const fetchMovieDetails = async () => {
    if (!movieId) return;
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      setMovie(json);
    };
  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">

      {/* Modal Box */}
      <div className="bg-gray-900 text-white w-3/4 max-w-4xl rounded-lg p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <div className="flex gap-6">

          {/* Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="poster"
            className="w-64 rounded-lg"
          />

          {/* Details */}
          <div className="flex flex-col justify-between">

            <div>
              <h1 className="text-3xl font-bold mb-3">{movie.title}</h1>
              <p className="text-gray-300 mb-4">{movie.overview}</p>

              <p className="mb-2">
                ⭐ Rating: {movie.vote_average}
              </p>

              <p>
                🎬 Release Date: {movie.release_date}
              </p>
            </div>

            {/* Telegram download link */}
            <a
              href={`https://t.me/yourchannel`} 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold text-center"
            >
              Download Now
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
