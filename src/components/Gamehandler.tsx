import { useState } from 'react';
import Button from './Button';
import AboutmeTitle from './Title';

export const questions = [
  {
    numero: 1,
    question: 'Où nous sommes-nous rencontrés ? ',
    type: 'facile',
    tip: 'Ecole',
    reponse: 'godinne',
  },
  {
    numero: '2',
    question: 'Quelle était mon cours préférée à l’école ? ',
    type: 'difficile',
    tip: 'faire du sport, en 3 lettres',
    reponse: 'gym',
  },
  {
    numero: '3',
    question:
      'De quelle marque était mon véhicule que j’avais pendant mes études ? ',
    type: 'facile',
    tip: 'Pas le modèle, mais la marque',
    reponse: 'renault',
  },
  {
    numero: '4',
    question: 'Quel est mon moyen de transport préféré ? ',
    type: 'facile',
    tip: 'mono...',
    reponse: 'monoroue',
  },
  {
    numero: '5',
    question: 'Où ai-je rencontré ma fiancée ? ',
    type: 'facile',
    tip: 'nom de la boite',
    reponse: 'jeux',
  },
  {
    numero: '6',
    question: 'Quel est mon sport préféré ? ',
    type: 'difficile',
    tip: 'Equipe, balle, stick',
    reponse: 'hockey',
  },
  {
    numero: '7',
    question: 'Combien de frères et soeurs j’ai ? ',
    type: 'facile',
    tip: '90 / 91 / 95',
    reponse: '2',
  },
  {
    numero: '8',
    question: 'Combien de langues est-ce que je sais parler ? ',
    type: 'facile',
    tip: 'ecole, langue maternelle + films',
    reponse: '3',
  },
  {
    numero: '9',
    question: 'Depuis combien de temps suis-je en couple avec ma fiancée ?',
    type: 'facile',
    tip: '2017',
    reponse: '5',
  },
  {
    numero: '10',
    question: 'Comment se prénome mon père ?',
    type: 'facile',
    tip: 'amo',
    reponse: 'amaury',
  },
];

const GameHandler = ({ setScore, score }: any) => {
  //   const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);
  const [value, setValue] = useState('');
  const [formSubmitSuccesfull, setFormSubmitSuccesfull] = useState(false);
  const [showHintButton, setShowHintButton] = useState(true);
  const [showHint, setShowHint] = useState(false);

  const handleAnswers = () => {
    let answer = value.toLowerCase().trim();

    if (answer === questions[step].reponse) {
      setScore(score + 1);
    }
    if (step === 9) {
      setStep((prevState) => prevState - 10);
    }

    setStep((prevState) => prevState + 1);
    setFormSubmitSuccesfull(false);
    setShowHintButton(true);
    setShowHint(false);
  };

  const handleHintButton = () => {
    setShowHintButton(false);
    setShowHint(true);
    setScore(score - 0.5);
  };

  const showValidationButton = (e: any) => {
    if (e.target.value !== '') {
      setFormSubmitSuccesfull(true);
      setShowHintButton(false);
      // setShowHint(true);
    }
    if (!e.target.value) {
      setFormSubmitSuccesfull(false);
      if (!showHintButton) {
        setShowHintButton(true);
        setShowHint(false);
      }
      // setShowHintButton(true);
      // setShowHint(false);
    }
    setValue(e.target.value);
  };

  return (
    <div className='h-screen w-screen bg-gray-100 flex flex-col items-center font-poppins justify-between pb-10'>
      <AboutmeTitle title='GAME' />
      <div className='text-justify w-10/12 h-fit bg-embie-blue-dark-500 text-white p-4 rounded-lg mt-7'>
        {questions.map((element, index) => {
          return index === step ? (
            <div className='text-center' key={element.numero}>
              <h1>QUESTION N°{element.numero} </h1>
              <br />
              {element.question}
              <div className='pt-3'>
                <input
                  className='border-2 w-full text-black'
                  onChange={showValidationButton}
                />
              </div>
              {showHintButton ? (
                <Button
                  styles='inline-flex items-center mt-5 mb-2 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-white bg-embie-yellow-500'
                  onClick={handleHintButton}
                >
                  Hint
                </Button>
              ) : null}
              {showHint ? <p className='pt-3'>indice : {element.tip}</p> : null}
              {formSubmitSuccesfull && (
                <Button
                  styles='pl-3 inline-flex items-center mt-5 mb-2 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-white bg-embie-yellow-500'
                  onClick={handleAnswers}
                >
                  Soumettre mon choix
                </Button>
              )}
            </div>
          ) : null;
        })}
      </div>
      <div className='mt-4 items-center align-bottom text-3xl font-serif'>
        Score : {score}
      </div>
    </div>
  );
};

export default GameHandler;
