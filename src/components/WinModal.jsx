import React from 'react'
import { useRef, useEffect } from 'react';
import choir from "../assets/choir.mp3"

export const WinModal = () => {
        // useRef is to reference DOM itmes to js part. kind of like getElementById in vanilla js
        const audioRef4 = useRef(null);
    
      
        // plays the audio unless audio is blocked by browser
        useEffect(() => {
          audioRef4.current.play();
        });
  return (
    <div className='w-full h-fit py-2 bg-[rgba(150,183,255,0.45)] text-white flex flex-col items-center justify-center'>
        <h1 className='text-3xl pb-2'>True Gabriel has returned.</h1>
        <span>The Devil has been expelled.</span>
        <span>Humanity has been saved.</span>
        <button className='bg-yellow-500 text-white px-2 pb-1 my-3 text-xl rounded-sm hover:bg-white hover:text-yellow-500 active:translate-y-[3px]' onClick={() => window.location.reload()}>Play Again</button>
        <audio src={choir} ref={audioRef4}></audio>
    </div>
  )
}
