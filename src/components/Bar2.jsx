import React from 'react'
import { useState, useEffect, useRef } from 'react'
import AveMaria from "../assets/AveMaria.mp3"
import reversed from "../assets/reversed.mp3"

export const Bar2 = ({count}) => {
    
    // // useRef is to reference DOM itmes to js part. kind of like getElementById in vanilla js
    // const audioRef1 = useRef(null)
    // const audioRef2 = useRef(null)
    
    // // plays the audio unless audio is blocked by browser
    // useEffect(() => {
    //       audioRef1.current.play();
    //       audioRef2.current.play();
    //   })


  return (
    <div className='flex flex-col items-center h-[5%] border border-dotted'>
    <div className='w-full flex justify-around items-center bg-black text-white'>
        <span>Remaining: {count}</span>
        <h1>WakeTap</h1>
        <button onClick={() => window.location.reload()}>Restart</button>
    </div>
    {/* temporarily disabled audio */}
    {/* <audio src={AveMaria} ref={audioRef1} loop controls className='w-full h-full bg-black px-5'></audio> */}
    {/* <audio src={reversed} ref={audioRef2} loop ></audio> */}
    </div>
  )
}
