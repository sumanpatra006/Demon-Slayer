import { useEffect, useState } from "react";
import ReturnHomeSectionButton from "../components/returnHomeSectionButton";
import ReturnGameSectionButton from "../components/returnGameSectionButton";

const BIRD_HEIGHT = 28;
const BIRD_WIDTH = 33;
const WALL_HEIGHT = 550;
const DEFAULT_WALL_WIDTH = 400;

// Difficulty settings
const DIFFICULTY_SETTINGS = {
  easy: {
    gravity: 6,
    objSpeed: 4,
    objGap: 250,
    jumpForce: 60
  },
  medium: {
    gravity: 8,
    objSpeed: 5,
    objGap: 200,
    jumpForce: 50
  },
  hard: {
    gravity: 10,
    objSpeed: 7,
    objGap: 160,
    jumpForce: 45
  }
};

const OBJ_WIDTH = 52;

function WingnoYaiba() {
  const [isStart, setIsStart] = useState(false);
  const [birdpos, setBirdpos] = useState(300);
  const [objHeight, setObjHeight] = useState(0);
  const [objPos, setObjPos] = useState(DEFAULT_WALL_WIDTH);
  const [score, setScore] = useState(0);
  const [wallWidth, setWallWidth] = useState(DEFAULT_WALL_WIDTH);
  const [difficulty, setDifficulty] = useState('medium');

  // Get current difficulty settings
  const currentSettings = DIFFICULTY_SETTINGS[difficulty];

  // Adjust the wall width based on screen size
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 768) {
        setWallWidth(450);
      } else {
        setWallWidth(DEFAULT_WALL_WIDTH);
      }
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Gravity effect for the bird
  useEffect(() => {
    let intVal;
    if (isStart && birdpos < WALL_HEIGHT - BIRD_HEIGHT) {
      intVal = setInterval(() => {
        setBirdpos((birdpos) => birdpos + currentSettings.gravity);
      }, 24);
    }
    return () => clearInterval(intVal);
  });

  // Object movement logic
  useEffect(() => {
    let objval;
    if (isStart && objPos >= -OBJ_WIDTH) {
      objval = setInterval(() => {
        setObjPos((objPos) => objPos - currentSettings.objSpeed);
      }, 24);

      return () => {
        clearInterval(objval);
      };
    } else {
      setObjPos(wallWidth);
      setObjHeight(Math.floor(Math.random() * (WALL_HEIGHT - currentSettings.objGap)));
      if (isStart) setScore((score) => score + 7);
    }
  }, [isStart, objPos, wallWidth, currentSettings]);

  // Collision detection
  useEffect(() => {
    let topObj = birdpos >= 0 && birdpos < objHeight;
    let bottomObj =
      birdpos <= WALL_HEIGHT &&
      birdpos >= WALL_HEIGHT - (WALL_HEIGHT - currentSettings.objGap - objHeight) - BIRD_HEIGHT;

    if (
      objPos >= OBJ_WIDTH &&
      objPos <= OBJ_WIDTH + 80 &&
      (topObj || bottomObj)
    ) {
      setIsStart(false);
      setBirdpos(300);
      setScore(0);
    }
  }, [isStart, birdpos, objHeight, objPos, currentSettings]);

  // Click handler for the bird's movement
  const handler = () => {
    if (!isStart) setIsStart(true);
    else if (birdpos < BIRD_HEIGHT) setBirdpos(0);
    else setBirdpos((birdpos) => birdpos - currentSettings.jumpForce);
  };

  // Handle difficulty change
  const changeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setIsStart(false);
    setBirdpos(300);
    setScore(0);
    setObjPos(DEFAULT_WALL_WIDTH);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <div className="flex flex-row justify-between items-center h-[10vh] w-[80%]">
        <ReturnHomeSectionButton/>
        <ReturnGameSectionButton/>
      </div>
      <div className="text-4xl font-bold mt-3 font-Pixel-Army">Wings no Yaiba</div>
      <div className="text-lg font-bold my-3">Score: {score}</div>
      
      {/* Difficulty selector */}
      <div className="flex gap-4 mb-4">
        {Object.keys(DIFFICULTY_SETTINGS).map((diff) => (
          <button
            key={diff}
            onClick={() => changeDifficulty(diff)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              difficulty === diff
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {diff.charAt(0).toUpperCase() + diff.slice(1)}
          </button>
        ))}
      </div>

      <div
        className="relative overflow-hidden border-2 border-black"
        style={{
          height: `${WALL_HEIGHT}px`,
          width: `${wallWidth}px`,
          backgroundImage: "url('/images/background-day.png')",
          backgroundSize: `${wallWidth}px ${WALL_HEIGHT}px`,
        }}
        onClick={handler}
      >
        {!isStart && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white text-center p-2 rounded-lg text-lg font-semibold cursor-pointer">
            Click To Start
          </div>
        )}

        <div
          className="absolute"
          style={{
            height: `${objHeight}px`,
            width: `${OBJ_WIDTH}px`,
            left: `${objPos}px`,
            top: `0px`,
            backgroundImage: "url('/images/pipe-green.png')",
            transform: "rotate(180deg)",
          }}
        ></div>

        <div
          className="absolute"
          style={{
            height: `${BIRD_HEIGHT}px`,
            width: `${BIRD_WIDTH}px`,
            top: `${birdpos}px`,
            left: `100px`,
            backgroundImage: "url('/images/shinobuNoBg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          className="absolute"
          style={{
            height: `${WALL_HEIGHT - currentSettings.objGap - objHeight}px`,
            width: `${OBJ_WIDTH}px`,
            left: `${objPos}px`,
            top: `${WALL_HEIGHT - (objHeight + (WALL_HEIGHT - currentSettings.objGap - objHeight))}px`,
            backgroundImage: "url('/images/pipe-green.png')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default WingnoYaiba;