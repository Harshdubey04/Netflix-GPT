import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addGptMovieResult } from "../Utils/Store/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchedText = useRef(null);
  const dispatch=useDispatch();
  
  const searchMovieTMDB=async (movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+
      '&include_adult=true&language=en-US&page=1',
      API_OPTIONS)

      const json=await data.json();
      return json.results;
  }

  const handleGPTSearchClick = async () => {
    const query = searchedText.current.value;

    if (!query) return;

    try {
    const response = await fetch(
  "https://openrouter.ai/api/v1/chat/completions",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": window.location.origin,
      "X-Title": "Netflix-GPT"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Suggest 5 movies named ${query}. Return only comma separated names without any numbering in a single string.`,
        },
      ],
    }),
  }
);

const data = await response.json();

console.log("Full Response:", data);

if (data?.choices?.length > 0) {
  const gptMovies=data.choices?.[0].message?.content.trim().split(",");
  // console.log(gptMovies);

  // ['Hera Pheri', ' Dhamaal', ' Welcome', ' Golmaal', ' Andaz Apna Apna']
  // for each movies i will search on api
  const promiseArray=gptMovies.map((movie)=>searchMovieTMDB(movie));
  // movieData=[promise,promise,promise,promise,promise] because it is async  function
  const moviesData=await Promise.all(promiseArray);
  console.log(moviesData);

  dispatch(addGptMovieResult({movieName:gptMovies,movieResults:moviesData}));
  
}
  } catch (error) {
    console.error("Openrouter Error:", error);
  }
};

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 grid grid-cols-12 rounded-md"
      >
        <input
          type="text"
          ref={searchedText}
          placeholder={lang[langKey].placeholder}
          className="p-4 m-4 text-xl text-gray-700 bg-white col-span-9 rounded-md"
        />
        <button
          onClick={handleGPTSearchClick}
          className="m-5 cursor-pointer font-bold active:scale-95 bg-red-600 text-white rounded-md col-span-3"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
