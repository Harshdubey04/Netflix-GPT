import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchedText = useRef(null);

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
          content: `Suggest 5 movies like ${query}. Return only comma separated names.`,
        },
      ],
    }),
  }
);

const data = await response.json();

// console.log("Full Response:", data);

if (data?.choices?.length > 0) {
  console.log(data.choices[0].message.content);
}
  } catch (error) {
    console.error("DeepSeek Error:", error);
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
