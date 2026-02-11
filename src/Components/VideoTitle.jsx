import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-12 text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none">
      
      <h1 className="font-bold text-5xl drop-shadow-xl">
        {title}
      </h1>

      <p className="w-4/12 mt-4 text-lg text-gray-200 drop-shadow">
        {overview}
      </p>

      <div className="flex items-center gap-4 mt-6 pointer-events-auto">
        <button className="flex items-center gap-2 px-8 py-3 bg-white text-black text-xl font-semibold rounded hover:bg-gray-200 transition">
          <FaPlay className="text-2xl" />
          Play
        </button>

        <button className="flex items-center gap-2 px-8 py-3 bg-gray-500/70 text-white text-xl font-semibold rounded hover:bg-gray-500 transition">
          <FaCircleInfo className="text-2xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
