import React from "react";
import { IMG_CDN_URL } from "../Utils/Constants";

const MovieCard = ({ poster_path, movieId, onClick }) => {
  if (!poster_path) return null;

  return (
    <div
      className="relative
        w-28 sm:w-36 md:w-40
        flex-shrink-0 cursor-pointer
        transition-transform duration-300 ease-in-out
        hover:scale-110 hover:z-20"
      onClick={() => onClick(movieId)}
    >
      <img
        src={IMG_CDN_URL + poster_path}
        alt="poster"
        className="rounded-lg shadow-lg"
      />

      <div
        className="absolute inset-0
        bg-gradient-to-t from-black/80 via-black/20 to-transparent
        opacity-0 hover:opacity-100
        transition-opacity duration-300
        rounded-lg"
      ></div>
    </div>
  );
};

export default MovieCard;
