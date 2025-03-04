import React, { useState, useEffect} from "react";
import { Dot2 } from "./Dot2";
import evil4 from "../assets/evil4.webp";
import evil2 from "../assets/evil2.webp";
import dagger from "../assets/dagger.png";

export const Background2 = ({ exportRemaining, gameState }) => {
  // the "score" the user has to countdown from
  const [remaining, setRemaining] = useState(15);

  const [background, setBackground] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(evil2);
  const [feather, setFeather] = useState("0px 0px 30px rgba(0,0,0,1)");
  const [invert, setInvert] = useState("invert(0%)");
  const [showPlus, setShowPlus] = useState(false);
  const [showMinus, setShowMinus] = useState(false);
  const [dotOpacity, setDotOpacity] = useState("100%");
  // used to trigger Dot movement
  const [trigger, setTrigger] = useState(false);

    // Preload images for instant switching
    useEffect(() => {
      const preloadImages = [evil2, evil4, dagger];
      preloadImages.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    }, []);

  useEffect(() => {
    if (gameState === "start") {
      setBackgroundImage(evil4);
      setTrigger(true);
    } else {
      setTrigger(false);
    }
  }, [gameState]);

  // exports "remaining" to App to be used by Bar at render and whenever "remaining" changes
  useEffect(() => {
    // exportRemaining prop carrys the "remaining" data with it when it gets exported
    exportRemaining(remaining);
  }, [remaining]);

  // runs when onDotClick is activated
  const decreaseRemaining = () => {
    setRemaining(remaining - 1);
    setBackground("");
    setFeather("0px 0px 30px rgb(255,0,0)");
    setShowPlus(true);
    setInvert("invert(0%)");

    // waits a bit before turning everything back to normal
    setTimeout(() => {
      setBackground("");
      setFeather("0px 0px 30px rgba(0,0,0,1)");
      setShowPlus(false);
      setInvert("invert(0%)");
    }, 150);
  };

  // runs when the background div is clicked
  const increaseRemaining = () => {
    setRemaining(remaining + 1);
    setDotOpacity("0%");
    setBackgroundImage(evil2);
    setShowMinus(true);

    // waits a bit before turning everything back to normal
    setTimeout(() => {
      setBackground("");
      setDotOpacity("100%");
      setShowMinus(false);
      setBackgroundImage(evil4);
    }, 150);
  };

  return (
    <div className="w-full h-[90%] relative">
      <Dot2
        onDotClick={decreaseRemaining}
        dotOpacity={dotOpacity}
        bgColor={background}
        feather={feather}
        invertPercent={invert}
        trigger={trigger}
      />
      <div
        className="w-full h-full text-[50px] flex justify-center items-center bg-black bg-[cover]"
        onClick={increaseRemaining}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          cursor: `url(${dagger}), auto`,
        }}
      >
        {showPlus && <span className="text-white">- 1</span>}
        {showMinus && <span className="text-[red]">+ 1</span>}
      </div>
    </div>
  );
};
