import Rules from '../components/Rules';
import Title from '../components/Title';

const Form = () => {
  return (
    <div className='h-screen w-screen bg-gray-100 flex flex-col items-center font-poppins'>
      <Title title='QUIZ' />
      <h1 className='text-center text-3xl font-bold'> Règles du jeu</h1>
      <div className='text-justify w-10/12 h-4/6 bg-embie-blue-dark-500 text-white p-4 rounded-md mt-7'>
        <Rules />
      </div>
    </div>
  );
};
export default Form;
