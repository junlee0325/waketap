import React from 'react'
import { useRef, useEffect } from 'react';
import glitch from "../assets/glitch.mp3"

export const LoseModal = () => {
      // useRef is to reference DOM itmes to js part. kind of like getElementById in vanilla js
      const audioRef3 = useRef(null);
  
    
      // plays the audio unless audio is blocked by browser
      useEffect(() => {
        audioRef3.current.play();
        audioRef3.current.volume = .5
      });
  return (
    <div className='w-full  h-fit py-2 bg-[rgba(0,0,0,.2)] text-white flex flex-col items-center justify-center'>
        <h1 className='text-3xl pb-2'>The Devil has won.</h1>
        <span>Humanity is deceived and will worship an imposter.</span>
        <button className='bg-red-500 text-white px-2 pb-1 my-3 text-xl rounded-sm hover:bg-white hover:text-red-500 active:translate-y-[3px]' onClick={() => window.location.reload()}>Play Again</button>
        <audio src={glitch} ref={audioRef3} ></audio>
    </div>
  )
}
