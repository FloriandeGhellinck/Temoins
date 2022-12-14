import { useState } from 'react';
import GameHandler from '../components/Gamehandler';
import Winner from '../components/Winner';
import Image from 'next/image';
const Game = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      {score < 5 && <GameHandler score={score} setScore={setScore} />}
      {score >= 5 && <Winner />}
      {/* <Image src='/temoinsPix.jpg' alt='image' fill /> */}
    </>
  );
};

export default Game;
