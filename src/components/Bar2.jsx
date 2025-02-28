import React from "react";
import { useState, useEffect, useRef } from "react";
import AveMaria from "../assets/AveMaria.mp3";
import reversed from "../assets/reversed.mp3";

export const Bar2 = ({ count, gameState, exportTime }) => {
  // useRef is to reference DOM itmes to js part. kind of like getElementById in vanilla js
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);

  // plays the audio unless audio is blocked by browser
  useEffect(() => {
    audioRef1.current.play();
    audioRef2.current.play();
  });

  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    // runs (starts the timer when "Start button is pressed")
    if (gameState === "start") {

      // exports "timeLeft" (0) and stops the timer when "timeLeft" reaches 0
      if (timeLeft <= 0) {
        exportTime(timeLeft)
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
      return
    }
  }, [timeLeft, gameState]);

  return (
    <div className="flex flex-col items-center h-[5%] border border-dotted">
      <div className="w-full flex justify-around items-center bg-black text-white">
        <span>Remaining: {count}</span>
        <span>Time Left: {timeLeft}</span>
        <h1>WakeTap</h1>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
      {/* temporarily disabled audio */}
      <audio
        src={AveMaria}
        ref={audioRef1}
        loop
        controls
        className="w-full h-full bg-black px-5"
        muted={count === 0 || timeLeft === 0}
      ></audio>
      <audio src={reversed} ref={audioRef2} loop muted={count === 0 || timeLeft === 0}></audio>
    </div>
  );
};
