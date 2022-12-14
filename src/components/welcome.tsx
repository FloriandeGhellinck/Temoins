import { useEffect, useState } from 'react';
import Button from './Button';

const Welcome = () => {
  const handleClickWelcomePage = () => {};

  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeOut(true);
    }, 3000);
  });

  return (
    <>
      {' '}
      <div className='h-screen w-full items-center flex flex-col justify-center font-poppins'>
        <h1 className='text-3xl font-bold text-center text-embie-yellow-500   '>
          Salut à toi jeune entrepreneur
        </h1>
        {timeOut && (
          <Button styles='inline-flex items-center animate-bounce px-5 py-2 mt-10 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-embie-blue-dark-300'>
            <a href='/startgame'>Clique pour jouer</a>
          </Button>
        )}
      </div>
    </>
  );
};

export default Welcome;
