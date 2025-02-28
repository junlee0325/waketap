import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Bar2 } from "./components/Bar2";
import { Background2 } from "./components/Background2";
import { StartModal } from "./components/StartModal";
import { WinModal } from "./components/WinModal";
import { LoseModal } from "./components/LoseModal";

function App() {
  const [number, setNumber] = useState();
  const [countDown, setCountDown] = useState()
  const [gameState, setGameState] = useState(null);

  // recieves data from Background and updates "number" to be used by Bar. Since the "number" data is brought in within the parenthesis, it becomes "count"
  const getCount = (count) => {
    // setNumber takes in "count" (data from Background) to update "number" to be used in Bar and "gameState"
    setNumber(count);
  };

  useEffect(() => {
    if (number === 0) {
      setGameState("win");
    }
  }, [number]);

  // recieves data from Bar and updates "countDown" to be used to change "gameState". Since the "countDown" data is brought in within the parenthesis, it becomes "time"
  const getTime = (time) => {
    // setNumber takes in "time" (data from Bar) to update "countDown" to be used to change "gameState"
    setCountDown(time);
  };

  useEffect(() => {
    if (countDown === 0) {
      setGameState("lose");
    }
  }, [countDown]);


  return (
    <div className="h-full relative">
      {/* gameState defaults to null and shows StartModal and its blurry background */}
      {gameState === null && (
        <div className="z-10 w-full h-full bg-[rgba(255,255,255,.5)] flex justify-center items-center absolute backdrop-blur-sm">
          {/* when button is pressed it changes "gameState" to equal "start" */}
          <StartModal startGame={() => setGameState("start")} />
        </div>
      )}      
      {gameState === "win" && (
        <div className="z-10 w-full h-full bg-[rgba(255,255,255,.5)] flex justify-center items-center absolute backdrop-blur-sm">
          <WinModal />
        </div>
      )}
      {gameState === "lose" && (
        <div className="z-10 w-full h-full bg-[rgba(255,255,255,.5)] flex justify-center items-center absolute backdrop-blur-sm">
          <LoseModal />
        </div>
      )}
      <div className="h-full">
        {/* Both components below takes in the value of "gameStart" to trigger something within them*/}
        <Bar2 count={number} gameState={gameState} exportTime={getTime}/>
        <Background2 exportRemaining={getCount} gameState={gameState} />
      </div>
    </div>
  );
}

export default App;
