import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/Store/movieSlice";
import { API_OPTIONS } from "../Utils/Constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(
    (store) => store.movie.trailerVideo
  );

  const getMovieVideos = async () => {
    if (!movieId) return;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    const trailers = json?.results?.filter(
      (clip) =>
        clip?.type === "Trailer" &&
        clip?.site === "YouTube"
    );

    const trailer =
      trailers?.length > 0
        ? trailers[0]
        : json?.results?.[0];

    if (trailer?.key) {
      dispatch(addTrailerVideo(trailer.key));
    }
  };

  useEffect(() => {
    if (!trailerVideo) {
      getMovieVideos();
    }
  }, [movieId]);

};

export default useMovieTrailer;
