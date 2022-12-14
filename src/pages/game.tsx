import { useState } from 'react';
import GameHandler from '../components/Gamehandler';
import Winner from '../components/Winner';

const Game = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      {score <= 5 && <GameHandler score={score} setScore={setScore} />}
      {score >= 5 && <Winner />}
    </>
  );
};

export default Game;
