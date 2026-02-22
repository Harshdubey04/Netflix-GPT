import React, { useMemo } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );

  const mainMovie = useMemo(() => {
    if (!movies || movies.length === 0) return null;
    const randomIndex = Math.floor(
      Math.random() * movies.length
    );
    return movies[randomIndex];
  }, [movies]);

  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
      <VideoBackground movieId={id} />

      <VideoTitle
        title={original_title}
        overview={overview}
      />

      <div className="absolute bottom-0 w-full h-24 md:h-40 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default MainContainer;
