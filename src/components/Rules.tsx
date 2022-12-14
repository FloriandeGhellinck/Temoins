import { useEffect, useState } from 'react';
import Button from './Button';

const Rules = () => {
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeOut(true);
    }, 10000);
  });

  return (
    <>
      <div className='font-poppins'>
        <div>
          <p>{"Cela fait maintenant pas mal d'années qu'on se connait. "}</p>{' '}
          <br />
          <p>
            Nous allons faire un petit quiz afin de tester tes connaissances.{' '}
          </p>{' '}
          <br />
          <p>
            Les questions seront dirigées sur notre vie commune au cours de ces
            dernières années.
          </p>{' '}
          <br />
          <p>
            Chaque bonne réponse te rapportera un point. Il y a 10 questions en
            tout. Il te faudra 7 points pour gagner la partie.{' '}
          </p>{' '}
          <br />
          <p>
            Tu peux répondre avec des majuscules ou des minuscules, cela ne
            change strictement rien
          </p>
        </div>
        {timeOut && (
          <div className='h-32 flex items-center justify-center bg-transparent'>
            <Button styles='inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-embie-yellow-500 to-embie-orange-600'>
              {' '}
              Je me lance
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Rules;
