import { useEffect, useState } from 'react';
import { setSourceMapRange } from 'typescript';
import Button from '../components/Button';
import Form from '../components/Form';
import GameHandler from '../components/Gamehandler';
import AboutmeTitle from '../components/Title';
import Winner from '../components/Winner';

const Game = () => {
  const [score, setScore] = useState(6);

  return (
    <>
      {score <= 5 && <GameHandler score={score} setScore={setScore} />}
      {score >= 5 && <Winner />}
    </>
  );
};

export default Game;
