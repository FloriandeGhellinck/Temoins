import AboutmeTitle from './Title';

const Winner = () => {
  return (
    <>
      <div className='h-screen w-screen bg-gray-100 flex flex-col font-poppins items-center  pb-10 '>
        <div className='h-fit'>
          <AboutmeTitle title='WINNER' />
        </div>
        <div className='flex flex-col w-full items-center justify-center h-4/6'>
          <div className='text-justify w-10/12 h-fit bg-embie-blue-dark-500 text-white p-4 rounded-lg mt-7 align-middle '>
            <p className='text-3xl text-center'>Félicitations ! </p> <br />
            <p className='text-center'>Tu es mon frère 🤪</p> <br />
            <p className='text-center text-3xl'>Veux-tu être mon témoin ?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winner;
