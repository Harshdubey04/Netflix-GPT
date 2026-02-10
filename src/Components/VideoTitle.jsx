import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({title,overview}) => {
    
  return (
    <div className='aspect-video pt-[20%] pl-10 absolute text-white bg-gradient-to-r from-black/20 pointer-events-none'>
       <h1 className='font-bold text-4xl'>{title}</h1>
       <p className='w-4/12 mt-3'>{overview}</p>
       <div className='flex gap-2 mt-4'>
        {/* <div className='flex items-center gap-1 px-6 py-2 bg-black text-3xl text-white rounded'>
            <FaPlay />
            <button>Play</button>            
        </div>
        <div className='flex items-center gap-1 px-6 py-2 bg-black text-3xl text-white rounded'>
            <FaCircleInfo />
            <button>More Info</button>
        </div>       */}

        <div className="flex items-center gap-4 mt-6">       
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
    </div>
  )
}

export default VideoTitle
