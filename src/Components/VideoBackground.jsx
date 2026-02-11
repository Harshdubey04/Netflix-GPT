import React from "react";
import { embedURL } from "../Utils/Constants";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerKey = useSelector((store) => store.movie.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        className="w-full h-full scale-125"
        src={
          embedURL +
          trailerKey +
          "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media; picture-in-picture"
      />
    </div>
  );
};

export default VideoBackground;
