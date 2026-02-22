import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-20 md:bottom-32 lg:bottom-40 left-4 md:left-12 text-white z-20 max-w-[90%] md:max-w-[40%]">
      
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl drop-shadow-xl">
        {title}
      </h1>

      <p className="mt-3 text-sm md:text-base lg:text-lg text-gray-200 drop-shadow line-clamp-3 md:line-clamp-none">
        {overview}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button className="flex items-center justify-center gap-2 px-6 py-2 md:px-8 md:py-3 bg-white text-black text-sm md:text-lg font-semibold rounded hover:bg-gray-200 transition">
          <FaPlay />
          Play
        </button>

        <button className="flex items-center justify-center gap-2 px-6 py-2 md:px-8 md:py-3 bg-gray-500/70 text-white text-sm md:text-lg font-semibold rounded hover:bg-gray-500 transition">
          <FaCircleInfo />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;