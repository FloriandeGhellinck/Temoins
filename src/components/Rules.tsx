import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './Button';
import { questions } from '../pages/game';

const Rules = (props: any) => {
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeOut(true);
    }, 10000);
  });

  const numOfQuestions = questions.length;

  return (
    <>
      <div className='font-poppins'>
        <div>
          <p>{"Cela fait maintenant pas mal d'années qu'on se connait. "}</p>{' '}
          <br />
          <p>
            Nous allons faire un petit quiz afin de tester tes connaissances à
            mon sujet.{' '}
          </p>{' '}
          <br />
          <p>
            Les questions seront dirigées sur notre vie commune au cours de ces
            dernières années.
          </p>{' '}
          <br />
          <p>
            {`Chaque bonne réponse te rapportera un point. Il y a ${numOfQuestions} questions en
            tout. Il te faudra 5 points pour gagner la partie.`}
          </p>{' '}
          <br />
          <p>
            {
              "Vérifie qu'il n'y a pas de fautes d'orthographe dans tes réponses. Autrement, ta réponse ne sera pas comptabilisée."
            }
          </p>
          <br />{' '}
          <p>
            {`Si tu as un doute, Tu peux cliquer sur "hint", mais attention que cela te retirera un demi point`}
          </p>{' '}
          <br />
          <p>Je te souhaite bonne chance !</p>
        </div>
        {timeOut && (
          <div className='h-24 flex items-center justify-center animate-bounce pt-4'>
            <Button styles=' inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-white bg-embie-yellow-500'>
              {' '}
              <Link href='/game'>Je me lance</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Rules;
