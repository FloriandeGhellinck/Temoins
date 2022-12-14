import { useState } from 'react';
import Button from './Button';

const Form = (props: any) => {
  const [formSubmitSuccesfull, setFormSubmitSuccesfull] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const checkIfFormIsValid = (e: any) => {
    console.log(e);
    if (e.target.value !== '') {
      setFormSubmitSuccesfull(true);
    }
    if (!e.target.value) {
      setFormSubmitSuccesfull(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className='gap-3 text-center sm:grid sm:grid-cols-2 flex flex-col '>
        <div className=''>
          <h1 className='pt-2 pb-5'>QUESTION N°{props.number}</h1>
          <div className='pb-3'>
            <label htmlFor={`question-${props.number}`} className=''>
              {props.title}
            </label>
          </div>
          <input
            autoComplete='on'
            name='from_firstname'
            id={props.number}
            type='text'
            className='border-2 w-full text-black'
            onChange={checkIfFormIsValid}
            //   value={toSend.from_firstname}
          />
          {formSubmitSuccesfull && (
            <Button
              type='submit'
              styles='inline-flex items-center mt-5 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-white bg-embie-yellow-500'
            >
              Soumettre mon choix
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};
export default Form;
