import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Bar2 } from "./components/Bar2";
import { Background2 } from "./components/Background2";
import { StartModal } from "./components/StartModal";
import { WinModal } from "./components/WinModal";
import { LoseModal } from "./components/LoseModal";
import evil3 from "./assets/evil3.webp";
import gabriel from "./assets/gabriel.webp";

function App() {
  const [number, setNumber] = useState();
  const [countDown, setCountDown] = useState();
  const [gameState, setGameState] = useState(null);
  const [delay, setDelay] = useState(false);
  const [winFade, setWinFade] = useState(false);

    // Preload images for instant switching
    useEffect(() => {
      const preloadImages = [evil3, gabriel];
      preloadImages.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    }, []);

  // recieves data from Background and updates "number" to be used by Bar. Since the "number" data is brought in within the parenthesis, it becomes "count"
  const getCount = (count) => {
    // setNumber takes in "count" (data from Background) to update "number" to be used in Bar and "gameState"
    setNumber(count);
  };

  useEffect(() => {
    if (number === 0 && countDown !== 0) {
      setGameState("win");

      // add slight delay for smooth fade-in effect
      setTimeout(() => {
        setWinFade(true);
      }, 100);
    }
  }, [number]);

  // recieves data from Bar and updates "countDown" to be used to change "gameState". Since the "countDown" data is brought in within the parenthesis, it becomes "time"
  const getTime = (time) => {
    // setNumber takes in "time" (data from Bar) to update "countDown" to be used to change "gameState"
    setCountDown(time);
  };

  useEffect(() => {
    if (countDown === 0 && number !== 0) {
      setGameState("lose");

      // add slight delay before the lose banner is shown
      const timer = setTimeout(() => {
        setDelay(true);
      }, 1500);

      // return statement within a useEffect hook in React is used to define a cleanup function. This function executes when the component unmounts or before the effect re-runs due to changes in its dependencies. It serves to prevent memory leaks and unexpected behaviors by cleaning up resources established by the effect.
      return () => clearTimeout(timer);
    }
  }, [countDown]);

  return (
    <div className="h-full relative overflow-hidden">
      {/* gameState defaults to null and shows StartModal and its blurry background */}
      {gameState === null && (
        <div className="z-10 w-full h-full bg-[rgba(255,255,255,0.2)] flex justify-center items-start absolute backdrop-blur-sm">
          {/* when button is pressed it changes "gameState" to equal "start" */}
          <StartModal startGame={() => setGameState("start")} />
        </div>
      )}
      <div className="h-full relative">
        <Bar2 count={number} gameState={gameState} exportTime={getTime} />
        {gameState === "win" && (
          <div
            className={`z-10 w-full h-[90%] bg-[rgba(255,255,255,.5)] bg-cover flex justify-center items-start absolute backdrop-blur-sm transition-opacity duration-1000 ${
              winFade ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${gabriel})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <WinModal />
          </div>
        )}
        {gameState === "lose" && (
          <div
            className="z-10 w-full h-[90%] bg-black bg-cover flex justify-center items-start absolute backdrop-blur-sm"
            style={{
              backgroundImage: `url(${evil3})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {delay && <LoseModal />}
          </div>
        )}

        <Background2 exportRemaining={getCount} gameState={gameState} />
      </div>
    </div>
  );
}

export default App;
