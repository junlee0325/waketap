import React from "react";
import { useState, useEffect, useRef } from "react";
import AveMaria from "../assets/AveMaria.mp3";
import reversed from "../assets/reversed.mp3";

export const Bar2 = ({ count, gameState, exportTime }) => {
  // sets the game time
  const [timeLeft, setTimeLeft] = useState(30);

  // useRef is to reference DOM itmes to js part. kind of like getElementById in vanilla js
  const audioRef1 = useRef(null);

  // plays the audio unless audio is blocked by browser
  useEffect(() => {
    
    if (gameState === "start") {
      audioRef1.current.play();
    } else {
      audioRef1.current.pause();
    }
  });

  useEffect(() => {
    // runs (starts the timer when "Start button is pressed")
    if (gameState === "start") {
      // exports "timeLeft" (0) and stops the timer when "timeLeft" reaches 0
      if (timeLeft <= 0) {
        exportTime(timeLeft);
        return;
      }

      // even though setTimeout was only defined and not called, setTimeout is activated immediately when it's defined inside the useEffect hook because it is executed as soon as the useEffect runs.

      const timer = setTimeout(() => {
        // prev must be used to make a "soft-copy" of "timeLeft" so it knows to subtract from the previous value, else it will create a weird loop
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      // return statement within a useEffect hook in React is used to define a cleanup function. This function executes when the component unmounts or before the effect re-runs due to changes in its dependencies. It serves to prevent memory leaks and unexpected behaviors by cleaning up resources established by the effect.
      return () => clearTimeout(timer);
    } else {
      return;
    }
  }, [timeLeft, gameState]);

  return (
    <div className="z-10 flex flex-col items-center h-[10%] bg-black">
      <div className="w-full h-1/2 flex justify-around items-center bg-black text-white text-lg">
        <h1>The False Gabriel</h1>
        <span>Remaining: {count}</span>
        <span>Time Left: {timeLeft}</span>
        <button className="rounded-sm bg-white text-black pb-[1px] px-2 hover:bg-gray-400 hover:text-white active:translate-y-[3px]" onClick={() => window.location.reload()}>Restart</button>
      </div>
      
        <audio
          src={AveMaria}
          ref={audioRef1}
          loop
          controls
          className="w-full h-1/2 bg-black px-5"
        ></audio>
      
    </div>
  );
};
