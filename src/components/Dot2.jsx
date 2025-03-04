import React from "react";
import { useState, useEffect, useRef } from "react";
import evil1 from "../assets/evil8.webp";
import dagger2 from "../assets/dagger2.png"

export const Dot2 = ({
  onDotClick,
  dotOpacity,
  bgColor,
  feather,
  invertPercent,
  trigger,
}) => {
      // Preload images for instant switching
      useEffect(() => {
      
        const img = new Image();
        img.src = evil1;
      
    }, []);

  // positions Dot in random place initially
  const [top, setTop] = useState(Math.random() * (85 - 10) + 10);
  const [left, setLeft] = useState(Math.random() * (90 - 10) + 10);

  // runs at render and whenever "trigger" is altered ([trigger] at the end of the useEffect). Therefore, it will not start moving Dot unless "trigger" (defaulted to false) is changed to true
  useEffect(() => {
    if (trigger) {

      // even though setInterval was only defined and not called, setInterval is activated immediately when it's defined inside the useEffect hook because it is executed as soon as the useEffect runs.

      // changes Dot position every interval randomly
      const interval1 = setInterval(() => {
        setTop(Math.random() * (85 - 10) + 10);
        setLeft(Math.random() * (90 - 10) + 10);
      }, 940);

      // return statement within a useEffect hook in React is used to define a cleanup function. This function executes when the component unmounts or before the effect re-runs due to changes in its dependencies. It serves to prevent memory leaks and unexpected behaviors by cleaning up resources established by the effect.
      return () => {
        clearInterval(interval1);
      }
    } else {
      return
    }
  }, [trigger]);

  

  // recieves the onClick to activate onDotClick prop
  const handleClick = () => {
    onDotClick();
    setTop(Math.random() * (85 - 10) + 10);
    setLeft(Math.random() * (90 - 10) + 10);
  };

  return (
    <div>
    {trigger && <div
      onClick={handleClick}
      className="z-3  w-[8vh] h-[8vh] rounded-[50%] flex justify-center absolute border border-2 border-[rgba(255,255,255,.2)] active:translate-y-[3px]"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        background: bgColor,
        boxShadow: feather,
        opacity: dotOpacity,
        cursor: `url(${dagger2}), auto`
      }}
      draggable="false"
    >
      <img
        src={evil1}
        alt="angel"
        className="h-full "
        style={{ filter: invertPercent }}
        draggable="false"
      />
    </div>}
    </div>
  );
};
