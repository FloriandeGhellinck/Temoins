import { useState } from 'react';
import { setSourceMapRange } from 'typescript';
import Button from '../components/Button';
import Form from '../components/Form';
import AboutmeTitle from '../components/Title';

const questions = [
  {
    numero: '1',
    question: 'Où nous sommes-nous rencontrés ? ',
    reponse: 'godinne',
  },
  {
    numero: '2',
    question: 'Quelle était mon cours préférée à l’école ? ',
    reponse: 'gym',
  },
  {
    numero: '3',
    question:
      'De quelle marque était mon véhicule que j’avais pendant mes études ? ',
    reponse: 'renault',
  },
  {
    numero: '4',
    question: 'Quel est mon moyen de transport préféré ? ',
    reponse: ' monoroue',
  },
  {
    numero: '5',
    question: 'Où ai-je rencontré ma fiancée ? ',
    reponse: 'jeux',
  },
  {
    numero: '6',
    question: 'Quel est mon sport préféré ? ',
    reponse: 'hockey',
  },
  {
    numero: '7',
    question: 'Combien de frères et soeurs j’ai ? ',
    reponse: '2',
  },
  {
    numero: '8',
    question: 'Combien de langues est-ce que je sais parler ? ',
    reponse: '3',
  },
];

const Game = () => {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);
  const [value, setValue] = useState('');
  const [formSubmitSuccesfull, setFormSubmitSuccesfull] = useState(false);

  const handleAnswers = (e: any) => {
    let answer = value.toLowerCase().trim();

    console.log(answer);

    if (answer === questions[step].reponse) {
      setScore(score + 1);
    }

    setStep((prevState) => prevState + 1);
    setFormSubmitSuccesfull(false);
  };

  const checkIfInputIsValid = (e: any) => {
    if (e.target.value !== '') {
      setFormSubmitSuccesfull(true);
    }

    if (!e.target.value) {
      setFormSubmitSuccesfull(false);
    }

    setValue(e.target.value);
  };

  return (
    <div className='h-screen w-screen bg-gray-100 flex flex-col items-center font-poppins'>
      <AboutmeTitle title='GAME' />
      <div className='text-justify w-10/12 h-fit bg-embie-blue-dark-500 text-white p-4 rounded-lg mt-7'>
        {questions.map((element, index) => {
          return index === step ? (
            <div className='text-center' key={element.numero}>
              {element.question}
              <div className='pt-3'>
                <input
                  className='border-2 w-full text-black'
                  onChange={checkIfInputIsValid}
                />
              </div>
              {formSubmitSuccesfull && (
                <Button
                  styles='inline-flex items-center mt-5 mb-2 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-white bg-embie-yellow-500'
                  onClick={handleAnswers}
                >
                  Soumettre mon choix
                </Button>
              )}
            </div>
          ) : null;
        })}
      </div>
      <div className='font-poppins mt-4'>Score : {score}</div>
    </div>
  );
};

export default Game;
