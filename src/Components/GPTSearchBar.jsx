import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addGptMovieResult, setLoading } from "../Utils/Store/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchedText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const query = searchedText.current.value?.trim();

    if (!query) return;

    //  Bad word filter logic
    const bannedWords = ["porn", "xxx", "sex", "adult"];

    if (
      bannedWords.some((word) =>
        query.toLowerCase().includes(word)
      )
    ) {
      alert("Adult content is not allowed.");
      return;
    }

    dispatch(setLoading(true));

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": window.location.origin,
            "X-Title": "Netflix-GPT",
          },
          body: JSON.stringify({
            model: "openai/gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `Suggest 5 real movie titles related to ${query}. 
                Return only comma separated movie names. 
                If no real movies exist, return only: NONE`,
              },
            ],
          }),
        }
      );

      const data = await response.json();

      const rawResponse =
        data?.choices?.[0]?.message?.content?.trim();

      if (
        !rawResponse ||
        rawResponse.toLowerCase().includes("none") ||
        rawResponse.toLowerCase().includes("sorry")
      ) {
        dispatch(
          addGptMovieResult({
            movieName: [],
            movieResults: [],
          })
        );
        return;
      }

      const gptMovies = rawResponse
        .split(",")
        .map((movie) => movie.trim())
        .filter((movie) => movie.length > 0);

      if (gptMovies.length === 0) {
        dispatch(
          addGptMovieResult({
            movieName: [],
            movieResults: [],
          })
        );
        return;
      }

      const promiseArray = gptMovies.map((movie) =>
        searchMovieTMDB(movie)
      );

      const moviesData = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({
          movieName: gptMovies,
          movieResults: moviesData,
        })
      );
    } catch (error) {
      console.error("Openrouter Error:", error);
      dispatch(
        addGptMovieResult({
          movieName: [],
          movieResults: [],
        })
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
  <div className="pt-[10%] flex justify-center">
    <form
  onSubmit={(e) => e.preventDefault()}
  className="w-[90%] sm:w-1/2 flex items-center gap-2"
>
      <input
        type="text"
        ref={searchedText}
        placeholder={lang[langKey].placeholder}
        className="flex-1 h-14 px-5 text-lg text-gray-700 bg-white rounded-md outline-none"
      />
      <button
        onClick={handleGPTSearchClick}
        className="h-14 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md active:scale-95 transition"
      >
        {lang[langKey].search}
      </button>
    </form>
  </div>
);

};

export default GPTSearchBar;

